import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import fevicon from './Pictures/Logo.png'

function Footer() {
  return (
    <div style={{zIndex:"2"}}>
      <footer style={{display:"flex", flexDirection:"column", marginTop:"", justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
        <div className="footer" style={{backgroundColor:"black",display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
        <div className="logo-footer" style={{width:"50%", backgroundColor:"black"}}>
          <div className="logo-text" style={{backgroundColor:"black",display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <img src={fevicon} alt=""  style={{backgroundColor:"black", width:"15%", marginTop:"4vh", marginBottom:"2vh"}}/>
            <p style={{marginRight:"0%",width:"80%" ,textAlign:"center", marginTop:"1vh",fontSize:"medium", color:"white", backgroundColor:"transparent"}}>The beauty of the game is strength stamina and technique and when you shorten the game, technique goes for a toss and the quality of badminton will surely go down in this system.</p>
          </div>
          <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"5%", backgroundColor:"black"}}>
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
        </div>
        <div className="logo-footer2" style={{width:"50%",backgroundColor:"black", display:"flex", justifyContent:"space-evenly", flexDirection:"column"}}>
          <div className="logo-text2" style={{backgroundColor:"black",display:"none",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <img src={fevicon} alt=""  style={{backgroundColor:"black", width:"20%", marginTop:"4vh", marginBottom:"2vh"}}/>
            <p style={{marginRight:"0%",width:"100%" ,textAlign:"center", marginTop:"1vh",fontSize:"medium", color:"white", backgroundColor:"transparent"}}>The beauty of the game is strength stamina and technique and when you shorten the game, technique goes for a toss and the quality of badminton will surely go down in this system.</p>
          </div>
          <div style={{display:"flex", flexDirection:"row"}}>
          <div style={{backgroundColor:"black",width:"50%", display:"flex",flexDirection:"column", alignItems:"left"}}>
          <h2 style={{backgroundColor:"transparent"}}><span className="links">Important Links</span></h2>
          <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Home</Link></li>
          <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/about"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>About</Link></li>
          <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/rules"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Rules</Link></li>
          <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/news"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>News</Link></li>
          </div>
          <div style={{backgroundColor:"black",width:"50%", display:"flex",flexDirection:"column", alignItems:"left"}}>
            <h2 style={{backgroundColor:"transparent"}}><span className="links">Policies and FAQ's</span></h2>
            <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/faq"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>FAQ</Link></li>
            <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/t&c"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>T&C</Link></li>
            <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/cookiepolicy"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Cookie Policy</Link></li>
            <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/privacypolicy"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Privacy Policy</Link></li>
            <li style={{color:"white", backgroundColor:"transparent", marginBottom:".6vh"}}><Link className="links" to={"/accessibilitypolicy"} onClick={() => window.scrollTo(0, 0)} style={{fontSize:"20px"}}>Accessibility Policy</Link></li>
          </div>
          </div>
        </div>
        </div>
        <h2 style={{textAlign:"right", color:"rgb(130 130 130)", backgroundColor:"black",fontSize:"large"}}>
          © CopyRight by Score Keeper
        </h2>
      </footer>
    </div>
  );
}

export default Footer;