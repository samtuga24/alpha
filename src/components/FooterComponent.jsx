import React from 'react'
import logo from '../logo/mobile-logo.svg'
import insta from '../icons/instagram.svg'
import twitter from '../icons/twitter.svg'
import facebook from '../icons/facebook.svg'
import linked from '../icons/linkedin.svg'
import android from '../icons/android.svg'
import apple from '../icons/apple.svg'
import { Link } from 'react-scroll'
import { CopyRight, Desc, DownloadWrap, First, FooterContainer, FooterWrapper, List, LogoWrap, MobileView, NavigateHeader, NavigateList, Second, SocialIconWrap, SocialMedia, Third, ThirdWrap } from './FooterStyle'

export const FooterComponent = () => {
  return (
    <FooterContainer>
        <FooterWrapper>
            <First>
                <LogoWrap className='manage-business'><img src={logo} alt="" /></LogoWrap>
                <Desc><p>Alpha brings businesses & consumers together to <br/>keep everyone happy.</p></Desc>
                <SocialMedia>
                    <SocialIconWrap className='manage-business'><img src={insta} alt="" onClick={() => {window.open("https://instagram.com/alphadotafrica?igshid=YmMyMTA2M2Y=", "_blank"); }}/></SocialIconWrap>
                    <SocialIconWrap className='manage-business'><img src={twitter} alt="" onClick={() => {window.open("https://twitter.com/alphadotafrica", "_blank"); }}/></SocialIconWrap>
                    <SocialIconWrap className='manage-business'><img src={facebook} alt="" onClick={() => {window.open("https://web.facebook.com/alphadotafrica?_rdc=1&_rdr", "_blank"); }}/></SocialIconWrap>
                    <SocialIconWrap className='manage-business'><img src={linked} alt="" onClick={() => {window.open("https://www.linkedin.com/company/alphadotafrica/", "_blank"); }}/></SocialIconWrap>
                </SocialMedia>
            </First>
            <Second>               
                <NavigateList>
                    <NavigateHeader><p>Navigate</p></NavigateHeader>
                    <List> 
                        <p>
                            <Link to='feature' spy={true} smooth={true} offset={100} duration={800}>Features</Link>
                        </p></List>
                    <List>
                        <p>
                         <Link to='faqs' spy={true} smooth={true} offset={100} duration={800}>FAQs</Link>
                        
                        </p>
                    </List>
                    <List>
                        <p>
                        <Link to='subscribe' spy={true} smooth={true} offset={-100} duration={1000}>Subscribe</Link>
                        </p>
                    </List>                 
                </NavigateList>
            </Second>
            <Third>
                <ThirdWrap>
                    <NavigateHeader><p>Download</p></NavigateHeader>
                    <DownloadWrap className='manage-business'><img src={android} alt="" /></DownloadWrap>
                    <DownloadWrap className='manage-business'><img src={apple} alt="" /></DownloadWrap>
                </ThirdWrap>
                
            </Third>
        </FooterWrapper>
{/* #################################################################################################### */}
        <MobileView>
            <LogoWrap className='manage-business'><img src={logo} alt="" /></LogoWrap>
            <Desc><p>Alpha brings businesses & consumers together to <br/>keep everyone happy.</p></Desc>
            <SocialMedia>
                    <SocialIconWrap className='manage-business'><img src={insta} alt=""  onClick={() => {window.open("https://instagram.com/alphadotafrica?igshid=YmMyMTA2M2Y=", "_blank"); }}/></SocialIconWrap>
                    <SocialIconWrap className='manage-business'><img src={twitter} alt="" onClick={() => {window.open("https://twitter.com/alphadotafrica", "_blank"); }}/></SocialIconWrap>
                    <SocialIconWrap className='manage-business'><img src={facebook} alt="" onClick={() => {window.open("https://web.facebook.com/alphadotafrica?_rdc=1&_rdr", "_blank"); }}/></SocialIconWrap>
                    <SocialIconWrap className='manage-business'><img src={linked} alt="" onClick={() => {window.open("https://www.linkedin.com/company/alphadotafrica/", "_blank"); }}/></SocialIconWrap>
            </SocialMedia>

            <NavigateHeader><p>Navigate</p></NavigateHeader>

                <NavigateList>
                    <List> <p><Link to='feature' spy={true} smooth={true} offset={10} duration={800}>Features</Link></p></List>
                    <List><p><Link to='faqs' spy={true} smooth={true} offset={10} duration={800}>FAQs</Link></p></List>
                    <List><p><Link to='subscribe' spy={true} smooth={true} offset={-100} duration={1000}>Subscribe</Link></p></List>                 
                </NavigateList>

                <NavigateHeader><p>Download</p></NavigateHeader>
                    <DownloadWrap className='manage-business'><img src={android} alt="" /></DownloadWrap>
                    <DownloadWrap className='manage-business'><img src={apple} alt="" /></DownloadWrap>

        </MobileView>

        <CopyRight><p><span className='for-business'>Alpha</span> — Copyright @ 2022 — All rights reserved</p></CopyRight>
    </FooterContainer>
  )
}
