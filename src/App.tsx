import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "@/components/Hero";
import HomeSection2 from "./components/HomeSection2";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <HomeSection2 />
        </div>
    );
}

export default App;
