import React, {useState} from 'react'
// import Sidebar from './../components/Sidebar/index'
// import Navbar from './../components/Navbar/index'
import HeroSection from './../components/HeroSection'
import InfoSection from './../components/InfoSection/index'
import InfoSection_2 from './../components/InfoSection/index-2'
import InfoSection_3 from './../components/InfoSection/index-3'
import InfoSection_4 from './../components/InfoSection/index-4'
import InfoSection_5 from './../components/InfoSection/index-5'
import InfoSection_6 from './../components/InfoSection/index-6'
import { 
    homeObjOne, 
    homeObjThree, 
    homeObjTwo,
    homeObjFour, 
    homeObjFive, 
    homeObjSix 
} from './../components/InfoSection/Data'
import Services from '../components/Services'

const Home = () => {
    return (
        <>
            
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection_2 {...homeObjTwo} />
            <InfoSection_3 {...homeObjThree} />
            <Services /> 
            <InfoSection_4 {...homeObjFour} />
            <InfoSection_5 {...homeObjFive} />
            <InfoSection_6 {...homeObjSix} />
        </>
    )
}

export default Home
