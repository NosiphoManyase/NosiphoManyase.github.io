import React from 'react'
import { Facebook } from 'react-bootstrap-icons'
import { Linkedin } from 'react-bootstrap-icons'
import { Instagram } from 'react-bootstrap-icons'
import { ChevronDoubleUp } from 'react-bootstrap-icons'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='custom-container mx-auto'>
            <div className={`${styles.to_top} mx-auto`}>
                <ChevronDoubleUp  />
                <p>BACK TO TOP</p>
            </div>
            
            <div className={`${styles.social_icons} mx-auto`}>
                <Facebook />
                <Linkedin />
                <Instagram />
            </div>
            <div>
             <span className='fw-bold'>@2020 Nosipho Manyase</span> All Rights Reserved.
            </div>
        </div>
    </div>
  )
}

export default Footer