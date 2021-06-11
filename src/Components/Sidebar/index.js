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
                        <SidebarItem to="about">About</SidebarItem>
                        <SidebarItem to="discover">Discover</SidebarItem>
                        <SidebarItem to="services">Services</SidebarItem>
                        <SidebarItem to="signin">Sign In</SidebarItem>
                    </SidebarLinks>
                    <SidebarBtn>
                        <SidebarBtnLink to="/signup">Sign Up</SidebarBtnLink>
                    </SidebarBtn>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar;
