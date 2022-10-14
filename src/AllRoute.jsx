import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AboutUs from "./Screen/AboutUs";
import FAQ from "./Screen/FAQ";
import FindUni from "./Screen/FindUni";
import Home from "./Screen/Home";
import LogIN from "./Screen/LogIN";
import NoticeBoard from "./Screen/NoticeBoard";
import Profile from "./Screen/Profile";
import SignUp from "./Screen/SignUp";
import { auth, firestore } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Results from "./Screen/Results";
import { getDocs, collection } from "firebase/firestore";

export default function AllRoute() {
  const [user, setUser] = React.useState(null);
  const [Data, setData] = React.useState(null);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
      }
    });
    data();
  }, []);
  const data = async () => {
    const res = await getDocs(collection(firestore, "data"));
    if (res) {
      let arr = [];
      res.forEach((doc) => {
        arr.push(doc.data());
      });
      setData(arr);
    }
  };
  if (!Data) {
    <p>Loading...</p>;
  }
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
      }}
    >
      <Header user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/FindUni" element={<FindUni />} />
        <Route path="/NoticeBoard" element={<NoticeBoard />} />
        <Route path="/LogIn" element={<LogIN />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route
          path="/Results/:hsc/:area/:cost"
          element={<Results data={Data} />}
        />
        <Route
          path="/Profile"
          element={user ? <Profile user={user} /> : <LogIN />}
        />
      </Routes>
      <Footer />
    </div>
  );
}
