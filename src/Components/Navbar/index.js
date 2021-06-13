import React from 'react';
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
    return (
        <>
            <NavbarContainer>
                <NavLogo to="/">
                    <h1 title="logo">Finch</h1>
                </NavLogo>
                <NavLinks>
                    <NavItem to="about">About</NavItem>
                    <NavItem to="discover">Discover</NavItem>
                    <NavItem to="services">Services</NavItem>
                    <NavItem to="signup">Sign Up</NavItem>
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
