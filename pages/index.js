import Head from 'next/head'
import Hero from '@/components/hero'
import NavbarSet from '@/components/Navbar'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Contact from '@/components/Contact'



export default function Home() {
  return (
    <>
      <Head>
      <title>Nosipho Manyase</title>
      <link rel="icon" href="logo.png" />
      <meta http-equiv="Permissions-Policy" content="interest-cohort=()"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="title" property="og:title"  content="Nosipho's Portfolio Site" />
      <meta name="type" property="og:type"  content="website" />
      <meta name="image" property="og:image"  content="https://nosiphomanyase.github.io/portfolio/avatar.png" />
      <meta name="url" property="og:url"  content="https://nosiphomanyase.github.io/portfolio/" />
      <meta name="description" property="og:description"  
        content="An apprentice software engineer enjoys what they do, prioritisez rapid growth through
        self-drive as well as maintaining a good work-life balance." 
      />
      
      </Head>
      <main className='main'>
          <div className='wrapper'>
            <NavbarSet />
            <div className='content'>
                <Hero/>
                <Skills />
                <Projects />
                <About />
                <Contact />
            </div>
          </div>
          
          
      </main>
    </>
  )
}
