import React from 'react'
import { ChevronDoubleUp } from 'react-bootstrap-icons'
import {ReactComponent as TiltedArrow} from '../../assets/TiltedArrow.svg'
import styles from './contact.module.scss'

const Contact = () => {


  return (
    <div className={`d-flex flex-column ${styles.contact}`} id='contact_section'>
          <h4 className='fs_big'>Contact</h4>
          <div className={`d-flex ${styles.links}`}>
                    <a href='' className={styles.link}>Email<TiltedArrow/></a>
                    <a href='' className={styles.link}>LinkedIn<TiltedArrow/></a>
                    <a href='' className={styles.link}>Github<TiltedArrow/></a>
          </div>
          <div className={`${styles.to_top} mx-auto`}>
                <ChevronDoubleUp  />
                <p>BACK TO TOP</p>
            </div>
    </div>
  )
}

export default Contact