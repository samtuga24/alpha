import React, { useRef, useState } from 'react'
import logo from '../logo/alpha-logo.svg'
import mobile_logo from '../logo/mobile-logo.svg'
import hamburger from '../icons/hamburger.svg'
import { BurgerWrap, Container, Hamburger, ListWrap, Logo, LogoWrap, MobileLogo, MobileWrapper, NavList, Wrapper } from './NavigationStyle'
import { Feature } from './Feature'
import { Link } from 'react-scroll'
import close_button from '../icons/close-button.svg'
import android from '../icons/google-play-mobile.svg'
import apple from '../icons/apple-mobile.svg'
import $ from 'jquery'
import { ButtonWrap, CloseButton, CLoseButtonWrap, DownloadButtons, MobileNavigationList, MobileNavWrapper, NavigationList } from './MobileNavStyle'


export const Navigation = () => {
        const [clicked, setClicked] = useState(false);  
        const [fclicked, fSetClicked] = useState(false);  
        const [sclicked, sSetClicked] = useState(false);  

        const handleClick = () =>{
            setClicked(!clicked);
            fSetClicked(false);
            sSetClicked(false);
        }

        const handleFClick = () =>{
            setClicked(false);
            fSetClicked(!fclicked);
            sSetClicked(false);
        }

        const handleSClick = () =>{
            setClicked(false);
            fSetClicked(false);
            sSetClicked(!sclicked);
        }

                
  return (
    <Container>
        <Wrapper>

            <Logo className='logo'>
                <LogoWrap>
                    <img src={logo} alt="" />
                </LogoWrap>
            </Logo>
            <NavList>
                <ListWrap>
                    <ul>
                        <li> 
                            <Link to='feature' spy={true} smooth={true} offset={100} duration={800}>Features</Link>
                        </li>                      
                        <li>
                            <Link to='faqs' spy={true} smooth={true} offset={100} duration={800}>FAQs</Link>
                        </li>
                        <li>
                            <Link to='subscribe' spy={true} smooth={true} offset={-100} duration={1000}>Subscribe</Link>
                            
                        </li>
                    </ul>
                </ListWrap>
            </NavList>
        </Wrapper>

        <MobileWrapper>
            <MobileLogo className='mobile-logo'>
                <LogoWrap>
                    <img src={mobile_logo} alt="" />
                </LogoWrap>
            </MobileLogo>
            <Hamburger className="hamburger" onClick={()=>$('.mobile-nav').slideDown()}>
                <BurgerWrap className='hamburger-wrap'>
                    <img src={hamburger} alt=""/>
                </BurgerWrap>              
            </Hamburger>

        </MobileWrapper>
        
        <MobileNavWrapper className='mobile-nav'>
                       <CloseButton>
                           <CLoseButtonWrap className='button-wrap' onClick={()=>$('.mobile-nav').slideUp()}>
                               <img src={close_button} alt="" />
                           </CLoseButtonWrap>
                       </CloseButton>
                       <MobileNavigationList>
                           <NavigationList>
                           <p className={clicked ? 'mobile-home-border':'mobile-home'}>
    
                            <Link to='home' spy={true} smooth={true} offset={-100} duration={1000} onClick={handleClick}>Home</Link>
                            </p>
                            {clicked &&(
                                <hr></hr>
                            )}
                            
                           
                           <p className={fclicked ? 'mobile-home-border' : 'mobile-features'}>
                           <Link to='faqs' spy={true} smooth={true} offset={100} duration={800} onClick={handleFClick}>FAQs</Link>
                           </p>

                           {fclicked &&(
                                <hr></hr>
                            )}

                           <p className={sclicked ? 'mobile-home-border':'mobile-subscribe'}>
                           <Link to='subscribe' spy={true} smooth={true} offset={-100} duration={1000} onClick={handleSClick}>Subscribe</Link>
                           </p>

                           {sclicked &&(
                                <hr></hr>
                            )}
                           </NavigationList>
                       </MobileNavigationList>
                       <DownloadButtons>
                           <ButtonWrap className='button-wrap-mobile'>
                               <img src={android} alt="" />
                           </ButtonWrap>
                           <ButtonWrap className='button-wrap-mobile'>
                           <img src={apple} alt="" />
                           </ButtonWrap>
           
                       </DownloadButtons>
                   </MobileNavWrapper>            

    </Container>
  )
}
