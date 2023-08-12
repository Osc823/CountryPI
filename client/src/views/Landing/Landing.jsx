//import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="background">
            <div className="container">
                <div className="navImg">
                    <img src="https://i.gifer.com/origin/ae/ae8552cd3112e8999c3629a79ca210c8_w200.gif" alt="Luna" />
                </div>
                <div className="welcome">
                    <h1 className="h11">Bienvenidos</h1>
                </div>
            </div>
            <div className="content">
                <h2></h2>
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
