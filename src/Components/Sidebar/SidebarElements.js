import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const SidebarContainer = styled.aside`
    position: fixed;
    top: 0;
    background: #000;
    width: 100%;
    height: 100%;
    z-index: 999;
    color: #fff;
    display: flex;
    flex-direction: column;
    opacity: ${({ isOpen }) => isOpen? '100%' : '0'};
    top: ${({ isOpen }) => isOpen? '0': '-100%'};

    @media screen and (max-width: 60em){
        transition: all 0.2s ease-in-out;
    }
`;

export const Icon = styled.div`
    padding: 2rem;
    align-self: flex-end;
    height: 10%;
    cursor: pointer;
`;

export const CloseIcon = styled(FaTimes)`
    font-size: 2.5rem;
`;

export const SidebarWrapper = styled.div`
    width: 100%;
    height: 100%;
    background: #fff;
    padding: 2rem 0;
    text-align: center;
    color: #000;
`;

export const SidebarLinks = styled.ul`
    list-style: none;
    height: 50%;
    margin: 1rem auto;
`;

export const SidebarItem = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25%;
    width: 100%;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover{
        background: #000;
        color: #ffbb00;
    }
`;

export const SidebarBtn = styled.button`
    padding: 1rem 2rem;
    border: 1px solid #ffbb00;
    background: #ffbb00;
    cursor: pointer;
    margin: 1rem auto;
    border-radius: .5rem;
    font-size: 1.5rem;
    transform: translateY(0);
    transition: all 0.1s ease-in-out;

    &:active{
        transform: translateY(3px);
    }
`;

export const SidebarBtnLink = styled(LinkR)`
    text-decoration: none;
    color: #000;
`;