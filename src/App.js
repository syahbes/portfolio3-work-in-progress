import * as React from "react";
import { Routes, Route, } from "react-router-dom";
import { Home,About,Skills,Portfolio,Contact,Layout,NoPage } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />     
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="skills" element={<Skills />}/>
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
