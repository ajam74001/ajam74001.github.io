import React from "React"
import Page from "./page"
import TimeLine from "./timeline"
import AboutMeCard from "./aboutMeCard"


const About = (props) => (
    <Page class="about aboutMeCardStyles " page_name="about" article={props.article}  articleTimeout={props.articleTimeout} onCloseArticle={props.onCloseArticle}>
    <div class="about">
    <h2 className="major">About</h2>

    <h3 style={{"font-size":"1.3rem"}}> Hi there! Welcome to my homepage! </h3> 
    <p style={{"justify-content": "cneter", "text-align":"justify",  'margin-bottom':'1rem'}}>
        I am Ainaz Jamshidi, A Phd stdent at UMBC, My research areas generally lie in Data Science, Machine Learning, Deep Learning, Reinforcement Learning , Computer Vision, Time series Forecasting. 
        My current research projects are predominantly centered on synthetic data generation through GANs and Diffusion models for health care applications. 
         
    </p>

    <p style={{"text-align":"justify", 'margin-bottom':'4rem'}}>
    Also, I am well experienced in Python, R programming, PyTorch, Tensor flow, etc.</p>
    </div>

    <AboutMeCard/>

    <TimeLine/>
    </Page>
    
)


export default About