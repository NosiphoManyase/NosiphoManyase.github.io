import React from 'react'
import techRadar from '../../assets/projects/tech_radar.png'
import movieWatchlist from '../../assets/projects/movie_watchlist.png'
import passwordGenerator from '../../assets/projects/password_generator.png'
import pacMan from '../../assets/projects/pac_man.png'
import {Github} from 'react-bootstrap-icons'
import styles from './projects.module.scss'

const Projects = () => {
  return (
    <div className='projects custom-container'>
      <h4>Projects</h4>
       <div className={styles.project}>
          <div className={styles.project_info}>
            <p className={styles.project_name}>TECH RADAR</p>
            <p className={styles.project_description}>A graphical respresentation
            that tracks all the technologies that an individual or organisation ; have 
             adopted, are currently in trial, are currently being assessed or phased out(hold).
             This project is written in vanilla js and it uses a google sheet as its CMS, 
             making it easy for non-technical individuals to edit and update.
            </p>
            <a className={styles.project_link}>check it out</a>
            <a><Github /></a>
          </div>
          <div className={styles.img_container}>
            <img src={techRadar} alt=''/>
          </div>
       </div>
       <div className={styles.project}>
          <div className={styles.project_info}>
            <p className={styles.project_name}>MOVIE WATCHLIST</p>
            <p className={styles.project_description}>
              This project displays movies currently showing in all movie theartres.
              The movies are categorised into genres, have a description page and can be
              bookmarked for users to revisit at a later stage. This project is written in 
              react, the data comes from an API endpoint and is fetched using react query.
            </p>
            <a className={styles.project_link}>check it out</a>
            <a><Github /></a>
          </div>
          <div className={styles.img_container}>
            <img src={movieWatchlist} alt=''/>
          </div>
       </div>
       <div className={styles.project}>
          <div className={styles.project_info}>
            <p className={styles.project_name}>PASSWORD GENERATOR</p>
            <p className={styles.project_description}>An application
            that generates a 14 letter password with 4 numbers, 7 letters
            and 3 special characters in a randomised order. This projectis 
            written in pure vanilla javascript.</p>
            <a className={styles.project_link}>check it out</a>
            <a><Github /></a>
          </div>
          <div className={styles.img_container}>
            <img src={passwordGenerator} alt=''/>
          </div>
       </div>
       <div className={styles.project}>
          <div className={styles.project_info}>
            <p className={styles.project_name}>SIMPLE PYGAME</p>
            <p className={styles.project_description}>
              A symple game with a player object and an enemy object.
              The enemy object moves from in a horizontal line from
              off the screen towards the player object at the start of the 
              screen in a fast pace. The players objective is to duck as
              many of the enemy objects as possible. The players score
              gets displayed once he/she loses. This project is written
              with the pygame library in python. 
            </p>
            <a className={styles.project_link}>check it out</a>
            <a><Github /></a>
          </div>
          <div className={styles.img_container}>
            <img src={pacMan} alt=''/>
          </div>
       </div>
    </div>
  )
}

export default Projects


