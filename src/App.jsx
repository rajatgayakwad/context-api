import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";
import UserDetails from "./components/UserDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />}>

        <Route path="/user/:id" element={<UserDetails />} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
