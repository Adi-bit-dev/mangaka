import React from "react";
import { useEffect } from "react";
import './mainPageStyles.css'
import Navbar from "./navbar";
import Left from "./left";
import Right from "./right";

function MainPage() {

    useEffect(() => {
        document.body.style.backgroundImage = "none";
    }, []);

    return (
        <div className="main-container">
            <Navbar />
            <div className="lower">
                <Left />
                <Right />
            </div>
        </div>
    );

}

export default MainPage