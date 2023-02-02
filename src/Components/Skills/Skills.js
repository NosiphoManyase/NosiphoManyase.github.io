import React from 'react'
import styles from './skills.module.scss'

const Skills = () => {
  return (
    <div id='skills_section'>
          <h4 className={`fs_medium ${styles.skill_header}`}>SKILLS</h4>
          <div className={styles.skills_list}>
            <div>
              <img src='https://hossidin.sirv.com/portfolio-skills/skills/html_logo.png'
              alt='html logo' />
              <p className='fs_small'>HTML5</p>
            </div>
            <div>
              <img src='https://hossidin.sirv.com/portfolio-skills/skills/css_logo.png'
              alt='css logo' />
              <p className='fs_small'>CSS3</p>
            </div>
            <div>
              <img src='https://hossidin.sirv.com/portfolio-skills/skills/sass_logo.png'
              alt='sass logo' />
              <p className='fs_small'>SASS</p>
            </div>
            <div>
              <img src='https://hossidin.sirv.com/portfolio-skills/skills/js_logo.png'
              alt='javascript logo' />
              <p className='fs_small'>JAVASCRIPT</p>
            </div>
            <div>
              <img src='https://hossidin.sirv.com/portfolio-skills/skills/react_logo.png'
              alt='react logo' />
              <p className='fs_small'>REACT</p>
            </div>
            <div>
              <img src='https://hossidin.sirv.com/portfolio-skills/skills/boots_logo.png'
              alt='bootstrap logo' />
              <p className='fs_small'>BOOTSTRAP</p>
            </div>
            <div>
              <img src='https://hossidin.sirv.com/portfolio-skills/skills/git_logo.png'
              alt='git logo' />
              <p className='fs_small'>GIT</p>
            </div>
            <div>
              <img src='https://hossidin.sirv.com/portfolio-skills/skills/figma_logo.png'
              alt='figma logo' />
              <p className='fs_small'>FIGMA</p>
            </div>
            <div>
              <img src='https://hossidin.sirv.com/portfolio-skills/skills/react-q_logo.png'
              alt='react query logo' />
              <p className='fs_small'>REACT QUERY</p>
            </div>
          </div>
        </div>
  )
}

export default Skills