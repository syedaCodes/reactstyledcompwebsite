import React from 'react';
import {FooterItems, FooterLinksTitle, FooterLink } from './FooterElements';

const LinksBox = ({ title, link1, link2, link3, link4, link5 }) => {
    return (
        <FooterItems>
            <FooterLinksTitle>{title}</FooterLinksTitle>
            <FooterLink to="/signin">{link1}</FooterLink>
            <FooterLink to="/signin">{link2}</FooterLink>
            <FooterLink to="/signin">{link3}</FooterLink>
            <FooterLink to="/signin">{link4}</FooterLink>
            {link5? <FooterLink to="/signin">{link5}</FooterLink> : ''}
        </FooterItems>
    )
}

export default LinksBox;
