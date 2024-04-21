import React from 'react';
import StyledAboutMe from "./StyledAboutMe.styled";
import white_ellipse from "../../white-ellips.png";
import orange_ellipse from "../../orange-ellipse.png";
import blue_ellipse from "../../blue-ellipse.png";
import me_chb from "../../312685372_1131401297517550_4159544744676179860_n.jpeg"
import me from "../../photo_2023-06-09_02-59-39.jpg"
import me_2 from "../../photo_2023-03-03_20-57-30.jpg"
import gorilla from "../../photo_2023-02-04_21-48-25.jpg"
import workout from "../../photo_2023-02-04_21-47-43.jpg"
const AboutMe = () => {
    return (
        <div>
            <StyledAboutMe>
                <div className="main">
                    <div className="main-content">
                        <div className="Hero-block">
                            <div className="article-title">
                                <h1>ABOUT ME</h1>
                            </div>
                            <div className="secondary-title">
                                <h3>Hello again everyone! So, you already know that my name is Daniil.
                                    A little about myself:   <br/> I am 17 years old, I live in Aktau.
                                    I'm in school, 11th grade. In my free time, I do workout, program
                                    and go for walks. I love exact sciences and creativity. I've been
                                    a web developer for 2 years now. I want to become a full stack developer.
                                    At the moment I am studying the React framework, as well as Javascript,
                                    Python, Node JS. I want to enter
                                    (International University of Information Technologies) in Almaty.
                                    If I was of interest to you, you can contact me by clicking on the
                                    "Contact me" button, there will be all my contact information</h3>
                            </div>
                            <div className="other_1">
                                <div className="img_1">
                                    <img src={me_chb} alt=""/>
                                </div>
                            </div>
                            <div className="other_2">
                                <div className="img_2">
                                    <img src={workout} alt=""/>
                                </div>
                            </div>
                            <div className="other_3">
                                <div className="img_3">
                                    <img src={me} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="white-ellipse">
                            <img src={white_ellipse} id = "white-ellipse" alt=""/>
                        </div>
                        <div className="orange-ellipse">
                            <img src={orange_ellipse} id = "orange-ellipse" alt=""/>
                        </div>
                        <div className="blue-ellipse">
                            <img src={blue_ellipse} id = "blue-ellipse" alt=""/>
                        </div>
                    </div>
                </div>
            </StyledAboutMe>
        </div>
    );
};

export default AboutMe;
