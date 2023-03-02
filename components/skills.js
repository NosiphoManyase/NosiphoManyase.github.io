import React from 'react'
import { Gem } from 'react-bootstrap-icons'
import Image from 'next/image'
// import styles from './skills.module.scss'

const Skills = () => {
  return (
    <div id='skills_section'>
          <div className='section'>
            <h4 className='fs_big header_mb'>Skills</h4>
            <div className='skills_list'>
              <div>
                <Image
                  src='/assets/skills_logos/html.png'
                  alt='html logo'
                  width={50}
                  height={50}
                  object-fit='scale-down'
                />
                <p className={`fs_small skill_name`}>HTML5</p>
              </div>
              <div>
                <Image
                  src='/assets/skills_logos/css.png'
                  alt='css logo'
                  width={50}
                  height={50}
                  object-fit='scale-down'
                />
                <p className={`fs_small skill_name`}>CSS3</p>
              </div>
              <div>
                <Image
                  src='/assets/skills_logos/sass.png'
                  alt='sass logo' 
                  width={50}
                  height={50}
                  object-fit='scale-down'
                />
                <p className={`fs_small skill_name`}>SASS</p>
              </div>
              <div>
                <Image
                  src='/assets/skills_logos/js.png'
                  alt='javascript logo' 
                  width={50}
                  height={50}
                  object-fit='scale-down'
                />
                <p className={`fs_small skill_name`}>JAVASCRIPT</p>
              </div>
              <div>
                <Image
                  src='/assets/skills_logos/bootstrap.png'
                  alt='bootstrap logo' 
                  width={50}
                  height={50}
                  object-fit='scale-down'
                />
                <p className={`fs_small skill_name`}>BOOTSTRAP</p>
              </div>
              <div>
                <Image
                  src='/assets/skills_logos/react.png'
                  alt='react logo' 
                  width={50}
                  height={50}
                  object-fit='scale-down'
                />
                <p className={`fs_small skill_name`}>REACT</p>
              </div>
              <div>
                <Image
                  src='/assets/skills_logos/git.png'
                  alt='git logo' 
                  width={50}
                  height={50}
                  object-fit='scale-down'
                />
                <p className={`fs_small skill_name`}>GIT</p>
              </div>
              <div>
                <Image
                  src='/assets/skills_logos/figma.png'
                  alt='figma logo'
                  width={50}
                  height={50}
                  object-fit='scale-down'
                />
                <p className={`fs_small skill_name`}>FIGMA</p>
              </div>
              <div>
                <Image
                  src='/assets/skills_logos/react-qry_logo.png'
                  alt="react query logo"
                  width={50}
                  height={50}
                  object-fit='scale-down'
                />
                <p className={`fs_small skill_name`}>REACT QUERY</p>
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