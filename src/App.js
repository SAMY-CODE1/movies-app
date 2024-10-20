import "./App.css";

import React from "react";
import Watched from "./component/Watched";
import Watchedlist from "./component/Warchedlist";
import Add from "./component/Add";
import Header from "./component/header";
import { Routes, Route } from "react-router-dom";
import ContextProvider from "./component/context/GlobelContext";
import Welcom from "./Welcom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="other-ele">
        <ContextProvider>
          <Routes>
            <Route path="/" element={<Welcom />} />
            <Route path="/watchedlist" element={<Watchedlist />} />
            <Route path="/add" element={<Add />} />
            <Route path="/watched" element={<Watched />} />
          </Routes>
        </ContextProvider>
      </div>
    </div>
  );
}

export default App;
