import React from 'react';
import SkillsStyled from "./Skills.styled";
import pero from "../../pero.png";
import more from "../../more.png";
import logo_design from "../../logo-design.png";
import backend from "../../backend.png";
import frontend from "../../frontend.png";
import python from "../../Python.png";
const Skills = () => {
    return (
        <div className="Skills-component">
            <SkillsStyled>
                <div className="skills-items">
                    <div className="item-1">
                        <img src={pero} alt=""/>
                        <h3>Product Design</h3>
                    </div>

                    <div className="item-2">
                        <img src={more} alt=""/>
                        <h3>UX/UI Design</h3>
                    </div>

                    <div className="item-3">
                        <img src={logo_design} alt=""/>
                        <h3>Icon Design</h3>
                    </div>

                    <div className="item-4">
                        <img src={backend} alt=""/>
                        <h3>Logo Design</h3>
                    </div>

                    <div className="item-5">
                        <img src={frontend} alt=""/>
                        <h3>Back-End</h3>
                    </div>

                    <div className="item-6">
                        <h1>UX/UI</h1>
                        <h3>Frond-End</h3>
                    </div>

                    <div className="item-7">
                        <img src={python} alt=""/>
                        <h3>Python</h3>
                    </div>

                </div>
            </SkillsStyled>
        </div>
    );
};

export default Skills;
