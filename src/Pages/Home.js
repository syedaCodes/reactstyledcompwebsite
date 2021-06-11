import React, { useState } from 'react';
import Sidebar from '../Components/Sidebar/index';
import Navbar from '../Components/Navbar/index';

const Home = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </>
    );
};

export default Home;
