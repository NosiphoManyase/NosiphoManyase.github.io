import React from 'react'
import { ChevronDoubleUp } from 'react-bootstrap-icons'

const Contact = () => {


  return (
    <div className={`d-flex flex-column contact`} id='contact_section'>
          <h4 className='fs_big'>Contact</h4>
          <div className={`d-flex links`}>
                    <a href="mailto:manyasenosipho@gmail.com" target='_blank' className='link'>Email <img src='/assets/TiltedArrow.svg' /></a>
                    <a href='https://www.linkedin.com/in/nosipho-manyase-a0513a149/' target='_blank' className='link'>LinkedIn <img src='/assets/TiltedArrow.svg' /></a>
                    <a href='https://github.com/NosiphoManyase' target='_blank' className='link'>Github <img src='/assets/TiltedArrow.svg' /></a>
          </div>
          <div className={`to_top mx-auto`}>
                <ChevronDoubleUp  />
                <a href='#nav_section' className='text-decoration-none'>BACK TO TOP</a>
            </div>
    </div>
  )
}

export default Contact