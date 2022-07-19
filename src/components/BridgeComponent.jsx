import React from 'react'
import { Black, BlackArrow, BridgeContainer, BridgeDesc, BridgeDiv, BridgeHeader, BridgeIconsDiv, BridgeWrapper, Choose, ChooseAlpha, FifthArrow, First, FirstArrow, FourteenthArrow, Fourth, FourthArrow, Green, GreenArrow, MobileBridge, MobileBridgeDesc, MobileBridgeWrap, Orange, OrangeArrow, Red, RedArrow, Second, SecondArrow, SeventhArrow, SixthArrow, TenthArrow, Third, ThirdArrow, Thirteen, ThirteenthArrow } from './BridgeComponentStyle'
import { AlphaFeature } from './ExclusiveComponentStyle'
import choose from '../icons/choose-alpha.svg'
import one from '../icons/1.svg'
import arrow_one from '../icons/arrow-1.svg'
import two from '../icons/2.svg'
import arrow_two from '../icons/arrow-2.svg'
import three from '../icons/3.svg'
import arrow_three from '../icons/arrow-3.svg'
import four from '../icons/4.svg'
import arrow_four from '../icons/arrow-4.svg'
import arrow_five from '../icons/arrow-5.svg'
import arrow_six from '../icons/arrow-6.svg'
import black from '../icons/black.svg'
import black_arrow from '../icons/arrow-7.svg'
import arrow_seven from '../icons/arrow-8.svg'
import green from '../icons/green.svg'
import arrow_nine from '../icons/arrow-9.svg'
import arrow_ten from '../icons/arrow-10.svg'
import red from '../icons/red.svg'
import red_arrow from '../icons/arrow-11.svg'
import orange from '../icons/orange.svg'
import orange_arrow from '../icons/arrow-12.svg'
import green_arrow from '../icons/arrow-13.svg'
import arrow_15 from '../icons/arrow-15.svg'
import mobile_bridge from '../icons/mobile-bridge.svg'
export const BridgeComponent = () => {
  return (
    <BridgeContainer>
        <BridgeWrapper>
            <AlphaFeature><p>ALPHA — FEATURES</p></AlphaFeature>
            <Choose><p>Why Choose Us?</p></Choose>

            <BridgeDiv>
               <BridgeHeader><p>We are a Bridge</p></BridgeHeader>
               <BridgeDesc><p>Alpha connects thousands of businesses to thousands of <br/>customers to do business, easily.</p></BridgeDesc>
               <MobileBridgeDesc><p>Alpha connects thousands of businesses to <br/>thousands of customers to do <br/>business, easily.</p></MobileBridgeDesc>
            </BridgeDiv>

            <BridgeIconsDiv>
                <ChooseAlpha className='manage-business'><img src={choose} alt="" /></ChooseAlpha>
                <First className='manage-business'><img src={one} alt="" /></First>
               <FirstArrow className='manage-business' id='bridge-arrow-1'><img src={arrow_one} alt="" /></FirstArrow>
               <Second className='manage-business'><img src={two} alt="" /></Second>
               <SecondArrow className='manage-business' id='bridge-arrow-2'><img src={arrow_two} alt="" /></SecondArrow>
               <Third className='manage-business'><img src={three} alt="" /></Third>
               <ThirdArrow className='manage-business' id='bridge-arrow-3'><img src={arrow_three} alt="" /></ThirdArrow>
               <Fourth className='manage-business'><img src={four} alt="" /></Fourth>
               <FourthArrow className='manage-business' id='bridge-arrow-4'><img src={arrow_four} alt="" /></FourthArrow>
               <FifthArrow className='manage-business' id='bridge-arrow-5'><img src={arrow_five} alt="" /></FifthArrow>
               <SixthArrow className='manage-business' id='bridge-arrow-6'><img src={arrow_six} alt="" /></SixthArrow>
               <Black className='manage-business'><img src={black} alt="" /></Black>
               <BlackArrow className='manage-business' id='bridge-arrow-7'><img src={black_arrow} alt="" /></BlackArrow>
               <SeventhArrow className='manage-business' id='bridge-arrow-8'><img src={arrow_seven} alt="" /></SeventhArrow>
               <Green className='manage-business'><img src={green} alt="" /></Green>
               <GreenArrow className='manage-business' id='bridge-arrow-9'><img src={arrow_nine} alt="" /></GreenArrow>
               <TenthArrow className='manage-business' id='bridge-arrow-10'><img src={arrow_ten} alt="" /></TenthArrow>
               <Red className='manage-business'><img src={red} alt="" /></Red>
               <RedArrow className='manage-business' id='bridge-arrow-11'><img src={red_arrow} alt="" /></RedArrow>
               <Orange className='manage-business'><img src={orange} alt="" /></Orange>
               <OrangeArrow className='manage-business' id='bridge-arrow-12'><img src={orange_arrow} alt="" /></OrangeArrow>
               <Thirteen className='manage-business'><img src={green} alt="" /></Thirteen>
               <ThirteenthArrow className='manage-business' id='bridge-arrow-13'><img src={green_arrow} alt="" /></ThirteenthArrow>
               <Thirteen className='manage-business'><img src={green} alt="" /></Thirteen>
               <FourteenthArrow className='manage-business' id='bridge-arrow-14'><img src={arrow_15} alt="" /></FourteenthArrow>
            </BridgeIconsDiv>

            <MobileBridge>
                <MobileBridgeWrap className='manage-business'><img src={mobile_bridge} alt="" /></MobileBridgeWrap>
                
            </MobileBridge>


        </BridgeWrapper>
    </BridgeContainer>
  )
}
