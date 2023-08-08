//import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="background">
            <div className="content">
                <h1>Welcome to Our Landing Page</h1>
                
                <div className="imgCont">
                    <img src="https://i.pinimg.com/originals/b2/f1/17/b2f1177cea910d95dca3048224b419d6.gif" alt="" />
                    <Link to='/home'>
                        <button className="btn">Bienvenido!</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;
