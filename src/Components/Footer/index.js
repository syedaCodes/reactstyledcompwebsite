import React from 'react';
import {
    FooterContainer, 
    FooterWrapper,
    FooterLinksBox,
    FooterLinks
} from './FooterElements';
import LinksBox from './LinksBox';
import { dataLinksOne, dataLinksTwo, dataLinksThree, dataLinksFour } from './DataFooter';

const Footer = () => { 
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinksBox>
                        <FooterLinks>
                            <LinksBox {...dataLinksOne}/>
                            <LinksBox {...dataLinksTwo}/>
                            <LinksBox {...dataLinksThree}/>
                            <LinksBox {...dataLinksFour}/>
                        </FooterLinks>
                    </FooterLinksBox>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer;
