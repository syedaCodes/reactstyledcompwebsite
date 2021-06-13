import React from 'react';
import HeroSection from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../Components/InfoSection/Data';
import Services from '../Components/Services';
import Footer from '../Components/Footer';

const Home = () => {


    return (
        <>
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
