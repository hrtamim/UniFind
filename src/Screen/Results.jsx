import React from "react";
import "../Styles/Results.css";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { Routes, Route, useParams } from "react-router-dom";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1890ff",
    }}
  />
);
const onSearch = (value) => console.log(value);

function Results(props) {
  const { hsc } = useParams();
  const { area } = useParams();
  const { cost } = useParams();
  const [Data, setData] = React.useState();

  React.useEffect(() => {
    console.log(props.data);
    //console.log(hsc);
    search();
  }, [props.data]);
  const search = () => {
    //console.log(SelectArea);
    //console.log(SelectCost)
    if (!Array.isArray(props.data)) {
      return;
    }
    let arr = props.data.filter((d) => {
      if (
        d.Area.match(area) &&
        d.Budget.match(cost) &&
        parseInt(d.Result) <= parseInt(hsc)
      ) {
        return d;
      }
    });

    setData(arr);
  };
  return (
    <div className="bbox">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <text style={{ fontSize: 20, color: "#255f3e" }}>
          List of Private Universities
        </text>
        <div>
          <Search
            placeholder="search"
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div>
      </div>{" "}
      <br />
      <text>
        [For UGC approved courses click on the university name (not on
        individual university's website)]
      </text>
      <div style={{ width: "100%", marginTop: 20, minHeight: "400px" }}>
        <div style={{ display: "flex", backgroundColor: "#255f3e" }}>
          <div className="slBox">
            <text style={{ color: "#fff" }}>Sl</text>
          </div>
          <div className="nameBox">
            <text style={{ color: "#fff" }}>University Name</text>
          </div>
          <div className="webBox">
            <text style={{ color: "#fff" }}>Website</text>
          </div>
        </div>
        {Data &&
          Data.map((doc, i) => (
            <div key={i} style={{ display: "flex" }}>
              <div className="slBox">{i + 1}</div>
              <div className="nameBox">{doc.Name}</div>
              <div className="webBox">
                <a>www.northsouth.edu</a>
              </div>
            </div>
          ))}
        {Data && Data.length == 0 && <p>No data with the search result</p>}
      </div>
    </div>
  );
}

export default Results;
