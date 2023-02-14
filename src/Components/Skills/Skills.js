import React from 'react'
import { Gem } from 'react-bootstrap-icons'
import htmlLogo from '../../assets/skills_logos/html.png'
import cssLogo from '../../assets/skills_logos/css.png'
import jsLogo from '../../assets/skills_logos/js.png'
import bsLogo from '../../assets/skills_logos/bootstrap.png'
import reactLogo from '../../assets/skills_logos/react.png'
import gitLogo from '../../assets/skills_logos/git.png'
import sassLogo from '../../assets/skills_logos/sass.png'
import figmaLogo from '../../assets/skills_logos/figma.png'
import reactQueryLogo from '../../assets/skills_logos/react-qry_logo.png'
import styles from './skills.module.scss'

const Skills = () => {
  return (
    <div id='skills_section'>
          <div className='section'>
            <h4 className='fs_big header_mb'>Skills</h4>
            <div className='skills_list'>
              <div>
                <img src={htmlLogo}
                alt='html logo'
                className={styles.image} />
                <p className={`fs_small ${styles.skill_name}`}>HTML5</p>
              </div>
              <div>
                <img src={cssLogo}
                alt='css logo'
                className={styles.image} />
                <p className={`fs_small ${styles.skill_name}`}>CSS3</p>
              </div>
              <div>
                <img src={sassLogo}
                alt='sass logo' 
                className={styles.image}/>
                <p className={`fs_small ${styles.skill_name}`}>SASS</p>
              </div>
              <div>
                <img src={jsLogo}
                alt='javascript logo' 
                className={styles.image}/>
                <p className={`fs_small ${styles.skill_name}`}>JAVASCRIPT</p>
              </div>
              <div>
                <img src={bsLogo}
                alt='bootstrap logo' 
                className={styles.image}/>
                <p className={`fs_small ${styles.skill_name}`}>BOOTSTRAP</p>
              </div>
              <div>
                <img src={reactLogo}
                alt='react logo' 
                className={styles.image}/>
                <p className={`fs_small ${styles.skill_name}`}>REACT</p>
              </div>
              <div>
                <img src={gitLogo}
                alt='git logo' 
                className={styles.image} />
                <p className={`fs_small ${styles.skill_name}`}>GIT</p>
              </div>
              <div>
                <img src={figmaLogo}
                alt='figma logo' 
                className={styles.image}/>
                <p className={`fs_small ${styles.skill_name}`}>FIGMA</p>
              </div>
              <div>
                <img src={reactQueryLogo}
                alt='react query logo' 
                className={styles.image}/>
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