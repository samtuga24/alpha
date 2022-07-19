import React from 'react'
import step_1 from '../icons/step-1.svg'
import step_2 from '../icons/step-2.svg'
import step_3 from '../icons/step-3.svg'
import step_4 from '../icons/step-4.svg'
import step_5 from '../icons/step-5.svg'
import phone_image from '../icons/selling-phone-icon.svg'
import { InfoList, ManageContainer, ManageDiv, ManageHeader, ManageImageDiv, ManageImageWrap, ManageInfo, ManageWrapper, Number, NumberWrap, Step } from './ManageComponentStyle'
import { SellingContainer, SellingDiv, SellingHeader, SellingList, SellingNumber, SellingNumberWrap, SellingWrap, StellingStep, SellingImageWrap, SellingImageDiv, ImageBackground } from './Selling'


export const SellingComponent = () => {
  return (
    <SellingContainer>
        <SellingWrap>
            <SellingDiv>
                <SellingHeader><p>Start Selling</p></SellingHeader>
                <ManageInfo>
                    <SellingList>
                        <SellingNumber>
                            <SellingNumberWrap className='manage-business'><img src={step_1} alt="" /></SellingNumberWrap>
                        </SellingNumber>
                        
                        <StellingStep><p>Signup to create an account</p></StellingStep>
                    </SellingList>


                    <SellingList>
                        <SellingNumber>
                            <SellingNumberWrap className='manage-business'><img src={step_2} alt="" /></SellingNumberWrap>
                        </SellingNumber>
                        
                        <StellingStep><p>Add your business</p></StellingStep>
                    </SellingList>


                    <SellingList>
                        <SellingNumber>
                            <SellingNumberWrap className='manage-business'><img src={step_3} alt="" /></SellingNumberWrap>
                        </SellingNumber>
                        
                        <StellingStep><p>Claim your business</p></StellingStep>
                    </SellingList>


                    <SellingList>
                        <SellingNumber>
                            <SellingNumberWrap className='manage-business'><img src={step_4} alt="" /></SellingNumberWrap>
                        </SellingNumber>
                        
                        <StellingStep><p>Add your Products or Services</p></StellingStep>
                    </SellingList>


                    <SellingList>
                        <SellingNumber>
                            <SellingNumberWrap className='manage-business'><img src={step_5} alt="" /></SellingNumberWrap>
                        </SellingNumber>
                        
                        <StellingStep><p>Make more sales </p></StellingStep>
                    </SellingList>

                </ManageInfo>
            </SellingDiv>
            <SellingImageDiv>
                <ImageBackground>
                    <SellingImageWrap className='manage-business'>
                        <img src={phone_image} alt=""/>
                    </SellingImageWrap>
                </ImageBackground>

            </SellingImageDiv>
        </SellingWrap>

    </SellingContainer>
  )
}
