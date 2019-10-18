import React, { Component } from 'react';
import '../screens/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTv, faCode, faPencilAlt, faBookmark, faMagic, faTable, faQuoteRight, faQuoteLeft, faThumbsUp, faLocationArrow, faPhone, faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faFacebookF, faTwitter, faGithub, faInstagram, faLinkedinIn, faAndroid, faWindows } from '@fortawesome/free-brands-svg-icons'
import Img from '../images/black.jpg';
import asd from '../images/asd.jpg';
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
            <img src={Img} width="140" height="140" style={{ borderRadius: 100 }} />
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
            <br /><br />
            <h1>ABOUT ME</h1>
            <div className="About">
                <div>
                    <FontAwesomeIcon icon={faTv} size="2x" />
                    <p style={{ fontSize: 26 }}>Freelancer</p>
                </div>
                <div style={{ background: "orange" }}>
                    <FontAwesomeIcon icon={faCode} size="2x" />
                    <h2>Developer</h2>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPencilAlt} size="2x" />
                    <p style={{ fontSize: 26 }}>Designer</p>
                </div>
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
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCode} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>Web Design</b>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMagic} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>UX / UI Design</b>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWindows} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>Desktop Applications</b>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faTable} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>Business Softwares</b>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faTv} size="3x" />
                    <br /><br />
                    <b style={{ fontSize: 25, fontWeight: "lighter", fontFamily: 'arial' }}>Web Applications</b>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>

            </div>
            <br /><br />
        </div>
    }

    Projects() {
        return <div className="MyProjects">
            <br /><br /><br />
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
            <br /><br /><br /><br />
            <div className="Projects">
                <div><img src={asd} width="390" height="300" /></div>
                <div><img src={asd} width="390" height="300" /></div>
                <div><img src={asd} width="390" height="300" /></div>
                <div><img src={asd} width="390" height="300" /></div>
                <div><img src={asd} width="390" height="300" /></div>
                <div><img src={asd} width="390" height="300" /></div>
            </div>
            <br /><br />
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
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: 900, margin: '0 auto', }}>
                <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
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
                <div style={{ flexDirection: "column" }}>
                    <div>
                        <FontAwesomeIcon icon={faLocationArrow} size="2x" />
                        <h4>Karachi, Pakistan</h4>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} size="2x" />
                        <h4>+92 - 312 - 2849536</h4>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <h4>Ahmedrazaattari536@gmail.com</h4>
                    </div>
                </div>
            </div>
            <br /><br />
            <button style={{border : "none", width : 150, height: 50, background : "orange", fontSize : 16, color : "white", cursor : "pointer"}}>Send <FontAwesomeIcon icon={faLocationArrow} size="1x"/></button>
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
