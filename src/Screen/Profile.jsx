import React from "react";
import { Button, Form, Input, InputNumber, message, Spin } from "antd";
import "../Styles/Profile.css";
import student from "../img/st.png";
import { doc, setDoc, getDoc, addDoc, collection } from "firebase/firestore";
import { firestore, auth } from "../firebase";
import { getAuth, updateEmail } from "firebase/auth";
import { BiLoader } from "react-icons/bi";
import name from "./name.json";
import { readFile } from "xlsx";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function Profile(props) {
  const [Name, setName] = React.useState();
  const [Email, setEmail] = React.useState();
  const [Age, setAge] = React.useState();
  const [Introduction, setIntroduction] = React.useState();
  const [Loader, setLoader] = React.useState(false);

  const onFinish = (values) => {
    console.log(values);
  };
  React.useEffect(() => {
    //console.log(name);
    //add();
    load();
  }, []);
  const add = async () => {
    Object.keys(name).forEach(function (key, index) {
      try {
        addDoc(collection(firestore, "data"), name[key]);
      } catch (e) {
        console.log(e.message);
        return;
      }
    });
  };
  const load = async () => {
    const uid = auth.currentUser.uid;
    const ref = doc(firestore, "users", uid);
    const res = await getDoc(ref);
    setEmail(auth.currentUser.email);
    if (res.exists()) {
      setName(res.data().name);

      setAge(res.data().age);
      setIntroduction(res.data().introduction);
    }
  };
  const addInformation = async () => {
    const uid = auth.currentUser.uid;
    setLoader(true);

    try {
      await setDoc(doc(firestore, "users", uid), {
        name: Name,
        email: Email,
        age: Age,
        introduction: Introduction,
      });
    } catch (e) {
      message.error(e.message);
      return;
    }
    updateEmail(auth.currentUser, Email)
      .then(() => {
        message.success("Successfully updated");
        setLoader(false);
      })
      .catch((error) => {
        message.error(error.message);
        setLoader(false);
      });
  };
  return (
    <div className="fullBox">
      <div className="backBox">
        <div className="profileBox">
          <img src={student} height="100" width="100" borderRadious="47"></img>
        </div>
        <div
          style={{
            marginLeft: "30%",
            marginRight: "10vw",
            marginTop: 20,
            color: "#fff",
          }}
        >
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            validateMessages={validateMessages}
          >
            <Form.Item>
              <p style={{ color: "#fff" }}>Name</p>
              <Input value={Name} onChange={(e) => setName(e.target.value)} />
            </Form.Item>
            <Form.Item>
              <p style={{ color: "#fff" }}>Email</p>
              <Input value={Email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Item>
            <Form.Item>
              <p style={{ color: "#fff" }}>Age</p>
              <InputNumber value={Age} onChange={(e) => setAge(e)} />
            </Form.Item>

            <Form.Item name={["user", "introduction"]}>
              <p style={{ color: "#fff" }}>Introduction</p>
              <Input.TextArea
                value={Introduction}
                onChange={(e) => setIntroduction(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button onClick={addInformation} type="primary" htmlType="submit">
                {Loader && (
                  <Spin indicator={<BiLoader style={{ color: "white" }} />} />
                )}
                Save
              </Button>
            </Form.Item>
          </Form>
        </div>
        <button style={{ marginLeft: "47%" }}>LogOut</button>
      </div>
    </div>
  );
}

export default Profile;
