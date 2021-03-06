import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavbarContainer = styled.nav`
    position: sticky;
    top: 0;
    // background: ${({ scrollNav }) => (scrollNav? '#ffbb0080' : '#ffffff')};
    background: #ffffff;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: -5px -1px 10px rgb(0, 0, 0, .19);

    @media screen and (max-width: 60em){
        transition: all 0.2s ease-in-out;
    }
`;

export const NavLogo = styled(LinkR)`
    color: #000;
    margin: 0 1rem;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
`;

export const NavLinks = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 1rem;
    cursor: pointer;

    @media screen and (max-width: 48em){
        display: none;
    }
`;

export const NavItem = styled(LinkS)`
    padding: 0 1rem;
    height: 100%;
    text-decoration: none;
    color: #000;
    margin: 0 .5rem;
    
    &:hover{
        background: #ffbb00;
        transform: rotate(-7deg) scale(1.1);
        transition: all .1s ease-in-out;
    }

    &.active{
        border-bottom: 1px solid #ffbb00;
    }
`;

export const NavBtn = styled.button`
    outline: none;
    padding: .8rem;
    margin: 0 1rem;
    border-radius: .2rem;
    background: rgba(255, 187, 0, .9);
    font-size: 1.5rem;
    border: 1px solid #ffbb00;
    cursor: pointer;
    transition: all .1s ease-in-out;

    &:active{
        transform: translateY(3px);
    }

    @media screen and (max-width: 48em){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    text-decoration: none;
    color: inherit;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 48em){
        display: block;
        color: #000;
        font-size: 2.5rem;
        margin: 0 1rem;
        cursor: pointer;
    }
`;