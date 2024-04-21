import React from 'react';
import StyledProjects from "./StyledProjects.styled";
import $ from "jquery";
import {Carousel, CarouselItem} from "react-bootstrap";
import arrow from "../../Arrow.png";
import project_1 from "../../Projects/Mask Group.png";
import project_2 from "../../Projects/Без имени-2.png";
import project_3 from "../../Projects/Без имени-4.png";
const Projects = () => {
    return (
        <div>
            <StyledProjects>
                <div className="article">
                    <h1>PROJECTS</h1>
                </div>
                <div className="main">
                    <div className="main-content">
                        <div className="carousel">
                            <Carousel className="w-100">
                                <CarouselItem>
                                    <div className="item-1">
                                        <div className="img-1">
                                            <img
                                                src={project_1}
                                                className="d-block w-100"
                                                alt="First slide"
                                            />
                                        </div>
                                        <div className="text-item-1">
                                            <h1>This is test project</h1>
                                            <h3>Lorem ipsum dolor sit amet, <br/>
                                                consectetur adipisicing<br/>
                                                elit. Itaque qui, sapiente. <br/>
                                                Ab adipisci aut <br/>
                                                dignissimos eveniet<br/>
                                                labore mollitia nemo <br/>
                                                odio qui soluta? Aliquam<br/>
                                                consequatur earum error <br/>
                                                expedita iure labore sequi.</h3>
                                        </div>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="item-2">
                                        <div className="img-2">
                                            <img
                                                src={project_2}
                                                className="d-block w-100"
                                                alt="First slide"
                                            />
                                        </div>
                                        <div className="text-item-2">
                                            <h1>Modern Business</h1>
                                            <h3>This site will be used for <br/>
                                                start-up ideas. Focused on design <br/>
                                                and beauty. It remains <br/>
                                                to complete the adaptability <br/>
                                                for other devices and a couple more points. <br/>
                                                I'll finish in about six months, <br/>
                                                because I'm working on other ideas <br/>
                                                for developing skills in programming.
                                            </h3>
                                        </div>
                                    </div>
                                </CarouselItem>

                                <CarouselItem>
                                    <div className="item-3">
                                        <div className="img-3">
                                            <img
                                                src={project_3}
                                                className="d-block w-100"
                                                alt="First slide"
                                            />
                                        </div>
                                        <div className="text-item-3">
                                            <h1>Modern Business</h1>
                                            <h3>This site will be used for <br/>
                                                start-up ideas. Focused on design <br/>
                                                and beauty. It remains <br/>
                                                to complete the adaptability <br/>
                                                for other devices and a couple more points. <br/>
                                                I'll finish in about six months, <br/>
                                                because I'm working on other ideas <br/>
                                                for developing skills in programming.
                                            </h3>
                                        </div>
                                    </div>
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </StyledProjects>
        </div>
    );
};

export default Projects;
