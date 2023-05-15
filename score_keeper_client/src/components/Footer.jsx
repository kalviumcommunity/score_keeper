import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import fevicon from './Pictures/Logo.png'

function Footer() {
  return (
    <div style={{zIndex:"2"}}>
      <footer style={{display:"flex", flexDirection:"column", marginTop:"", justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
        <div style={{backgroundColor:"black",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <img src={fevicon} alt=""  style={{backgroundColor:"black", width:"10%", marginTop:"4vh", marginBottom:"2vh"}}/>
          <p className="heading-content" style={{width:"55%",marginRight:"0%", textAlign:"center", marginTop:"1vh"}}>The beauty of the game is strength stamina and technique and when you shorten the game, technique goes for a toss and the quality of badminton will surely go down in this system.</p>
        </div>
        <div style={{width:"80vw", display:"flex", justifyContent:"space-evenly", marginTop:"2%", backgroundColor:"black"}}>
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}><span>Home</span></Link>
            <Link to={"/about"} onClick={() => window.scrollTo(0, 0)}><span>About</span></Link>
            <Link to={"/rules"} onClick={() => window.scrollTo(0, 0)}><span>Rules</span></Link>
            <Link to={"/news"} onClick={() => window.scrollTo(0, 0)}><span>News</span></Link>
            <Link to={"/privacypolicy"} onClick={() => window.scrollTo(0, 0)}><span>Privacy Policy</span></Link>
            <Link to={"/cookiepolicy"} onClick={() => window.scrollTo(0, 0)}><span>Cookie Policy</span></Link>
            <Link to={"/accessibilitypolicy"} onClick={() => window.scrollTo(0, 0)}><span>Accessibility Policy</span></Link>
            <Link to={"/t&c"} onClick={() => window.scrollTo(0, 0)}><span>T&C</span></Link>
            <Link to={"/faq"} onClick={() => window.scrollTo(0, 0)}><span>FAQ</span></Link>
        </div>
        <div style={{width:"50vw", display:"flex", justifyContent:"space-evenly", marginTop:"5%", backgroundColor:"black"}}>
            <Link to={"https://www.linkedin.com/in/chandan-sm-a7507a256"} target="_blank">
              <FaLinkedin className="login" style={{ backgroundColor: "black", color:"white" }} />
            </Link>
            <Link to={"https://www.instagram.com/_.chandan._.gowda._/"}>
              <FaInstagram className="login" style={{ backgroundColor: "black", color:"white" }} />
            </Link>
            <Link to={"https://twitter.com/Chandan48199097"}>
              <FaTwitter className="login" style={{ backgroundColor: "black", color:"white" }} />
            </Link>
        </div>
        <h2 style={{textAlign:"right", color:"#292929", backgroundColor:"black",fontSize:"large"}}>
          © CopyRight by Score Keeper
        </h2>
      </footer>
    </div>
  );
}

export default Footer;