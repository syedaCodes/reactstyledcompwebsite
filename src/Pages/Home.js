import React, { useState } from 'react';
import Navbar from '../Components/Navbar/index.js';
import HeroSection from '../Components/HeroSection/index.js';
import InfoSection from '../Components/InfoSection/index.js';
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/InfoSection/Data';
import Services from '../Components/Services/index.js';
import Footer from '../Components/Footer/index.js';
import Sidebar from '../Components/Sidebar/index.js';

const Home = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    );
};

export default Home;
