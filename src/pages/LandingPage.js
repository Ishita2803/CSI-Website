import React, { useState, useEffect } from 'react'
import About from '../components/LandingPageFolder/About'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/LandingPageFolder/About/Data'
import Contact from '../components/LandingPageFolder/Contact'
import Faq from '../components/LandingPageFolder/Faq'
import Footer from '../components/LandingPageFolder/Footer'
import Hero from '../components/LandingPageFolder/Hero'
import Navbar from '../components/LandingPageFolder/Navbar'
import Schedule from '../components/LandingPageFolder/Schedule'
import Sidebar from '../components/LandingPageFolder/Sidebar'
import Sponsors from '../components/LandingPageFolder/Sponsors'
import RingLoader from "react-spinners/RingLoader";

const LandingPage = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const color = "#01bf71"
  
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }, [])

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            {
                loading ? 
                    <div style={{ height: '100vh', width: '100%', textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#000'}} className="loader">
                    <RingLoader color={color} loading={loading} size={100} />
                    
                    </div>
                :
                    <>
                    <Sidebar isOpen={isOpen} toggle={toggle} />
                    <Navbar toggle={toggle} />
                    <Hero id='home'/>
                    <About {...homeObjOne} />
                    <Faq {...homeObjTwo}/>
                    <Schedule {...homeObjThree}/>
                    <Contact {...homeObjFour}/>
                    <Sponsors id='sponsors'/>
                    <Footer/>
                    </>
            }
        </>
    )
}

export default LandingPage
