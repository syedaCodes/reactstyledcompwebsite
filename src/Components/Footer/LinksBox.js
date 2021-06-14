import React from 'react';
import {FooterItems, FooterLinksTitle, FooterLink } from './FooterElements';

const LinksBox = ({ title, link1, link2, link3, link4, link5 }) => {
    return (
        <FooterItems>
            <FooterLinksTitle>{title}</FooterLinksTitle>
            <FooterLink to={`/${link1.toLowerCase().trim()}`}>{link1}</FooterLink>
            <FooterLink to={`/${link2.toLowerCase().trim()}`}>{link2}</FooterLink>
            <FooterLink to={`/${link3.toLowerCase().trim()}`}>{link3}</FooterLink>
            <FooterLink to={`/${link4.toLowerCase().trim()}`}>{link4}</FooterLink>
            {link5? <FooterLink to={`/${link5.toLowerCase().trim()}`}>{link5}</FooterLink> : ''}
        </FooterItems>
    )
}

export default LinksBox;
