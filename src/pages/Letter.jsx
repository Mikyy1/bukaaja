import React from "react";
import Typewriter from "typewriter-effect";
import {useNavigate} from "react-router-dom"; 
import "../App.css";

function Letter() {
    const navigate = useNavigate();

    return (
        <div className="app">
            <div className="title">
                <Typewriter
                    options={{
                        strings: ["ADA SURAT UNTUK KAMU"],
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        deleteSpeed: 50
                    }}/>
            </div>
            <img className="floating-img" src="/img/letter.png" alt="letter"/>
            <div>
                <button className="btn" onClick={() => navigate("/")}>
                    Kembali
                </button>
                <button className="btn" onClick={() => navigate("/letterforu")}>Masuk</button>
            </div>
        </div>
    );
}

export default Letter;
