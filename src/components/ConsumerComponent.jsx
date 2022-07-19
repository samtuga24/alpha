import React from 'react'
import comsumer from '../icons/consumer-image.svg'
import order from '../icons/order.svg'
import connect from '../icons/connect.svg'
import comsumer_trade from '../icons/consumer-trade.svg'
import purchase from '../icons/purchase.svg'
import option from '../icons/option.svg'
import { BusinessContainer, BusinessImageDiv, BusinessImageWrap, BussinessWrap } from './BusinessComponentStyle'
import { SellingDiv, SellingHeader, SellingList, SellingNumber, SellingNumberWrap, StellingStep } from './Selling'
import { ManageInfo } from './ManageComponentStyle'
import { ConsumerContainer } from './ConsumerComponentStyle'

export const ConsumerComponent = () => {
  return (
    <ConsumerContainer>
    <BussinessWrap>
    <BusinessImageDiv>
        <BusinessImageWrap className='manage-business'>
            <img src={comsumer} alt=""/>
        </BusinessImageWrap>
        </BusinessImageDiv>
        <SellingDiv>
            <SellingHeader><p><span style={{color: '#000000'}}>For</span> <span style={{color: '#27C078'}}>Consumers.</span></p></SellingHeader>
            <ManageInfo>
                <SellingList>
                    <SellingNumber>
                        <SellingNumberWrap className='manage-business'><img src={order} alt="" /></SellingNumberWrap>
                    </SellingNumber>
                    
                    <StellingStep><p>Order with Confidence</p></StellingStep>
                </SellingList>


                <SellingList>
                    <SellingNumber>
                        <SellingNumberWrap className='manage-business'><img src={connect} alt="" /></SellingNumberWrap>
                    </SellingNumber>
                    
                    <StellingStep><p>Connect with thousands of suppliers</p></StellingStep>
                </SellingList>


                <SellingList>
                    <SellingNumber>
                        <SellingNumberWrap className='manage-business'><img src={comsumer_trade} alt="" /></SellingNumberWrap>
                    </SellingNumber>
                    
                    <StellingStep><p>Trade without barriers</p></StellingStep>
                </SellingList>


                <SellingList>
                    <SellingNumber>
                        <SellingNumberWrap className='manage-business'><img src={purchase} alt="" /></SellingNumberWrap>
                    </SellingNumber>
                    
                    <StellingStep><p>Get more from each purchase</p></StellingStep>
                </SellingList>


                <SellingList>
                    <SellingNumber>
                        <SellingNumberWrap className='manage-business'><img src={option} alt="" /></SellingNumberWrap>
                    </SellingNumber>
                    
                    <StellingStep><p>Thousands of options to source from</p></StellingStep>
                </SellingList>

            </ManageInfo>
        </SellingDiv>

    </BussinessWrap>

</ConsumerContainer>
  )
}
