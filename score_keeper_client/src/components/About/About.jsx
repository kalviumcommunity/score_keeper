import React from 'react'
import photo from '../Pictures/My_photo.jpeg'
import { AiOutlineGoogle } from 'react-icons/ai';
import { FaHtml5 } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';
import './about.css'

function About() {
  return (
    <div>

        {/* Intro Section */}

        <section className="intro">

            <div id="intro">
                <div style={{margin:"auto"}}>
                    <h4 className='about-heading'>Hello, my name is</h4>
                    <h1 className='about-name' >Chandan <span >Gowda</span></h1>
                    <h3 className='sub-heading'>I'am an Aspiring Full Stack Developer.</h3>
                    <div>
                        <p className='about-para'>I can help you create a beautiful, responsive and eyecatching website. To know more about the prising and other details please feel free to text in any of my socials or just send me an email stating "Details" on the Below link.</p>
                    </div>
                    <form className="news-latter" style={{marginBottom:"2%",width:"80%"}}>
                        <input className="about-input" type="email" id="mail" placeholder="Enter Your Email"/>
                        <button className="about-login" ><a id="btn-text" href="mailto:chandan1012004@gmail.com"> Let's Start</a></button>
                    </form>
                </div>
            </div>

	    </section>

        {/* About Section */}

        <section className="about">
            <div className='about-photo'>
                <img src={photo} className='about-pic' alt="" />
            </div>
            <div className="about-text" >			
                <h1 className='about-me'>About Me !!</h1>
                <h5 className='about-myself'>Developer, <span> Designer </span> & Problem <span> Solver</span></h5>
                <h3 className='about-my'>I am a front-end web developer. I can provide clean code and pixel perfect design. I am currently a student at Kalvium and studying in Lovely Professional University. I have almost completed my Front-End Web-Development course. I have good knowledge of HTML5, CSS & JavaScript. I am even good at C++ when it comes to programming. When it comes to design I have a fair but good Knowledge of Figma.</h3>
                <button className='login' style={{margin:"auto" ,padding:"10px 30px",width:"25vh"}} type="button">Know More</button>
            </div>
	    </section>

        {/* Experience Section */}

        <section id="skills">
            <div>
                <h2 className='my-exp' >My Experience !!</h2>
            </div>

            <div className='container' >

                <div className='content' >
                    <AiOutlineGoogle className='content-photo'/>
                    <h5 className='content-heading' >Professional Skills</h5>
                    <div className="pra" >
                        <p className='praa'>It's not only about what we wear and present, it's all about the way you follow your office culture and your behaviour at certain surcumstances in a work place.</p>
                        <h3 style={{padding:"10px 20px", fontSize:"medium"}} className="login">Read More</h3>
                    </div>
                </div>

                <div className='content' >
                    <FaHtml5  className='content-photo'/>
                    <h5 className='content-heading' >Web Development</h5>
                    <div className="pra">
                        <p className='praa'>Every website should be built with two primary goals: Firstly, it needs to work across all devices. Secondly, it needs to be fast as possible.</p>
                        <h3 style={{padding:"10px 20px", fontSize:"medium"}} className="login">Read More</h3>
                    </div>
                </div>

                <div className='content' >
                    <FaRegUser className='content-photo'/>
                    <h5 className='content-heading' >Problem Solving</h5>
                    <div className="pra">
                        <p className='praa'>Every problem should be solved with two primary goals: Firstly, it needs to be assigned with names anyother user can also understand. Secondly, it needs to be as short as possible.</p>
                        <h3 className="login" style={{padding:"10px 20px", fontSize:"medium"}}>Read More</h3>
                    </div>
                </div>

            </div>

        </section>

    </div>
  )
}

export default About