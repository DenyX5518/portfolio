import React from 'react';
import HeaderStyled from "./HeaderStyled.styled";
import logo from "../../logo.png";
import Me from "../../Me2.png";
const Header = () => {
    const tg = () => {
        document.location.href = "https://t.me/DenyX5283";
    }
    return (
        <div className="Header-component">
            <HeaderStyled>
                <div className="main">
                    <div className="main-nav">
                        <div className="nav-bar">
                            <div className="logo">
                                <h1><span><img src={logo} alt=""/></span>DenyX</h1>
                            </div>
                            <h1 className="nav-h1" id = "Home-nav">Home</h1>
                            <h1 className="nav-h1" id = "Projects-nav">Projects</h1>
                            <h1 className="nav-h1" id = "Skills-nav">Skills</h1>
                            <h1 className="nav-h1" id = "AboutMe-nav">About me</h1>
                        </div>
                    </div>
                    <div className="main-content">
                        <div className="article-title">
                            <h1><span>Hello</span><br/> I'M DANIIL <br/>SHAIDULIN</h1>
                        </div>
                        <div className="secondary-title">
                            <h3>
                                I've been doing web design, front-end and<br/>
                                back-end development for a year now. Do you <br/>
                                need a website design, site layout, or maybe a <br/>
                                turnkey website? Then contact me
                            </h3>
                        </div>
                        <div className="article-btn">
                            <button onClick={tg}>CONTACT ME</button>
                        </div>
                        <img id="Me-img" src={Me} alt=""/>
                    </div>
                </div>
            </HeaderStyled>
        </div>
    );
};

export default Header;
