import React from 'react'
import {EnvelopeAtFill} from 'react-bootstrap-icons'
import {Github} from 'react-bootstrap-icons'
import {Linkedin} from 'react-bootstrap-icons'
import geometricBG from '../../assets/geometric_bg.png'
import styles from './hero.module.scss'

const Hero = () => {
  return (
    <div>
        <div className='hero '>
            <div>
                <div className={styles.logo}>
                    logo
                </div>
                <nav className='navbar'>
                    <a className={styles.nav_item}>About me</a>
                    <a className={styles.nav_item}>Skills</a>
                    <a className={styles.nav_item}>Portfolio</a>
                    <a className={styles.nav_item}>Contact me</a>
                </nav>
            </div>
            
            <div className={`d-flex justify-content-between ${styles.intro}` }>
                <div className='d-flex flex-column justify-content-center'>
                    <p className={styles.font_small}>Hi, I am</p>
                    <span className={styles.name}>Nosipho Manyase</span>
                    <p className={styles.job_title}>Front-end Developer</p>
                    <div className={styles.links}>
                        <a className={styles.link}><EnvelopeAtFill className={styles.icon}/></a>
                        <a className={styles.link}><Github className={styles.icon}/></a>
                        <a className={styles.link}><Linkedin className={`rounded-circle ${styles.icon}`}/></a>
                    </div>
                </div>
                <div>
                    <img src={geometricBG} alt='' className={styles.bg_image}/>
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default Hero