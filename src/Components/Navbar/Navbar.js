import React from 'react'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <div>
       <nav className={`navbar ${styles.navbar}`}>
            <a className={`opacity_white ${styles.nav_item}`} href='#skills_section'>Skills</a>
            <a className={`opacity_white ${styles.nav_item}`} href='#projects_section'>Projects</a>
            <a className={`opacity_white ${styles.nav_item}`} href='#about_section'>About me</a>
            <a className={`opacity_white ${styles.nav_item}`} href='#contact_section'>Contact me</a>
        </nav>
    </div>
  )
}

export default Navbar