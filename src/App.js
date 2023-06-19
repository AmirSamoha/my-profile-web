import React from "react";
// import global style
import GlobalStyle from "./components/GlobalStyle";
// import pages
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
//router switcher between pages
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutUs />} />
        <Route path="/aboutus" exact element={<AboutUs />} />
        <Route path="/work" exact element={<OurWork />} />
        <Route path="/contact" exact element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
