import React from 'react'
import first from '../icons/create-first.svg'
import second from '../icons/create-second.svg'
import third from '../icons/create-third.svg'
import create from '../icons/create-manage-image.svg'
import { CreateContainer, CreateWrapper, First, ImageWrap, ManageDesc, ManageHeader, MobileImageWrap, MobileManageDesc, MobileManageHeader, MobileView, Second, SecondImageWrap, Third, ThirdImageWrap } from './Create'

export const CreateManageComponent = () => {
  return (
    <CreateContainer>
        <CreateWrapper>
            <First>
                <ManageHeader><p>Create. Manage.</p></ManageHeader>
                <ManageDesc><p>Get the most out of the Alpha experience with a business or 
                    customer profile, whether you’re <br/>buying or selling </p></ManageDesc>
                    <ImageWrap className='manage-business' id='manage-first'><img src={first}  alt="" /></ImageWrap>
            </First>
            <Second>
                <SecondImageWrap>
                <ImageWrap className='manage-business'><img src={second}  alt="" /></ImageWrap>
                </SecondImageWrap>
            </Second>
            <Third>
                <ThirdImageWrap className='manage-business'><img src={third} alt="" /></ThirdImageWrap>
                </Third>

        </CreateWrapper>

        
        <MobileView>
                <MobileManageHeader><p>Create. Manage.</p></MobileManageHeader>
                <MobileManageDesc><p>Get the most out of the Alpha experience with <br/>a business or 
                    customer profile, whether you’re <br/>buying or selling </p></MobileManageDesc>

                    <MobileImageWrap className='manage-business'>
                        <img src={create} alt="" />
                    </MobileImageWrap>
                </MobileView>
    </CreateContainer>
  )
}
