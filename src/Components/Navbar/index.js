import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { 
    NavbarContainer, 
    NavLogo, 
    NavLinks, 
    NavItem, 
    NavBtn, 
    NavBtnLink, 
    MobileIcon 
    } from './NavElements';
import { FaBars } from 'react-icons/fa';

const Navbar = ({ toggle }) => {

    // const [ scrollNav, setScrollNav ] = useState(false);

    // const changeNav = () => window.scrollY >= 80? setScrollNav(true):setScrollNav(false);

    // useEffect(() => { window.addEventListener('scroll', changeNav)}, []); scrollNav={scrollNav} { useState, useEffect }

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    <h1 title="logo">Finch</h1>
                </NavLogo>
                <NavLinks>
                    <NavItem to="about"
                    smooth={true}
                    duration={true}
                    spy={true} 
                    exact='true'
                    activeClass="active">About</NavItem>
                    <NavItem to="discover"
                    smooth={true}
                    duration={true}
                    spy={true} 
                    exact='true'
                    activeClass="active">Discover</NavItem>
                    <NavItem to="services"
                    smooth={true}
                    duration={true}
                    spy={true} 
                    exact='true'
                    activeClass="active">Services</NavItem>
                    <NavItem to="signup"
                    smooth={true}
                    duration={true}
                    spy={true} 
                    exact='true'
                    activeClass="active">Sign Up</NavItem>
                </NavLinks>
                <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
            </NavbarContainer>
        </>
    )
}

export default Navbar;
