import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const FooterContainer = styled.div`
    padding: 2rem;
    background: #000000;
    color: #ffffff;
`;

export const FooterWrapper = styled.div`
    padding: 1rem;
`;

export const FooterLinksBox = styled.div`
    width: 60%;
    margin: 0 auto;

    @media screen and (max-width: 48em){
        width: 100%;
        padding: 1rem;
    }
`;

export const FooterLinks = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: space-between;

    @media screen and (max-width: 48em){
        flex-wrap: wrap;
    }
`;

export const FooterItems = styled.ul`
    padding: 1rem;
    margin: 0 1rem;
    list-style: none;
    font-size: 1.4rem;

    @media screen and (max-width: 48em){
        
    }
`;

export const FooterLinksTitle = styled.h4`
    padding: 1rem .5rem;
    color: #ffbb00;
`;

export const FooterLink = styled(Link)`
    padding: .5rem;
    cursor: pointer;
    text-decoration: none;
    display: block;
    color: #ffffff;

    &:hover{
        background: #ffbb00;
        color: #000000;
        transform: rotate(-7deg) scale(1.1);
        text-align: center;
        transition: all .1s ease-in-out;
    }
`;

export const SocialMedia = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #111;

    @media screen and (max-width: 48em){
        flex-direction: column;
    }
`;

export const SocialLogo = styled.h2`
    padding: 1rem;
    display: inline-block;

    &:hover{
        background: #ffbb00;
        color: #000000;
        transform: rotate(-7deg);
        transition: all .2s ease-in-out;
        cursor: pointer;
    }
`;

export const WebsiteRights = styled.div`
    padding: 1rem;
    font-size: 1.3rem;
`;

export const SocialMediaIcons = styled.div`
    padding: 1rem;
`;

export const SocialIconLink = styled.a`
    color: #ffbb00;
    font-size: 2.2rem;
    transition: all .2s ease-in-out;
    margin: 0 1rem;

`;

export const NoteDev = styled.p`
    padding: 1rem;
    font-size: 1.3rem;
`;

export const Dev = styled.a`
    color: #ffbb00;
    text-decoration: none;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover{
        text-decoration: underline;
    }
`;