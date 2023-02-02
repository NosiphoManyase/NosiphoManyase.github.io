import React from 'react'
import styles from './about.module.scss'

const About = () => {
  return (
    <div className='about' id='about_section'>
        <div className={`${styles.about_me}`}>
          <h4 className='fs_big'>About Me</h4>
          <p>I am currently working as an Apprentice Software Engineer
            at Bash. I have a BCom degree in Information Systems and Economics. My commerce degree had no formal courses on 
            software development so I invested in a software engineering course and haven't looked back since.
          </p>
          <p>I'm a life-long learner so I am 
            excited to always have some way to grow my skills.
            This career, like any other can be stressfull, but the icing on the cake is that 
            the things we build make people's lives easier.
          </p>
        </div>
        
    </div>
  )
}

export default About