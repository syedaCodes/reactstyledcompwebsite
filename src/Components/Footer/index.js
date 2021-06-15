import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
    FooterContainer, 
    FooterWrapper,
    FooterLinksBox,
    FooterLinks,
    SocialLogo,
    SocialMedia,
    SocialMediaIcons,
    SocialIconLink,
    WebsiteRights,
    NoteDev,
    Dev
} from './FooterElements';
import { FaFacebook, FaInstagram, FaYoutube, FaCodepen, FaGithub, FaHeart } from 'react-icons/fa';
import LinksBox from './LinksBox';
import { dataLinksOne, dataLinksTwo, dataLinksThree, dataLinksFour } from './DataFooter';

const Footer = () => { 

    const toggleHome = () => {
        scroll.scrollToTop();
    }

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
                    <SocialMedia>
                        <SocialLogo to="/" onClick={toggleHome}>Finch</SocialLogo>
                            <WebsiteRights>Finch &copy; {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialMediaIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                    <FaYoutube />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Codepen">
                                    <FaCodepen />
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Github">
                                    <FaGithub />
                            </SocialIconLink>
                        </SocialMediaIcons>
                        <NoteDev>Developed with <FaHeart style={{ color: 'red'}}/> by <Dev>ncodes</Dev></NoteDev>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer;
