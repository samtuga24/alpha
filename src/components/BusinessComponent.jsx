import React from 'react'
import for_business from '../icons/for-business-image.svg'
import sales from '../icons/sales.svg'
import time from '../icons/time.svg'
import save from '../icons/save.svg'
import showcase from '../icons/showcase.svg'
import trade from '../icons/trade.svg'
import { ImageBackground, SellingContainer, SellingDiv, SellingHeader, SellingImageDiv, SellingImageWrap, SellingList, SellingNumber, SellingNumberWrap, SellingWrap, StellingStep } from './Selling'
import { ManageInfo } from './ManageComponentStyle'
import { BusinessContainer, BusinessImageDiv, BusinessImageWrap, BussinessWrap } from './BusinessComponentStyle'

export const BusinessComponent = () => {
  return (

    <BusinessContainer>
        <BussinessWrap>
        <BusinessImageDiv>
            <BusinessImageWrap className='manage-business'>
                <img src={for_business} alt=""/>
            </BusinessImageWrap>
            </BusinessImageDiv>
            <SellingDiv>
                <SellingHeader><p><span style={{color: '#000000'}}>For</span> Businesses.</p></SellingHeader>
                <ManageInfo>
                    <SellingList>
                        <SellingNumber>
                            <SellingNumberWrap className='manage-business'><img src={sales} alt="" /></SellingNumberWrap>
                        </SellingNumber>
                        
                        <StellingStep><p>Increased Sales</p></StellingStep>
                    </SellingList>


                    <SellingList>
                        <SellingNumber>
                            <SellingNumberWrap className='manage-business'><img src={time} alt="" /></SellingNumberWrap>
                        </SellingNumber>
                        
                        <StellingStep><p>Save Time</p></StellingStep>
                    </SellingList>


                    <SellingList>
                        <SellingNumber>
                            <SellingNumberWrap className='manage-business'><img src={save} alt="" /></SellingNumberWrap>
                        </SellingNumber>
                        
                        <StellingStep><p>Save Money</p></StellingStep>
                    </SellingList>


                    <SellingList>
                        <SellingNumber>
                            <SellingNumberWrap className='manage-business'><img src={showcase} alt="" /></SellingNumberWrap>
                        </SellingNumber>
                        
                        <StellingStep><p>Showcase Brand and capabilities</p></StellingStep>
                    </SellingList>


                    <SellingList>
                        <SellingNumber>
                            <SellingNumberWrap className='manage-business'><img src={trade} alt="" /></SellingNumberWrap>
                        </SellingNumber>
                        
                        <StellingStep><p>Trade with Assurance</p></StellingStep>
                    </SellingList>

                </ManageInfo>
            </SellingDiv>

        </BussinessWrap>

    </BusinessContainer>
  )
}
