import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Footer from './Components/Footer';
import Header from './Components/Header';
import AboutUs from './Screen/AboutUs';
import FAQ from './Screen/FAQ';
import FindUni from './Screen/FindUni';
import Home from './Screen/Home';
import NoticeBoard from './Screen/NoticeBoard';


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
      
    </Routes>
    <Footer/>
    </div>

  )
}
