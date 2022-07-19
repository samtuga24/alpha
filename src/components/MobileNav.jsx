import React, { useState } from 'react'
import close_button from '../icons/close-button.svg'
import android from '../icons/google-play-mobile.svg'
import apple from '../icons/apple-mobile.svg'
import { ButtonWrap, CloseButton, CLoseButtonWrap, Container, DownloadButtons, MobileNavigationList, MobileNavList, MobileNavWrapper, NavigationList, NavList, Wrapper } from './MobileNavStyle'

export const MobileNav = () => {
    const [clicked, setClicked] = useState(false);

    
  return (
    
    <Container className='add-slider'>
                       <MobileNavWrapper>
                       <CloseButton>
                           <CLoseButtonWrap className='button-wrap'>
                               <img src={close_button} alt="" />
                           </CLoseButtonWrap>
                       </CloseButton>
                       <MobileNavigationList>
                           <NavigationList>
                           <p className='mobile-home'>Home</p>
                           <hr></hr>
                           <p className='mobile-features' id='mobile-features'>Features</p>
                           <p className='mobile-features' id='mobile-subscribe'>Subscribe</p>
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
