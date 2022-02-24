import React from 'react'
// eslint-disable-next-line
import { Paper } from '@material-ui/core'
import Social from './social'
import DownloadButton from './downloadButton'
import {profile_pic_url, resume_url, email_address, achievements, experience, indep_projects } from "../assets/config/text"

const AboutMeCard = () => {
  const emailTo = `mailto:${email_address}`
  return (
    <div class="aboutMeWrapper">
      <div class="aboutMePictureSection">
        <div class="aboutMePictureWrapper">
          <img alt="Moayed Profile Pic" src={profile_pic_url} class="aboutMePicture"/>
        </div>
        <div class="aboutMeImage"/>
        
        <div class= "additionalSection">
          <DownloadButton href={resume_url} class="button" blog="false"> 
          <b>Download CV</b> 
          </DownloadButton>
          {/* <a href={cvFile} target="_blank" rel="noopener noreferrer" class="button">Open CV</a> */}
        </div>
      </div>
      <div class="aboutMeInfoSection">
        <div class="aboutMeInfo">
          <div class="aboutMeInfoName">
            <h2 style={{margin: '0', padding: '0'}}>Moayed Haji Ali</h2>
            <a href={emailTo} class="aboutMeInfoNameSub">{email_address}</a>
          </div>
          <div class="aboutMeInfoDescription">
            <p class="title"> Education</p>
            <hr/>
            <p style={{"text-align":"left", "float":'left'}}>Koc University</p>
            <p style={{"text-align":"right",}}>Istanbul, Turkey</p>
            <i style={{"text-align":"right", "clear":'both'}}>Bachelor in Computer Engineering</i>
            <ul>
              <li><b>CGPA: 3.97</b> out of <b>4.0</b> (Full merit-based scholarship from Al-Ghurair Foundation for Education).</li>
              <li> <b>Relevant Coursework:</b> Advances in Deep Learning, Deep Unsupervised Learning, Deep Learning and Computer
Vision, Introduction to Machine Learning, Natural Language Processing, Algorithms and Complexity, Data
Structure & Algorithms, and Software Engineering Analysis and Design.</li>
              <li> <b>Work Experience:</b> Undergraduate TA in advanced programming in JAVA, and peer-to-peer programming tutor.</li>
            </ul>
            
            <p class="title"> Achievements</p>
            <hr/>
            <ul>
              {
                achievements.map(achievements => 
                  <>
                    <p style={{"text-align":"left", "float":'left'}}>{achievements.title}</p>
                    <p style={{"text-align":"right",}}>{achievements.year}</p>
                  </>
                )
              }
            </ul>
            
            <p class="title"> Professional experience</p>
            <hr/>
            <ul>
              {
                experience.map(experience => 
                  <>
                    <div style={{"clear":"both"}}>
                    <p class="section_title" style={{"text-align":"left", "float":"left"}}>{experience.title}</p>
                    <p style={{"text-align":"right", "float":"none"}}>{experience.location}</p>
                    </div>

                    <div style={{"clear":"both"}}>
                    <i style={{"text-align":"left", "float":"left"}}>{experience.subtitle}</i>
                    <p style={{"text-align":"right", "float":"none"}}>{experience.date}</p>
                    </div>
                    <ul style={{"clear":"both" ,"margin-bottom":"0.2rem"}}>
                      {experience.description.map(desc =>
                        <li> {desc} </li>
                      )
                      }
                    </ul>
                  </>
                )
              }
            </ul>
            

            <p class="title"> INDEPENDENT PROJECTS & SKILLS</p>
            <hr/>
            <ul>
              {
                indep_projects.map(project => 
                  <>
                    <div style={{"clear":"both"}}>
                    <p class="section_title" style={{"text-align":"left", "float":"left"}}>{project.title} &nbsp;</p>
                    
                    <p style={{"text-align":"left", "float":"none"}}>{project.subtitle}</p>
                    </div>
                    <ul style={{"clear":"both" ,"margin-bottom":"0.2rem"}}>
                      {project.description.map(desc =>
                        <li> {desc} </li>
                      )
                      }
                    </ul>
                  </>
                )
              }
            </ul>
            

            <div
              sx={{
                display: `flex`,
                justifyContent: `center`,
                mt: `2rem`,
              }}
            >
              <div  style={{"margin-left":"45%", "margin-top":"2rem", }}>
                 <Social/>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeCard
