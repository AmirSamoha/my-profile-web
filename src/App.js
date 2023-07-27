import React from "react";
// import global style
import GlobalStyle from "./components/GlobalStyle";
// import pages
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";
import AboutMe from "./pages/AboutMe";
import Nav from "./components/Nav";
//router switcher between pages
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" exact element={<AboutMe />} />
        <Route path="/aboutus" exact element={<AboutMe />} />
        <Route path="/work" exact element={<MyWork />} />
        <Route path="/contact" exact element={<ContactMe />} />
      </Routes>
    </div>
  );
}

export default App;
