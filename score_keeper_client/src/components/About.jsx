import React from 'react'
import photo from '../Pictures/My_photo.jpeg'
// import { FaBeer } from 'react-icons/fa';
// AiOutlineGoogle
// FaHtml5
// FaRegUser

function About() {
  return (
    <div>

        {/* Intro Section */}

        <section className="intro" style={{borderBottom:"3px solid white"}}>

            <div id="intro" style={{marginLeft:"8%",height:"99.8vh",display:"flex",flexDirection:"column",alignItems:"center"}}>
                {/* <div style={{height:"13vh"}}>1111</div>	 */}
                <div style={{marginTop:"21%"}}>
                    <h4 style={{color: "#fcfc",letterSpacing: "2px",fontSize: "large",backgroundColor:"transparent",marginBottom:"5px"}}>Hello, my name is</h4>
                    <h1 style={{color:"white",fontSize:"xxx-large",backgroundColor:"transparent",margin:"0px"}}>Chandan <span style={{fontSize:"xxx-large"}}>Gowda</span></h1>
                    <h3 style={{color:"white",fontSize:"x-large",backgroundColor:"transparent",marginTop:"10px"}}>I'am an Aspiring Full Stack Developer.</h3>
                    <div>
                        <p style={{color:"#fcfc", width:"75%", letterSpacing:"1px", fontSize:"large", marginTop:"15px",textAlign:"justify"}}>I can help you create a beautiful, responsive and eyecatching website. To know more about the prising and other details please feel free to text in any of my socials or just send me an email stating "Details" on the Below link.</p>
                    </div>
                    <form className="newslatter" style={{marginBottom:"2%",width:"80%"}}>
                        <input style={{width:"40%",display: "inline-block",padding: "14px 130px 14px 15px",border: "2px solid #f9004d",borderRadius: "30px", backgroundColor:"white", color:"black"}} type="email" id="mail" placeholder="Enter Your Email"/>
                        <button className="login" style={{marginLeft:"-20.5%",width:"20%", marginTop:"1%",fontSize:"small",padding: "10px 20px !important"}}><a id="btn-text" href="mailto:chandan1012004@gmail.com"> Let's Start</a></button>
                            
                    </form>
                    
                </div>
            </div>

	    </section>

        {/* About Section */}

        <section id="about" className="about" style={{height:"87vh",backgroundColor:"black",display:"flex",borderBottom:"3px solid white"}}>
            <div style={{width:"40%", backgroundColor:"black", display:"flex", justifyContent:"center",alignItems:"center"}}>
                <img src={photo} style={{width:"55%", borderRadius:"50px",border:"3px solid white"}} alt="" />
            </div>
            <div className="about-text" style={{backgroundColor:"black",display:"flex",flexDirection:"column", width:"60%", justifyContent:"center"}}>			
                <h1 style={{backgroundColor:"black", color:"white", fontSize:"xxx-large", margin:"0px"}}>About Me !!</h1>
                <h5 style={{backgroundColor:"black", color:"white", fontSize:"x-large", marginTop:"17px",marginBottom:"10px"}}>Developer, <span> Designer </span> & Problem <span> Solver</span></h5>
                <h3 style={{backgroundColor:"black", color:"#fcfc", fontSize:"large", width:"90%", textAlign:"justify",marginBottom:"30px" }}>I am a front-end web developer. I can provide clean code and pixel perfect design. I am currently a student at Kalvium and studying in Lovely Professional University. I have almost completed my Front-End Web-Development course. I have good knowledge of HTML5, CSS & JavaScript. I am even good at C++ when it comes to programming. When it comes to design I have a fair but good Knowledge of Figma.</h3>
                <button className='login' style={{padding:"10px 30px",width:"25vh"}} type="button">Know More</button>
            </div>
	    </section>

        {/* Experience Section */}

        <section id="skills" style={{display:"flex",flexDirection:"column",height:"87vh"}}>
            <div>
                <h2 style={{textAlign:"center", fontSize:"xxx-large",color:"white",margin:"5%"}}>My Experience !!</h2>
            </div>

            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-evenly",marginLeft:"5%",marginRight:"5%"}}>

                <div style={{backgroundColor:"black",width:"30%",padding: "4px 5px",borderRadius:"40px",height:"48vh"}}>
                    <h5 style={{backgroundColor:"black",color:"white",margin:"30px 0px 15px 0px",fontSize:"xx-large", textAlign:"center"}}>Professional Skills</h5>
                    <div class="pra" style={{backgroundColor:"black",color:"white",display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <p style={{backgroundColor:"black",color:"#fcfc", fontSize:"large", fontWeight:"bold",textAlign:"center",marginLeft:"10%",marginRight:"10%",height:"18vh"}}>It's not only about what we wear and present, it's all about the way you follow your office culture and your behaviour at certain surcumstances in a work place.</p>
                        <h3 style={{padding:"10px 20px", fontSize:"medium",marginRight:"0px"}} className="login">Read More</h3>
                    </div>
                </div>

                <div style={{backgroundColor:"black",width:"30%",padding: "4px 5px",borderRadius:"40px",height:"48vh"}}>
                    <h5 style={{backgroundColor:"black",color:"white",fontSize:"xx-large", textAlign:"center",margin:"30px 0px 15px 0px"}}>Web Development</h5>
                    <div class="pra" style={{backgroundColor:"black",color:"white",display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <p style={{backgroundColor:"black",color:"#fcfc", fontSize:"large", fontWeight:"bold",textAlign:"center",marginLeft:"10%",marginRight:"10%",height:"18vh"}}>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
                        <h3 style={{padding:"10px 20px", fontSize:"medium",marginRight:"0px"}} className="login">Read More</h3>
                    </div>
                </div>

                <div style={{backgroundColor:"black",width:"30%",padding: "4px 5px",borderRadius:"40px",height:"48vh"}}>
                    <h5 style={{backgroundColor:"black",color:"white",margin:"30px 0px 15px 0px",fontSize:"xx-large", textAlign:"center"}}>Problem Solving</h5>
                    <div class="pra" style={{backgroundColor:"black",color:"white",display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <p style={{backgroundColor:"black",color:"#fcfc", fontSize:"large", fontWeight:"bold",textAlign:"center",marginLeft:"10%",marginRight:"10%",height:"18vh"}}>Every problem should be solved with two primary goals: Firstly, it needs to be assigned with names anyother user can also understand. Secondly, it needs to be as short as possible.</p>
                        <h3 style={{padding:"10px 20px", fontSize:"medium", marginRight:"0px"}} className="login">Read More</h3>
                    </div>
                </div>

            </div>

        </section>

    </div>
  )
}

export default About