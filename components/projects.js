import React from 'react'
// import techRadar from '/assets/project_pics/tech_radar.png'
// import movieWatchlist from '/assets/project_pics/movie_watchlist.png'
// import passwordGenerator from '/assets/project_pics/password_generator.png'
import { Gem } from 'react-bootstrap-icons'
import HoverVideo from './hoverVideo'
import styles from '../styles/projects.module.scss'

const Projects = () => {
  return (
    <div className='d-flex flex-column' id='projects_section'>
      <div className='section'>
        <h4 className='fs_big header_mb'>Projects</h4>
        <div className='project_card'>   
            <p className={`fs_medium ${styles.project_name}`}>Tech Radar</p>
            <div className='project'>
              <div className={styles.project_info}>
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
                <HoverVideo video={'/assets/project_vids/project1.mp4'} source={'/assets/project_pics/tech_radar.png'}/>
              </div>
            </div>
        </div>
        <div className='project_card'>
            
              <p className='fs_medium'>Movies Screening</p>
              <div className='project'>
              <div className={styles.project_info}>
              <p className={`opacity_white ${styles.description}`}>
                This project displays movies currently showing in all movie theartres.
                The movies are categorised into genres, have a description page and can be
                bookmarked for users to revisit at a later stage. This project is written in 
                react, the data comes from an API endpoint and is fetched using react query.
              </p>
              <div>
                <a href='#' className={`${styles.cta_btns} ${styles.live_demo_link}`}>LIVE DEMO</a>
                <a href='#' className={`${styles.cta_btns} ${styles.github_project_link}`}>GITHUB</a>
              </div>
              
              </div>
              <div className={styles.img_container}>
                <HoverVideo video={'/assets/project_vids/project2.mp4'} source={'/assets/project_pics/movie_watchlist.png'}/>
              </div>
            </div>
        </div>
        <div className='project_card'>
          <p className='fs_medium'>Password Generator</p>
            <div className='project'>
            <div className={styles.project_info}>
              
              <p className={`opacity_white ${styles.description}`}>An application
              that generates a 14 letter password with 4 numbers, 7 letters
              and 3 special characters in a randomised order. This projectis 
              written in pure vanilla javascript.</p>
              <div>
                <a href='#' className={`${styles.cta_btns} ${styles.live_demo_link}`}>LIVE DEMO</a>
                <a href='#' className={`${styles.cta_btns} ${styles.github_project_link}`}>GITHUB</a>
              </div>
              
            </div>
            <div className={styles.img_container}>
              <HoverVideo video={'/assets/project_vids/project3.mp4'} source={'/assets/project_pics/password_generator.png'}/>
            </div>
            </div>
        </div>
        <a href='https://github.com/NosiphoManyase?tab=repositories' target='_blank' className={`fs-medium ${styles.github_link}`}>View all projects <img src='/assets/TiltedArrow.svg' /></a>
       </div>
       <div className='divider'>
            <span></span><Gem className='px-2'/><span></span>
        </div>
    </div>
  )
}

export default Projects


