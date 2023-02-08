import React from 'react'
import { ChevronDoubleUp } from 'react-bootstrap-icons'
import {ReactComponent as TiltedArrow} from '../../assets/TiltedArrow.svg'
import styles from './contact.module.scss'

const Contact = () => {


  return (
    <div className={`d-flex flex-column ${styles.contact}`} id='contact_section'>
          <h4 className='fs_big'>Contact</h4>
          <div className={`d-flex ${styles.links}`}>
                    <a href="mailto:manyasenosipho@gmail.com" target='_blank' className={styles.link}>Email<TiltedArrow/></a>
                    <a href='https://www.linkedin.com/in/nosipho-manyase-a0513a149/' target='_blank' className={styles.link}>LinkedIn<TiltedArrow/></a>
                    <a href='https://github.com/NosiphoManyase' target='_blank' className={styles.link}>Github<TiltedArrow/></a>
          </div>
          <div className={`${styles.to_top} mx-auto`}>
                <ChevronDoubleUp  />
                <a href='#nav_section' className='text-decoration-none'>BACK TO TOP</a>
            </div>
    </div>
  )
}

export default Contact