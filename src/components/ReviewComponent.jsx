import React from 'react'
import phone_one from '../icons/app-screen-1.svg'
import phone_two from '../icons/app-screen-2.svg'
import phone_three from '../icons/app-screen-3.svg'
import mobile_phone from '../icons/mobile-phone-two.svg'
import { Container, Div, MobileWrapper, PhoneOne, PhoneThree, PhoneTwo, PhoneTwoWrap, Review, Wrapper } from './ReviewComponentStyle'

export const ReviewComponent = () => {
  return (
    <Container>
        <Wrapper className='review-container'>
            <PhoneOne className='phones phone-two'>
                <img src={phone_one} alt="" />
            </PhoneOne>
            <PhoneTwo className='phones phone-two'><img src={phone_two} alt=""/></PhoneTwo>
            <PhoneThree className='phones phone-two'><img src={phone_three} alt="" />
            </PhoneThree>
        </Wrapper>

        <MobileWrapper>
            <PhoneTwoWrap className='mobile-wrap'>
                <img src={mobile_phone} alt="" />
            </PhoneTwoWrap>
        </MobileWrapper>
        <Review></Review>
        <Div></Div>
    </Container>
  )
}
