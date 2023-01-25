import React from 'react'
import {EnvelopeAtFill} from 'react-bootstrap-icons'
import {Github} from 'react-bootstrap-icons'
import {Linkedin} from 'react-bootstrap-icons'
import styles from './hero.module.scss'
import headshot from '../../assets/main-pic.png'

const Hero = () => {
  return (
    <div>
        <div className='hero '>
            <div className={`${styles.container} d-flex justify-content-between px-5 pt-4`}>
                <div className='d-flex flex-column justify-content-center px-5'>
                    <div className={styles.logo}>
                        logo
                    </div>
                    <div className={styles.intro}>
                        <p className={styles.font_small}>Hi, I am <br/>
                            <span className={styles.name}>Nosipho Manyase</span>
                            </p>
                        <p className={styles.job_title}>Front-end Developer</p>
                        <div className={styles.links}>
                            <a className={styles.link}><EnvelopeAtFill className={styles.icon}/></a>
                            <a className={styles.link}><Github className={styles.icon}/></a>
                            <a className={styles.link}><Linkedin className={`rounded-circle ${styles.icon}`}/></a>
                        </div>
                    </div>
                </div>
                <div>
                    <nav className='navbar'>
                        <div>About me</div>
                        <div>Skills</div>
                        <div>Portfolio</div>
                        <a className={styles.contact_btn}>CONTACT ME</a>
                    </nav>
                    <img src={headshot} alt='' className={styles.headshot}/>
                </div>
                <div className='black_bg'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero