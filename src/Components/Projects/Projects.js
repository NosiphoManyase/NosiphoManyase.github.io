import React from 'react'
import techRadar from '../../assets/projects/tech_radar.png'
import movieWatchlist from '../../assets/projects/movie_watchlist.png'
import passwordGenerator from '../../assets/projects/password_generator.png'
import {ReactComponent as TiltedArrow} from '../../assets/TiltedArrow.svg'
import styles from './projects.module.scss'

const Projects = () => {
  return (
    <div className='projects' id='projects_section'>
      <h4 className='fs_big'>Projects</h4>
       <div className={styles.project}>
          <div className={styles.project_info}>
            <p className='fs_medium'>Tech Radar</p>
            <p className='opacity_white'>A graphical respresentation
            that tracks all the technologies that an individual or organisation ; have 
             adopted, are currently in trial, are currently being assessed or phased out(hold).
             This project is written in vanilla js and it uses a google sheet as its CMS, 
             making it easy for non-technical individuals to edit and update.
            </p>
            <div>
              <button className={`${styles.cta_btns} ${styles.live_demo_link}`}>LIVE DEMO</button>
              <button className={`${styles.cta_btns} ${styles.github_project_link}`}>GITHUB</button>
            </div>
            <a className={styles.site_link} href=''>explore site <TiltedArrow /></a>
          </div>
          <div className={styles.img_container}>
            <img src={techRadar} alt=''/>
          </div>
       </div>
       <div className={styles.project}>
          <div className={styles.project_info}>
            <p className='fs_medium'>Movies Screening</p>
            <p className='opacity_white'>
              This project displays movies currently showing in all movie theartres.
              The movies are categorised into genres, have a description page and can be
              bookmarked for users to revisit at a later stage. This project is written in 
              react, the data comes from an API endpoint and is fetched using react query.
            </p>
            <div>
              <button className={`${styles.cta_btns} ${styles.live_demo_link}`}>LIVE DEMO</button>
              <button className={`${styles.cta_btns} ${styles.github_project_link}`}>GITHUB</button>
            </div>
            <a className={styles.site_link} href=''>explore site <TiltedArrow /></a>
            
          </div>
          <div className={styles.img_container}>
            <img src={movieWatchlist} alt=''/>
          </div>
       </div>
       <div className={styles.project}>
          <div className={styles.project_info}>
            <p className='fs_medium'>Password Generator</p>
            <p className='opacity_white'>An application
            that generates a 14 letter password with 4 numbers, 7 letters
            and 3 special characters in a randomised order. This projectis 
            written in pure vanilla javascript.</p>
            <div>
              <button className={`${styles.cta_btns} ${styles.live_demo_link}`}>LIVE DEMO</button>
              <button className={`${styles.cta_btns} ${styles.github_project_link}`}>GITHUB</button>
            </div>
            <a className={styles.site_link} href=''>explore site <TiltedArrow /></a>
            
          </div>
          <div className={styles.img_container}>
            <img src={passwordGenerator} alt=''/>
          </div>
       </div>
       <a className={`fs-medium ${styles.github_link}`}>View all projects <TiltedArrow /></a>
       
    </div>
  )
}

export default Projects


