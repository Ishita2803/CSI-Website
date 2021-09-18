import React from 'react'
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'

const Footer = () => {

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <a href="/">
                        <SocialLogo src={require('./download-removebg-preview.png').default}></SocialLogo>
                        </a>
                        <WebsiteRights>Innovations &copy; 2022 &nbsp;&nbsp;
                        Technical Team - CSI Chapter, SIES Graduate School Of Technology, Nerul.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/csisies/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.instagram.com/csisies/?igshid=162s27sf08dxe" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/company/csi-siesgst/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/CSI-SIESGST" target="_blank" aria-label="Github">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
