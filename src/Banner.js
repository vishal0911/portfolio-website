import React from 'react';
import './Banner.css';
import SchoolIcon from '@material-ui/icons/School';
import CategoryIcon from '@material-ui/icons/Category';
import CollectionsIcon from '@material-ui/icons/Collections';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import { useHistory } from 'react-router-dom';

function Banner() {

    const history = useHistory();

    return (
        <div className="banner">
            <div className="banner__body">
                <div className="banner__content">

                    <img src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/229065411_4052493291516433_3325227827007896646_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=730e14&_nc_ohc=DloV5jmd-OMAX-mU3r7&_nc_ht=scontent.fgau1-1.fna&oh=531b7f38da37c7e869d6a199824dc520&oe=61356C9A" alt="" />
                    <div className="banner__info">

                        <h3> Hello, my name is Vishal. I am a Designer & Full Stack Web Developer. </h3>

                    </div>

                </div>

                <div className="banner__about">
                    <h4>About me</h4>
                    <h5>I'm a UI Designer and Full Stack Web Developer from India</h5>
                    <p>I relish solving complex problems and give them new appearance of simple and beautiful interface designs.
                        I love the logic and structure of coding, and always aim for writing neat, elegant and efficient
                        code. <br />
                        When I'm not coding or pushing pixels, you'll find me in the gym or in the kitchen making sound outta utensils cooking new recipe ;)
                    </p>
                </div>

            </div>

            {/* Education */}
            <div className="education">

                <h2>Education <SchoolIcon /></h2>

                <div className="schools">

                    <div className="masters">
                        <h3>University of Birmingham, United Kingdom</h3>
                        <p>MSc in Electronics and Computer Engineering
                            <br />
                            Study year: 2019-2021</p>
                    </div>
                    <div className="vertical__border" />
                    <div className="bachelor">
                        <h3>Vellore Institute of Technology, India</h3>
                        <p>B.Tech in Electronics and Communications
                            <br />
                            Study year: 2015-2019</p>
                    </div>

                </div>

            </div>

            {/* Skills */}
            <div className="skills">
                <h2>Skills <CategoryIcon /></h2>

                <div className="javascript__skill">
                    <h3>JavaScript</h3>
                    <div className="skill js">
                        6/10
                    </div>
                </div>
                <div className="javascript__skill">
                    <h3>CSS</h3>
                    <div className="skill css">
                        6.5/10
                    </div>
                </div>
                <div className="javascript__skill">
                    <h3>HTML</h3>
                    <div className="skill html">
                        6/10
                    </div>
                </div>

                <div className="javascript__skill">
                    <h3>Pyhton</h3>
                    <div className="skill python">
                        7/10
                    </div>
                </div>
                <div className="javascript__skill">
                    <h3>C/C++</h3>
                    <div className="skill cpp">
                        7/10
                    </div>
                </div>

                {/* Projects */}
                <div className="projects">

                    <h2>My latest projects <CollectionsIcon /></h2>

                    <div className="project__list">

                        <div className="banner__row1">

                            <div className="portfolio">
                                <img onClick={() => history.push('/portfolio')} src="https://scontent.fgau1-2.fna.fbcdn.net/v/t1.6435-9/229696300_4061771543921941_8852450395044527789_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=730e14&_nc_ohc=SNZlAuaMMuoAX91qoQK&_nc_ht=scontent.fgau1-2.fna&oh=33cdd11fb72e02c9eb87d90b8d49ec1d&oe=6139F27D" alt="" />
                                <h3>Portfolio-website</h3>
                            </div>

                            <div className="netflix">
                                <img onClick={() => history.push('/netflix')} src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/229820043_4046626798769749_3447055486474734479_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=730e14&_nc_ohc=ohMJQpuBWSMAX_NCo4g&_nc_ht=scontent.fgau1-1.fna&oh=0fcad18d12fa18f9973e1c1b92fdd427&oe=61355E20" alt="" />
                                <h3>Netflix-Clone</h3>
                            </div>


                        </div>
                        <div className="banner__row2">

                            <div className="linkedin">
                                <img onClick={() => history.push('/linkedin')} src="https://scontent.fgau1-2.fna.fbcdn.net/v/t1.6435-9/223201443_4046773642088398_6567777761421683972_n.jpg?_nc_cat=106&ccb=1-4&_nc_sid=730e14&_nc_ohc=sQKjK--ZAeUAX-ep3E9&_nc_ht=scontent.fgau1-2.fna&oh=7daa1227fea9a37b5fe9cf70430a6020&oe=6134EF50" alt="" />
                                <h3>Linkedin-Clone</h3>
                            </div>

                            <div className="ecommerce">
                                <img onClick={() => history.push('/ecommerce')} src="https://scontent.fgau1-1.fna.fbcdn.net/v/t1.6435-9/224649385_4047003138732115_6090231025996933394_n.jpg?_nc_cat=103&ccb=1-4&_nc_sid=730e14&_nc_ohc=vScJLkvihH4AX94zs47&_nc_ht=scontent.fgau1-1.fna&oh=d4d32219ae329690ccddaea1f49e5386&oe=6135218C" alt="" />
                                <h3>Ecommerce-website</h3>
                            </div>

                        </div>

                    </div>
                </div>

                {/* Certification */}
                <div className="certification">
                    <h2>Certification <CardMembershipIcon /></h2>
                    <div className="cert__row1">
                        <a href="https://drive.google.com/file/d/1KSlZXWYa6dUGc983GsjOYRtXAfBP8FNq/view?usp=sharing">The Complete ReactJS:<br /> Beginner to Advanced</a>
                        <a href="https://drive.google.com/file/d/1nkYV6D7jENeEFI369gOtY8oI2WZ15GjG/view?usp=sharing">Model a car & design<br /> a PID contoller in MATLAB/SIMULINK</a>
                        <a href="https://drive.google.com/file/d/1DMOBtRLeVRAYlN0iTEj-KM1vR8-K4Zkx/view?usp=sharing">Programming on RX cortex <br />-M3/M4 processor</a>
                        <a href="https://drive.google.com/file/d/1GX2QVgxHuh2qR1uRt5S9FgMutME9v_1o/view?usp=sharing">Trainee-Doordarshan</a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Banner;
