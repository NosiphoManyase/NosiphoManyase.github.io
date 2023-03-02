import React from 'react'
import { EnvelopeAt, Gem, Github, Linkedin } from 'react-bootstrap-icons'
import Image from 'next/image'
import styles from '../styles/hero.module.scss'

const Hero = () => {
  return (
    <div>
        <div className='hero section'>
            <div className={`d-flex flex-column justify-content-between ${styles.intro}` }>
                <div className={`d-flex flex-column ${styles.base_info}`}>
                  <Image
                    src='/assets/profile1.png'
                    alt="avatar of female"
                    width={100}
                    height={100}
                  />
                  <p className='fs_medium opacity_white'>Hi. I am</p>
                  <span className='fs_big'>Nosipho Manyase</span>
                  <p className='opacity_white '>Front-end Developer</p>
                </div>
                <p className='opacity_white'>I prioritise living a relatively happy life, so I've made it a point to find a career path that I enjoy, even when it's extremely difficult. 
                The fact that there is always something new to learn, is music to the ears of a lifelong learner.</p>
                <div className={styles.links}>
                    <a href="mailto:manyasenosipho@gmail.com" target='_blank' className={styles.link}><EnvelopeAt /></a>
                    <a href='https://www.linkedin.com/in/nosipho-manyase-a0513a149/' target='_blank' className={styles.link}><Linkedin /></a>
                    <a href='https://github.com/NosiphoManyase' target='_blank' className={styles.link}><Github /></a>
                </div>
            </div> 
        </div>
        <div className='divider'>
            <span></span><Gem className='px-2'/><span></span>
          </div>
    </div>
  )
}

export default Hero