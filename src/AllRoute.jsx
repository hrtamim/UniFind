import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutUs from './Screen/AboutUs';
import FAQ from './Screen/FAQ';
import FindUni from './Screen/FindUni';
import Home from './Screen/Home';
import LogIN from './Screen/LogIN';
import NoticeBoard from './Screen/NoticeBoard';
import Profile from './Screen/Profile';
import SignUp from './Screen/SignUp';

export default function AllRoute() {
  return (
    <div>
        <Header/>
    <Routes>
        
      <Route path="/" element={<Home />} />
      <Route path="/AboutUs" element={<AboutUs />} />
      <Route path="/FAQ" element={<FAQ />} />
      <Route path="/FindUni" element={<FindUni />} />
      <Route path="/NoticeBoard" element={<NoticeBoard />} />
      <Route path="/LogIn" element={<LogIN />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Profile" element={<Profile />} />
    </Routes>
    <Footer/>
    </div>

  )
}
