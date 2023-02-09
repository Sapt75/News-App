import React from "react"
import Navbar from "./components/navbar"
import Component from "./components/newscomp"
import { Routes, Route, BrowserRouter } from "react-router-dom";





function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Component key={"general"} category="general" />} />
          <Route path="/business" element={<Component key={"business"} category="business" />} />
          <Route path="/entertainment" element={<Component key={"entertainment"} category="entertainment" />} />
          <Route path="/health" element={<Component key={"health"} category="health" />} />
          <Route path="/science" element={<Component key={"science"} category="science" />} />
          <Route path="/sports" element={<Component key={"sports"} category="sports" />} />
          <Route path="/technology" element={<Component key={"technology"} category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


