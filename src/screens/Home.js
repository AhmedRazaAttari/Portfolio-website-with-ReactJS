import React, { Component } from 'react';
import '../screens/style.css';
import '../screens/MediaQueries.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTv, faCode, faPencilAlt, faBookmark, faMagic, faTable, faQuoteRight, faQuoteLeft, faThumbsUp, faLocationArrow, faPhone, faEnvelope, faUser } from '@fortawesome/fontawesome-free-solid';
import { faFacebookF, faTwitter, faGithub, faInstagram, faLinkedinIn, faAndroid, faWindows } from '@fortawesome/free-brands-svg-icons'
import Img from '../images/AhmedRaza.jpg';
import asd from '../images/asd.jpg';
import MBL from '../images/MobilePhoneUI.jpg';
import MBL2 from '../images/MobilePhoneUI2.jpg';
import WEB from '../images/WEB.jpg';
import WEB2 from '../images/WEB2.jpg';
import DESKTOP from '../images/DESKTOP.jpg';
import DESKTOP2 from '../images/DESKTOP2.jpg';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class Home extends Component {

    constructor() {
        super();

        this.state = {

        }
    }

    header() {
        return <div className="header">
            <nav>
                <ul>
                    <li><a href="#"><FontAwesomeIcon icon={faHome} /></a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <br />
            <div className="ProfilePic">
                {/* <img src={Img} height="180" style={{ borderRadius: 100 }} /> */}
            </div>
            <b className="colorClass heading" style={{ fontSize: 55, fontWeight: "lighter" }}>Ahmed Raza</b>
            <p className="colorClass heading" style={{ fontSize: 22 }}>MERN STACK DEVELOPER</p>
            <hr />
            <br />
            <div className="socialIconsDiv">
                <div className="socialIcons">
                    <FontAwesomeIcon icon={faFacebookF} color="white" style={{ fontSize: 22 }} />
                </div>
                <div className="socialIcons">
                    <FontAwesomeIcon icon={faTwitter} color="white" style={{ fontSize: 22 }} />
                </div>
                <div className="socialIcons">
                    <FontAwesomeIcon icon={faGithub} color="white" style={{ fontSize: 22 }} />
                </div>
                <div className="socialIcons">
                    <FontAwesomeIcon icon={faInstagram} color="white" style={{ fontSize: 22 }} />
                </div>
                <div className="socialIcons">
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" style={{ fontSize: 22 }} />
                </div>
            </div>
        </div>
    }

    About() {
        return <div className="AboutDiv">
            
            <div style={{ height: 'auto', width: 400, textAlign: "left", padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", color: "orange" }}>
                    <h2><FontAwesomeIcon icon={faUser} /></h2> <h2 style={{ marginLeft: 10 }}>About Me</h2>
                </div>
                <br />
                <b style={{ color: "grey" }}>I am a passionate Front-end and backend developer who has been working in this field for more than 3 years now.<br /><br />
                    You have an idea, you need someone to bring it ot life. Or you already have a product that needs to be redined to meet the demand of 2017 users!. This is where i come in! With my knowledge and creativity. I can take your idea, your product to the next level. Let's have a chat and discuss your idea!</b>
            </div>
            <div style={{ height: "auto", width: 500, padding: 10, textAlign: "left" }}>
                <h2 style={{ color: "orange" }}>DEVELOPMENT SKILLS</h2>
                <br />
                <b>HTML</b>
                <hr style={{ width: "90%", borderWidth: 2, borderColor: "olive", marginLeft: 0 }} />
                <br />
                <b>CSS</b>
                <hr style={{ width: "85%", borderWidth: 2, borderColor: "orange", marginLeft: 0 }} />
                <br />
                <b>JAVASCRIPT</b>
                <hr style={{ width: "80%", borderWidth: 2, borderColor: "skyblue", marginLeft: 0 }} />
                <br />
                <b>REACT</b>
                <hr style={{ width: "85%", borderWidth: 2, borderColor: "blue", marginLeft: 0 }} />
                <br />
                <b>REACT NATIVE</b>
                <hr style={{ width: "88%", borderWidth: 2, borderColor: "skyblue", marginLeft: 0 }} />
                <br />
                <b>PHP</b>
                <hr style={{ width: "60%", borderWidth: 2, borderColor: "green", marginLeft: 0 }} />
                <br />
                <b>C#</b>
                <hr style={{ width: "68%", borderWidth: 2, borderColor: "lightgreen", marginLeft: 0 }} />
                

            </div>
        </div>
    }

    Services() {
        return <div className="ServicesDiv">
            <h2><FontAwesomeIcon icon={faBookmark} />&nbsp;&nbsp;What  I  DO</h2>
            <br />
            <div className="Services">
                <div>
                    <FontAwesomeIcon icon={faAndroid} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>Mobile Apps</b>
                    <p>I am professionate Mobile app developer. I can design and develop custom android and IOS app with full of features and i also done some project in past</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCode} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>Web Design & Development</b>
                    <p>I'm a free thinker, unique creator and a business lover. I have a passion for web designing and web development, since than, I am working on Web development</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMagic} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>UX / UI Design</b>
                    <p>I've worked on UX and UI designs for web and mobile apps  - I use adobe Illustrator for designing screens and layouts (UI) to ensure the quality of screens and make it look real even on the big screens.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWindows} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>Desktop Applications</b>
                    <p>I can develop any program using visual basic or c sharp according to your requirement. also  i can develop applications to work with internet, web sites, such as  mail applications and database applications.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faTable} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>Business Softwares</b>
                    <p>I can develop business software that can take business on the new stage like Accouting Software that can help you to record entries and save data on cloud</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faTv} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>Web Applications</b>
                    <p>I can develop small and huge web applications for personal and professional use.</p>
                </div>

            </div>
            <br /><br />
        </div>
    }

    Projects() {
        return <div className="MyProjects">
            <br />
            <p style={{ fontSize: 32 }}>MY <b>PROJECTS</b></p>
            <nav>
                <ul>
                    <li><a href="#">All</a></li>
                    <li><a href="#">Web</a></li>
                    <li><a href="#">Mobile Apps</a></li>
                    <li><a href="#">Desktop</a></li>
                    <li><a href="#">Graphics</a></li>
                </ul>
            </nav>
            <br /><br />
            <div className="Projects">
                <div><img src={MBL} width="300" height="250" /></div>
                <div><img src={MBL2} width="300" height="250" /></div>
                <div><img src={WEB} width="300" height="250" /></div>
                <div><img src={WEB2} width="300" height="250" /></div>
                <div><img src={DESKTOP} width="300" height="250" /></div>
                <div><img src={DESKTOP2} width="300" height="250" /></div>
                <div><img src={WEB2} width="300" height="250" /></div>
                <div><img src={DESKTOP} width="300" height="250" /></div>
                <div><img src={DESKTOP2} width="300" height="250" /></div>
            </div>
            <br /><br /><br />

            <button style={{ width: 90, height: 40, margin: '0 auto', background: 'orange', border: 'none', boxShadow: "#e9e6e6 2px -1px 20px 4px" }}>Load More</button>
        </div>
    }

    Quote() {
        return <div className="QuoteDiv">
            <div style={{ height: 350, background: "rgba(63,81,181)", opacity: 0.7, display: 'flex', justifyContent: "center", alignItems: "center", padding: 30, flexDirection: 'column' }}>
                <div style={{ flexDirection: "row", display: "flex" }}>
                    <FontAwesomeIcon icon={faQuoteLeft} size="3x" color="white" />&nbsp;&nbsp;<h2 style={{ fontSize: 32, fontFamily: "arial", color: "white", fontWeight: "lighter" }}>Design is not just what it looks like and feels like. Design is how it works</h2>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faQuoteRight} size="3x" color="white" />
                </div>
                <br />
                <div>
                    <p style={{ color: "white", fontSize: 22 }}>~ Steve Jobs</p>
                </div>
            </div>
        </div>
    }

    Hiring() {
        return <div className="hiringDiv">
            <h1>Need Any Help?</h1>
            <h3><FontAwesomeIcon icon={faThumbsUp} color="olive" />&nbsp;&nbsp;I am available for freelance hire</h3>
            <br /><br />
            <button style={{ height: 40, width: 90, background: 'orange', border: 'none' }}>Hire Me</button>
        </div>
    }

    Contact() {
        return <div className="ContactDiv">
            <h2>Want To Discuss A Project?</h2>
            <h3>Just Drop A Message Below And I'll Get In Touch!</h3>
            <hr />
            <br /><br />
            {/* <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 900, margin: '0 auto', }}>
                
                
            </div> */}
            <div style={{ display: "flex", justifyContent: "space-evenly", width: 900, margin : '0 auto'  }}>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    <h2>Queries</h2>
                    <h4>Ahmedrazaattari536@gmail.com</h4>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPhone} size="2x" />
                    <h2>CALL</h2>
                    <h4>+92 - 312 - 2849536</h4>
                </div>
                <div>

                    
                </div>
            </div>
            <br /><br />
            <div style={{ display: "flex", justifyContent: "center",alignItems : "center" ,flexDirection: "column", width: 700, margin : '0 auto' }}>
                    <div style={{ display: "flex", width: 550, justifyContent: "space-between" }}>
                        <TextField
                            id="standard-search"
                            label="Your Name"
                            type="name"
                            margin="normal"
                            className="textfield"
                        />
                        <TextField
                            id="standard-search"
                            label="Your Email"
                            type="email"
                            margin="normal"
                            className="textfield"
                        />
                    </div>
                    <TextField
                        id="standard-search"
                        label="Subject"
                        type="email"
                        margin="normal"
                        className="textfield"
                        style={{ width: 550 }}
                    />
                    <TextField
                        id="standard-search"
                        label="Your Message"
                        type="email"
                        margin="normal"
                        className="textfield"
                        style={{ width: 550 }}
                    />
                </div>
            <br /><br />
            <button style={{ border: "none", width: 170, height: 50, background: "orange", fontSize: 16, color: "white", cursor: "pointer" }}>Send Message</button>
            <br /><br /><br /><br />
            <div className="socialIconsDiv" style={{display : "flex", justifyContent : "space-between", flex : 1, alignItems : "center", width : 300, margin : '0 auto'}}>
                <div className="socialIcons">
                    <FontAwesomeIcon icon={faFacebookF} color="white" style={{ fontSize: 22 }} />
                </div>
                <div className="socialIcons">
                    <FontAwesomeIcon icon={faTwitter} color="white" style={{ fontSize: 22 }} />
                </div>
                <div className="socialIcons">
                    <FontAwesomeIcon icon={faGithub} color="white" style={{ fontSize: 22 }} />
                </div>
                <div className="socialIcons">
                    <FontAwesomeIcon icon={faInstagram} color="white" style={{ fontSize: 22 }} />
                </div>
                <div className="socialIcons">
                    <FontAwesomeIcon icon={faLinkedinIn} color="white" style={{ fontSize: 22 }} />
                </div>
            </div>
            <br /><br />
            <b>© Copyright 2020 Develop By Ahmed Raza</b>
        </div>
    }


    render() {
        return (
            <div className="App">
                {this.header()}
                {this.About()}
                {this.Services()}
                {this.Projects()}
                {this.Quote()}
                {this.Hiring()}
                {this.Contact()}
            </div>
        );
    }
}

export default Home;
