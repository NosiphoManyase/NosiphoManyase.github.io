import React from 'react'
import styles from './about.module.scss'

const About = () => {
  return (
    <div className='about custom-container'>
        <div className={`section-spacing ${styles.about_me}`}>
          <h4 className=''>ABOUT ME</h4>
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
        <div className={`section-spacing ${styles.skills}`}>
          <h4 className=''>SKILLS</h4>
          <div className={styles.skills_list}>
            <div>
              <div className={`${styles.html_logo} ${styles.logo}`}></div>
              <p className={styles.skill_name}>HTML5</p>
            </div>
            <div>
              <div className={`${styles.css_logo} ${styles.logo}`}></div>
              <p className={styles.skill_name}>CSS3</p>
            </div>
            <div>
              <div className={`${styles.sass_logo} ${styles.logo}`}></div>
              <p className={styles.skill_name}>SASS</p>
            </div>
            <div>
              <div className={`${styles.js_logo} ${styles.logo}`}></div>
              <p className={styles.skill_name}>JAVASCRIPT</p>
            </div>
            <div>
              <div className={`${styles.react_logo} ${styles.logo}`}></div>
              <p className={styles.skill_name}>REACT</p>
            </div>
            <div>
              <div className={`${styles.bs_logo} ${styles.logo}`}></div>
              <p className={styles.skill_name}>BOOTSTRAP</p>
            </div>
            <div>
              <div className={`${styles.git_logo} ${styles.logo}`}></div>
              <p className={styles.skill_name}>GIT</p>
            </div>
            <div>
              <div className={`${styles.figma_logo} ${styles.logo}`}></div>
              <p className={styles.skill_name}>FIGMA</p>
            </div>
            <div>
              <div className={`${styles.reactq_logo} ${styles.logo}`}></div>
              <p className={styles.skill_name}>REACT QUERY</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About