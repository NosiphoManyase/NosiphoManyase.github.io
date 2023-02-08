import React from 'react'
import techRadar from '../../assets/projects/tech_radar.png'
import movieWatchlist from '../../assets/projects/movie_watchlist.png'
import passwordGenerator from '../../assets/projects/password_generator.png'
import {ReactComponent as TiltedArrow} from '../../assets/TiltedArrow.svg'
import styles from './projects.module.scss'
import { Gem } from 'react-bootstrap-icons'

const Projects = () => {
  return (
    <div className='d-flex flex-column' id='projects_section'>
      <div className='section'>
        <h4 className='fs_big header_mb'>Projects</h4>
        <div className={styles.project}>
            <div className={styles.project_info}>
              <p className='fs_medium'>Tech Radar</p>
              <p className={`opacity_white ${styles.description}`}>A graphical respresentation
              that tracks all the technologies that an individual or organisation ; have 
              adopted, are currently in trial, are currently being assessed or phased out(hold).
              This project is written in vanilla js and it uses a google sheet as its CMS, 
              making it easy for non-technical individuals to edit and update.
              </p>
              <div>
                <a href='#' className={`${styles.cta_btns} ${styles.live_demo_link}`}>LIVE DEMO</a>
                <a href='#' className={`${styles.cta_btns} ${styles.github_project_link}`}>GITHUB</a>
              </div>
            </div>
            <div className={styles.img_container}>
              <img src={techRadar} alt=''/>
            </div>
        </div>
        <div className={styles.project}>
            <div className={styles.project_info}>
              <p className='fs_medium'>Movies Screening</p>
              <p className={`opacity_white ${styles.description}`}>
                This project displays movies currently showing in all movie theartres.
                The movies are categorised into genres, have a description page and can be
                bookmarked for users to revisit at a later stage. This project is written in 
                react, the data comes from an API endpoint and is fetched using react query.
              </p>
              <div>
                <button className={`${styles.cta_btns} ${styles.live_demo_link}`}>LIVE DEMO</button>
                <button className={`${styles.cta_btns} ${styles.github_project_link}`}>GITHUB</button>
              </div>
              
            </div>
            <div className={styles.img_container}>
              <img src={movieWatchlist} alt=''/>
            </div>
        </div>
        <div className={styles.project}>
            <div className={styles.project_info}>
              <p className='fs_medium'>Password Generator</p>
              <p className={`opacity_white ${styles.description}`}>An application
              that generates a 14 letter password with 4 numbers, 7 letters
              and 3 special characters in a randomised order. This projectis 
              written in pure vanilla javascript.</p>
              <div>
                <button className={`${styles.cta_btns} ${styles.live_demo_link}`}>LIVE DEMO</button>
                <button className={`${styles.cta_btns} ${styles.github_project_link}`}>GITHUB</button>
              </div>
              
            </div>
            <div className={styles.img_container}>
              <img src={passwordGenerator} alt=''/>
            </div>
        </div>
        <a href='https://github.com/NosiphoManyase?tab=repositories' target='_blank' className={`fs-medium ${styles.github_link}`}>View all projects <TiltedArrow /></a>
       </div>
       <div className='divider'>
            <span></span><Gem className='px-2'/><span></span>
        </div>
    </div>
  )
}

export default Projects


