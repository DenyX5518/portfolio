import React from 'react';
import StyledFooter from "./StyledFooter.styled";
import logo from "../../logo.png";
import arrow from "../../Без названия.svg";
import $ from "jquery";
const Footer = () => {
    $(document).ready(function (){
        $("#AboutMe").click(function (){
            window.scrollTo({
                top: 1600,
                left: 0,
                behavior: "smooth"
            })
        })
        $("#Skills").click(function (){
            window.scrollTo({
                top: 750,
                left: 0,
                behavior: "smooth"
            })
        })
        $("#Home").click(function (){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        })
        $("#Projects").click(function (){
            window.scrollTo({
                top: 2400,
                left: 0,
                behavior: "smooth"
            })
        })



        $("#AboutMe-nav").click(function (){
            window.scrollTo({
                top: 1600,
                left: 0,
                behavior: "smooth"
            })
        })
        $("#Skills-nav").click(function (){
            window.scrollTo({
                top: 750,
                left: 0,
                behavior: "smooth"
            })
        })
        $("#Home-nav").click(function (){
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        })
        $("#Projects-nav").click(function (){
            window.scrollTo({
                top: 2400,
                left: 0,
                behavior: "smooth"
            })
        })


        $("#inst").click(function (){
            window.location.href = "https://www.instagram.com/danik5518_/";
        })
        $(".item-2-gg").click(function (){
            console.log("hsd")
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            })
        })
    })
    return (
        <div>
            <StyledFooter>
                <div className="main">
                    <div className="main-content">
                        {/*<div className="arrow-img">*/}
                        {/*    <h1 id = "footer-text"><span><img src={logo} alt=""/></span>DENYX</h1>*/}
                        {/*</div>*/}
                        <div className="items">
                            <div className="item-1">
                                <h1 id = "Home">Home</h1>
                                <h1 id = "AboutMe">About Me</h1>
                                <h1 id = "Projects">Projects</h1>
                                <h1 id = "Skills">Skills</h1>
                            </div>
                            <div className="item-2">
                                <h1>Contact</h1>
                                <h1>Даниил Александрович</h1>
                                <h1 id = "inst">Instagram</h1>
                                <h1>+7 (747)-692-02-45</h1>
                            </div>
                            <div className="item-right">
                                <div className="item-1-gg">
                                </div>
                                <div className="item-2-gg">
                                    <img src={arrow} alt=""/>
                                </div>
                                <div className="item-3-gg">

                                </div>
                                <div className="item-4-gg">
                                    <h1>Copyright © 2023, DenyX</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledFooter>
        </div>
    );
};

export default Footer;
