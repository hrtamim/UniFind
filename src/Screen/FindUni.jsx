import React from "react";
import "../Styles/FindUni.css";
import { Dropdown, Menu, Space, message } from "antd";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../firebase";
import { Link } from "react-router-dom";

export default function FindUni() {
  const [Select, setSelect] = React.useState();
  const [SelectArea, setSelectArea] = React.useState();
  const [SelectFaculty, setSelectFaculty] = React.useState();
  const [SelectCost, setSelectCost] = React.useState();
  const [Area, setArea] = React.useState([]);
  const [Budget, setBudget] = React.useState([]);
  const [Hsc, setHsc] = React.useState();
  const [Data, setData] = React.useState([]);

  React.useEffect(() => {
    data();
  }, []);
  const data = async () => {
    const res = await getDocs(collection(firestore, "data"));
    if (res) {
      let area = [];
      let budget = [];
      let data = [];

      res.forEach((doc) => {
        area.push(doc.data().Area);
        budget.push(doc.data().Budget);
        data.push(doc.data());
        //console.log(doc.data());
      });
      setData(data);
      const newArea = uniq(area);
      const orArea = [];
      newArea.forEach((doc) => {
        orArea.push({
          label: (
            <button
              onClick={() => {
                setSelectArea(doc);
              }}
            >
              {doc}
            </button>
          ),
          key: "0",
        });
      });
      setArea(orArea);
      const newBudget = uniq(budget);
      let orArr = [];
      newBudget.forEach((doc) => {
        orArr.push({
          label: (
            <button
              onClick={() => {
                setSelectCost(doc);
              }}
            >
              {doc}
            </button>
          ),
          key: "0",
        });
      });
      //console.log(orArr);
      setBudget(orArr);
    }
  };
  const search = () => {
    //console.log(SelectArea);
    //console.log(SelectCost);
    if (!Hsc || !SelectCost || !SelectArea) {
      message.warning("Please fill the required field");
      return;
    }
    let arr = Data.filter((d) => {
      if (
        d.Area.match(SelectArea) &&
        d.Budget.match(SelectCost) &&
        parseInt(d.Result) <= parseInt(Hsc)
      ) {
        return d;
      }
    });
    window.location.href = `/Results/${Hsc}/${SelectArea}/${SelectCost}`;
    //setData(arr);
  };
  function uniq(a) {
    var seen = {};
    return a.filter(function (item) {
      return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
  }
  const menu = (
    <Menu
      items={[
        {
          label: (
            <button
              onClick={() => {
                setSelect("2017");
              }}
            >
              2017
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button
              onClick={() => {
                setSelect("2018");
              }}
            >
              2018
            </button>
          ),
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: (
            <button
              onClick={() => {
                setSelect("2019");
              }}
            >
              2020
            </button>
          ),
          key: "3",
        },
      ]}
    />
  );
  const cost = <Menu items={Budget} />;
  const area = <Menu items={Area} />;
  const faculty = (
    <Menu
      items={[
        {
          label: (
            <button
              onClick={() => {
                setSelectFaculty("CSE");
              }}
            >
              CSE
            </button>
          ),
          key: "0",
        },
        {
          label: (
            <button
              onClick={() => {
                setSelectFaculty("EEE");
              }}
            >
              EEE
            </button>
          ),
          key: "1",
        },
        {
          type: "divider",
        },
        {
          label: (
            <button
              onClick={() => {
                setSelectFaculty("Civil");
              }}
            >
              Civil
            </button>
          ),
          key: "3",
        },
      ]}
    />
  );

  return (
    <div style={{}}>
      <div className="findBox">Find University</div>
      <div style={{ marginLeft: "15vw", marginTop: "2vw", fontSize: 20 }}>
        Passing Year <br />
        <Dropdown overlay={menu} trigger={["click"]}>
          <div
            onClick={(e) => e.preventDefault()}
            style={{
              width: "70vw",
              backgroundColor: "#7891BE",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            {Select ? Select : "Select Passing Year"}
          </div>
        </Dropdown>{" "}
        <br />
        SSC Information <br />
        <input
          className="inputFindUni"
          type={"text"}
          placeholder="Ex. 5.00"
        />{" "}
        <br />
        HSC Information <br />
        <input
          onChange={(e) => setHsc(e.target.value)}
          className="inputFindUni"
          type={"text"}
          placeholder="Ex. 5.00"
        />{" "}
        <br />
        Cost <br />
        <Dropdown overlay={cost} trigger={["click"]}>
          <div
            onClick={(e) => e.preventDefault()}
            style={{
              width: "70vw",
              backgroundColor: "#7891BE",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            {SelectCost ? SelectCost : "Select Cost"}
          </div>
        </Dropdown>
        <br />
        Area <br />
        <Dropdown overlay={area} trigger={["click"]}>
          <div
            onClick={(e) => e.preventDefault()}
            style={{
              width: "70vw",
              backgroundColor: "#7891BE",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            {SelectArea ? SelectArea : "Select Area"}
          </div>
        </Dropdown>
        <br />
        Faculty <br />
        <Dropdown overlay={faculty} trigger={["click"]}>
          <div
            onClick={(e) => e.preventDefault()}
            style={{
              width: "70vw",
              backgroundColor: "#7891BE",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            {SelectFaculty ? SelectFaculty : "Select Faculty"}
          </div>
        </Dropdown>
        <br />
      </div>
      <div className="boxButton">
        <button onClick={search} className="buttonBox">
          {" "}
          Find University
        </button>
      </div>
      <div style={{ marginBottom: "11vw" }}></div>
    </div>
  );
}
