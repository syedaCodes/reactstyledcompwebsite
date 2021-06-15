import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/InfoSection/Data';
import Services from '../Components/Services';
import Footer from '../Components/Footer';
import Sidebar from '../Components/Sidebar';

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
