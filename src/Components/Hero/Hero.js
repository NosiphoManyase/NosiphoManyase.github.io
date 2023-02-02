import React from 'react'
import {ReactComponent as TiltedArrow} from '../../assets/TiltedArrow.svg'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div>
        <div className='hero'>
            <div className={`d-flex flex-column justify-content-between ${styles.intro}` }>
                <div className={`d-flex flex-column ${styles.base_info}`}>
                  <img src='' className={styles.avatar} alt="avatar of female"/>
                  <p className='fs_medium opacity_white'>Hi. I am</p>
                  <span className='fs_big'>Nosipho Manyase</span>
                  <p className='fs_medium opacity_white'>Front-end Developer</p>
                </div>
                <p className='opacity_white'>I am a person that prioritises living a relatively happy life, so I've made it a point to find a career path that I enjoy, even when it's extremely difficult. 
                The fact that there is always something new to learn, is music to the ears of a lifelong learner.</p>
                <div className={styles.links}>
                    <a href='' className={styles.link}>Email<TiltedArrow/></a>
                    <a href='' className={styles.link}>LinkedIn<TiltedArrow/></a>
                    <a href='' className={styles.link}>Github<TiltedArrow/></a>
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default Hero