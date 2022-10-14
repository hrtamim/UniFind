import React from "react";
import "../Styles/LogIN.css";
import Wlc from "../img/Wlc.jpg";
import signup from "../img/signup.png";
import { BiLoader } from "react-icons/bi";
import { auth, firestore } from "../firebase";
import { Checkbox, message, Spin } from "antd";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

function SignUp(props) {
  const [Name, setName] = React.useState();
  const [Email, setEmail] = React.useState();
  const [Password, setPassword] = React.useState();
  const [RePassword, setRePassword] = React.useState();
  const [Loader, setLoader] = React.useState(false);

  const signUp = async () => {
    if (!Email) {
      message.warning("Please enter email address");
      return;
    }
    if (!Password) {
      message.warning("Please enter password");
      return;
    }
    if (!RePassword) {
      message.warning("Please enter password again");
      return;
    }
    if (Password != RePassword) {
      message.warning("Password are not matched");
      return;
    }
    if (Password.length < 6) {
      message.warning("Password must be getter then 6 characters");
      return;
    }
    setLoader(true);
    createUserWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // setDoc(doc(firestore, "users", user.uid), {
        //   name: "",
        //   email: user.email,
        //   age: "",
        //   introduction: "",
        // });
        setLoader(false);

        window.location.href = "/Profile";
        // ...
      })
      .catch((error) => {
        setLoader(false);
        const errorCode = error.code;
        const errorMessage = error.message;
        message.error(errorMessage);
        // ..
      });
  };
  return (
    <div className="totalPage">
      <div
        style={{
          marginTop: 10,
          backgroundColor: "#fff",
          borderRadius: 40,
          display: "flex",
          height: "100%",
          flexWrap: "wrap",
        }}
      >
        <div className="boxA">
          <img src={signup} height="90%" width="90%"></img>
        </div>
        <div className="boxB">
          <div className="topText">Sign Up</div>
          <div style={{ fontSize: 16 }}>Please register here...</div>
          <div style={{ fontSize: 20 }}>Name</div>
          <input
            onChange={(e) => setName(e.target.value)}
            className="inputLogIn"
            placeholder="Your Name"
            type={"text"}
          />{" "}
          <br />
          <div style={{ fontSize: 20 }}>Email</div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="inputLogIn"
            placeholder="Ex. saiful@gmail.com"
            type={"text"}
          />{" "}
          <br />
          <div style={{ fontSize: 20 }}>Password</div>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="inputLogIn"
            placeholder="More than 6 characters"
            type={"text"}
          />{" "}
          <br />
          <div style={{ fontSize: 20 }}>Re-type Password</div>
          <input
            onChange={(e) => setRePassword(e.target.value)}
            className="inputLogIn"
            placeholder="More than 6 characters"
            type={"text"}
          />{" "}
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "40vw",
              marginTop: 10,
            }}
          >
            <Checkbox onChange={onChange}>Remember me</Checkbox>
          </div>
          <button onClick={signUp} className="LogButton">
            {" "}
            {Loader && (
              <Spin indicator={<BiLoader style={{ color: "white" }} />} />
            )}
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
