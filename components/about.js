import React from 'react'
import { Gem } from 'react-bootstrap-icons'

const About = () => {
  return (
    <div className='about' id='about_section'>
        <div className={`about_me section`}>
          <h4 className='fs_big'>About Me</h4>
          <div className='content'>
            <p>I am currently working as an Apprentice Software Engineer
              at <strong>Bash</strong>. I hold a BCom degree in Information Systems and Economics. My commerce degree had no formal courses on 
              software development so I paused my journey towards a degree, invested in a software engineering course,
              returned to complete my degree the following year and haven't looked back since.
            </p>
            <p>I'm a <strong>life-long learner</strong> so I am excited to always have some way to <strong>improve</strong> my skills.
              This career, like any other can be stressfull, but the icing on the cake is that 
              the things we build make people's lives easier.
            </p>
            <p> Passion may be overrated in careers, but I think it is important to pursue a
              career that you can <strong>find joy</strong> in as well make you <strong>excited to grow and learn</strong> new things, that's what software development is for me.
            </p>
          </div>
        </div>
        <div className='divider'>
          <span></span><Gem className='px-2'/><span></span>
        </div>
    </div>
  )
}

export default About