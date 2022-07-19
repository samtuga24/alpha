import React from 'react'
import android from '../icons/android.svg'
import apple from '../icons/apple.svg'
import shopping from '../icons/Ladyhopping.svg'
import orange from '../icons/orange.svg'
import green from '../icons/green.svg'
import red from '../icons/red.svg'
import black from '../icons/black.svg'
import orange_arrow from '../icons/orangeArrow.svg'
import green_arrow from '../icons/greenArrow.svg'
import red_arrow from '../icons/redArrow.svg'
import black_arrow from '../icons/blackArrow.svg'
import mobile_home from '../icons/mobile-home-image.svg'
import { Android, Apple, Black, BlackArrow, Container, Green, GreenArrow, Icons, IntroDesc, IntroDIv, IntroDownloadButton, IntroHeader, IntroImageDiv, IntroImageIcons, MobileAndroid, MobileApple, MobileImageIcons, MobileIntroDesc, MobileIntroDownloadButton, MobileIntroHeader, MobileView, Orange, OrangeArrow, Red, RedArrow, ShoppingLady, Wrapper } from './IntroductionStyle'

export const IntroComponent = () => {
  return (
    <Container id='home'>
        <Wrapper>
            <IntroDIv>
                <IntroHeader>
                    <p>Connecting African <br/>businesses to both local and <br/>international consumers.</p>
                </IntroHeader>
                <IntroDesc>
                    <p>Alpha brings businesses & consumers together <br/>to keep everyone happy. </p>
                </IntroDesc>
                <IntroDownloadButton>
                    <Android className='app-store'>
                        <img src={android} alt="" />
                    </Android>
                    <Apple className='app-store'>
                    <img src={apple} alt="" />
                    </Apple>
                </IntroDownloadButton>
            </IntroDIv>

            <IntroImageDiv>
                <IntroImageIcons>
                    <Icons>
                        <Orange><img src={orange} alt="" className='home-icon' id='orange'/></Orange>
                        <OrangeArrow className='orange-arrow'><img src={orange_arrow} alt=""/></OrangeArrow>
                        <Green><img src={green} alt="" className='home-icon' id='green'/></Green>
                        <GreenArrow className='green-arrow'><img src={green_arrow} alt="" /></GreenArrow>
                        <Red><img src={red} alt="" className='home-icon' id='red'/></Red>
                        <RedArrow className='red-arrow'><img src={red_arrow} alt="" /></RedArrow>
                        <Black><img src={black} alt="" className='home-icon' id='black'/></Black>
                        <BlackArrow className='black-arrow'><img src={black_arrow} alt="" /></BlackArrow>

                    </Icons>
                    <ShoppingLady className='shopping-lady'>
                        <img src={shopping} alt="" />
                    </ShoppingLady>
                </IntroImageIcons>
            </IntroImageDiv>            
        </Wrapper>

        <MobileView>
            <MobileIntroHeader>
                <p>Connecting African <br/>businesses to both local  <br/>and international <br/>consumers</p>
            </MobileIntroHeader>
            <MobileIntroDesc>
                    <p>Alpha brings businesses & consumers together <br/>to keep everyone happy. </p>
                </MobileIntroDesc>

                <MobileIntroDownloadButton>
                    <MobileAndroid className='app-store'>
                        <img src={android} alt="" />
                    </MobileAndroid>
                    <MobileApple className='app-store'>
                    <img src={apple} alt="" />
                    </MobileApple>
                </MobileIntroDownloadButton>

                <MobileImageIcons className='mobile-home-image'>
                    <img src={mobile_home} alt="" />
                </MobileImageIcons>
        </MobileView>

    </Container>
  )
}
