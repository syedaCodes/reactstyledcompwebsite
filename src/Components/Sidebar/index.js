import React from 'react';
import { 
    SidebarContainer, 
    Icon,
    CloseIcon, 
    SidebarWrapper, 
    SidebarLinks, 
    SidebarItem, 
    SidebarBtn, 
    SidebarBtnLink 
} from './SidebarElements';


const Sidebar = ({isOpen, toggle}) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarLinks>
                        <SidebarItem to="about"
                        smooth={true}
                        spy={true} 
                        exact='true' onClick={toggle}>About</SidebarItem>
                        <SidebarItem to="discover"
                        smooth={true}
                        spy={true} 
                        exact='true' onClick={toggle}>Discover</SidebarItem>
                        <SidebarItem to="services"
                        smooth={true}
                        spy={true} 
                        exact='true' onClick={toggle}>Services</SidebarItem>
                        <SidebarItem to="signup"
                        smooth={true}
                        spy={true} 
                        exact='true' onClick={toggle}>Sign Up</SidebarItem>
                    </SidebarLinks>
                    <SidebarBtn>
                        <SidebarBtnLink to="/signin">Sign In</SidebarBtnLink>
                    </SidebarBtn>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;
