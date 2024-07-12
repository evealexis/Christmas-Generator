import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import Activities from "./Activities";
import Traditions from "./Traditions";
import GiftList from "./GiftList";
import Countdown from "./Countdown";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>

<Router>
<Header />

<Routes>
    <Route path="/" element={<Content />}></Route>
    <Route path="/Activities" element={<Activities />}></Route>
    <Route path="/Traditions" element={<Traditions />}></Route>
    <Route path="/GiftList" element={<GiftList />}></Route>   
    <Route path="/Countdown" element={<Countdown />}></Route>     
    <Route path="/Contact" element={<Contact />}></Route>
</Routes>    
</Router>

      <Footer />
    </div>
  );
}

export default App;
