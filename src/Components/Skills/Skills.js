import React from 'react'
import { Gem } from 'react-bootstrap-icons'
import styles from './skills.module.scss'

const Skills = () => {
  return (
    <div id='skills_section'>
          <div className='section'>
            <h4 className='fs_big header_mb'>Skills</h4>
            <div className={styles.skills_list}>
              <div>
                <img src='https://hossidin.sirv.com/portfolio-skills/skills/html_logo.png'
                alt='html logo' />
                <p className={`fs_small ${styles.skill_name}`}>HTML5</p>
              </div>
              <div>
                <img src='https://hossidin.sirv.com/portfolio-skills/skills/css_logo.png'
                alt='css logo' />
                <p className={`fs_small ${styles.skill_name}`}>CSS3</p>
              </div>
              <div>
                <img src='https://hossidin.sirv.com/portfolio-skills/skills/sass_logo.png'
                alt='sass logo' />
                <p className={`fs_small ${styles.skill_name}`}>SASS</p>
              </div>
              <div>
                <img src='https://hossidin.sirv.com/portfolio-skills/skills/js_logo.png'
                alt='javascript logo' />
                <p className={`fs_small ${styles.skill_name}`}>JAVASCRIPT</p>
              </div>
              <div>
                <img src='https://hossidin.sirv.com/portfolio-skills/skills/boots_logo.png'
                alt='bootstrap logo' />
                <p className={`fs_small ${styles.skill_name}`}>BOOTSTRAP</p>
              </div>
              <div>
                <img src='https://hossidin.sirv.com/portfolio-skills/skills/react_logo.png'
                alt='react logo' />
                <p className={`fs_small ${styles.skill_name}`}>REACT</p>
              </div>
              <div>
                <img src='https://hossidin.sirv.com/portfolio-skills/skills/git_logo.png'
                alt='git logo' />
                <p className={`fs_small ${styles.skill_name}`}>GIT</p>
              </div>
              <div>
                <img src='https://hossidin.sirv.com/portfolio-skills/skills/figma_logo.png'
                alt='figma logo' />
                <p className={`fs_small ${styles.skill_name}`}>FIGMA</p>
              </div>
              <div>
                <img src='https://hossidin.sirv.com/portfolio-skills/skills/react-q_logo.png'
                alt='react query logo' />
                <p className={`fs_small ${styles.skill_name}`}>REACT QUERY</p>
              </div>
            </div>
          </div>
          <div className='divider'>
            <span></span><Gem className='px-2'/><span></span>
          </div>
        </div>
  )
}

export default Skills