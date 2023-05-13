import React from "react";
// import { FiSend } from "react-icons/fi";
import {
  FaLinkedin,
  FaInstagram,
  FaTwitter,
//   FaFacebookSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import { fontSize } from '@mui/system';

function Footer() {
  return (
    <>
      <footer style={{display:"flex", flexDirection:"column", marginTop:"", justifyContent:"center", alignItems:"center", backgroundColor:"black"}}>
        <div style={{width:"80vw", display:"flex", justifyContent:"space-evenly", marginTop:"5%", backgroundColor:"black"}}>
            <Link to={"/"} onClick={() => window.scrollTo(0, 0)}><span>Home</span></Link>
            <Link to={"/about"} onClick={() => window.scrollTo(0, 0)}><span>About</span></Link>
            <Link to={"/rules"} onClick={() => window.scrollTo(0, 0)}><span>Rules</span></Link>
            <Link to={"/news"} onClick={() => window.scrollTo(0, 0)}><span>News</span></Link>
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
    </>
  );
}

export default Footer;