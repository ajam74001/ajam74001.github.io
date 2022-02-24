import React from "React"
import Page from "./page"
import TimeLine from "./timeline"
import AboutMeCard from "./aboutMeCard"


const About = (props) => (
    <Page class="about aboutMeCardStyles " page_name="about" article={props.article}  articleTimeout={props.articleTimeout} onCloseArticle={props.onCloseArticle}>
    <div class="about">
    <h2 className="major">About</h2>

    <h3 style={{"text-align":"left"}}> Hello there! I am Moayed Haji Ali, </h3> 
    <p style={{"justify-content": "cneter", "text-align":"justify"}}>
        a senior undergraduate student at Koc University,
         and an undergraduate researcher at <a href="https://ai.ku.edu.tr/">KUIS AI lab.</a> I am a proficient programmer with +6 years of programming experience and one year of industrial experience in machine learning. I aim to be a successful researcher and currently interested in computer vision,  generative models and autonomous driving.
    </p>

    <p style={{"text-align":"justify"}}>
    I thrive in competitive environments that push me outside of limits to get the best out of me. Please reach out if you have any research internship opportunities. You are also welcomed to reach out if you have any question or just want a simple chat.
    </p>
    </div>

    <AboutMeCard/>

    <TimeLine/>
    </Page>
    
)


export default About