import React from 'react'
import { CustomerContainer, CustomerWrapper, ImageWrap, MobileImageWrap, SupportImage, SupportText, TextDesc, TextHeader } from './CustomerStyle'
import customer from '../icons/customer-desktop.svg'
import customer_mobile from '../icons/customer.svg'
export const CustomerSupportComponent = () => {
  return (
    <CustomerContainer>
        <CustomerWrapper>
            <SupportImage>
                <ImageWrap className='manage-business'><img src={customer} alt="" id='customer-id'/></ImageWrap>
                <MobileImageWrap className='manage-business'><img src={customer_mobile} alt="" id='customer-id'/></MobileImageWrap>
            </SupportImage>
            <SupportText>
                <TextHeader><p>Customer Support</p></TextHeader>
                <TextDesc><p>Reach out to our customer support <br/>via email to lodge any complaints or to 
                <br/>make an inquiry.</p></TextDesc>
            </SupportText>
        </CustomerWrapper>
    </CustomerContainer>
  )
}
