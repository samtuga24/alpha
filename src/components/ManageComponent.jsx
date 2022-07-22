import React, { useEffect, useState } from 'react'
import step_1 from '../icons/step-1.svg'
import step_2 from '../icons/step-2.svg'
import step_3 from '../icons/step-3.svg'
import step_4 from '../icons/step-4.svg'
import nurture_image from '../icons/nurture.svg'
import manage_image from '../icons/manage-image.svg'
import sales from '../icons/make_sales.png'
import reply from '../icons/reply.svg'

import { InfoList, InfoList2, InfoList3, InfoList4, ManageBusinessStepTwo, ManageContainer, ManageDiv, ManageHeader, ManageImageDiv, ManageImageWrap, ManageInfo, ManageList, ManageListDiv, ManageListDiv2, ManageStep, ManageWrapper, MobileHeader, MobileImage, MobileImageWrap, MobileList, MobileManageBusinessImage, MobileNumber, MobileNumberWrap, MobileText, MobileView, Number, NumberFour, NumberThree, NumberTwo, NumberWrap, NumberWrap2, NumberWrap3, NumberWrap4, Step, Step2, Step3, Step4, TextWrap, TextWrap2 } from './ManageComponentStyle'

export const ManageComponent = () => {
    const images = [manage_image, nurture_image, reply, sales];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [divIndex, setDivIndex] = useState(false);
    const indices = [1,2,3,4];
    const  [counter, setCounter] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setDivIndex(!divIndex);          
        }, 2000);
        return () => clearInterval(interval);
      }, [divIndex]);


    useEffect(() => {
        const interval = setInterval(() => {
          
            if(counter === indices.length - 1) {
                setCounter(0);
            } 

            else {
                setCounter(counter + 1);
           }
        }, 2000);
        return () => clearInterval(interval);
      }, [counter]);

// {alert(indices[counter])}


// ##########################################################################################
    useEffect(() => {
        const intervalId = setInterval(() => {
            if(currentIndex === images.length - 1) {
                setCurrentIndex(0);
            } 
            else {
                 setCurrentIndex(currentIndex + 1);
            }
        }, 2000)
        
        return () => clearInterval(intervalId);
    }, [currentIndex])
  return (
    <ManageContainer>
        <ManageWrapper>
            <ManageDiv>
                <ManageHeader><p>Manage your Business <br/>Account</p></ManageHeader>
                <ManageInfo>
                    <InfoList className={indices[counter]==1? 'add-border':null} id="info-list" style={{borderRadius:'1vw'}}>
                        <Number>
                            <NumberWrap className='manage-business'><img src={step_1} alt="" /></NumberWrap>
                        </Number>
                        
                        <Step><p>Stay connected with buyers through real-time notification</p></Step>
                    </InfoList>

                    <InfoList2 className={indices[counter]==2? 'add-border':null} id="info-list2">
                        <Number>
                            <NumberWrap2 className='manage-business'><img src={step_2} alt="" /></NumberWrap2>
                        </Number>
                        
                        <Step2><p>Nurture your relationship with your buyers </p></Step2>
                    </InfoList2>


                    
                    <InfoList3 className={indices[counter]==3? 'add-border':null} id="info-list3">
                        <Number>
                            <NumberWrap3 className='manage-business'><img src={step_3} alt="" /></NumberWrap3>
                        </Number>
                        
                        <Step3><p>Reply to enquiries through live chat </p></Step3>
                    </InfoList3>


                    <InfoList4 className={indices[counter]==4 ? 'try-again add-border ':null} id={indices[counter]==3? 'tryagain':null}>
                        <Number>
                            <NumberWrap4 className='manage-business'><img src={step_4} alt="" /></NumberWrap4>
                        </Number>
                        
                        <Step4><p>Make More Sales! </p></Step4>
                    </InfoList4>
                </ManageInfo>
            </ManageDiv>
            <ManageImageDiv>
                <ManageImageWrap className={(currentIndex == 1 ||  currentIndex ==3) ? 'manage-small fadeIn':'manage'}>
                    <img src={images[currentIndex]} alt=""/>
                </ManageImageWrap>
            </ManageImageDiv>
        </ManageWrapper>


        {/* ################################################################ Mobile View  */}
        <MobileView>
        <MobileHeader><p>Manage your Business <br/>Account</p></MobileHeader>
        <MobileList className={indices[counter]==1? 'add-border':null}>
            <MobileNumber>
                <MobileNumberWrap className='manage-business'><img src={step_1} alt="" /></MobileNumberWrap>
            </MobileNumber>
            <MobileText><p>Stay connected with buyers through <br/>realtime notification.</p></MobileText>
        </MobileList>

        <MobileList className={indices[counter]==2? 'add-border':null}>
            <MobileNumber>
                <MobileNumberWrap className='manage-business'><img src={step_2} alt="" /></MobileNumberWrap>
            </MobileNumber>
            <MobileText><p>Nuture your relationship with buyers</p></MobileText>
        </MobileList>

        
        <MobileList className={indices[counter]==3? 'add-border':null}>
            <MobileNumber>
                <MobileNumberWrap className='manage-business'><img src={step_3} alt="" /></MobileNumberWrap>
            </MobileNumber>
            <MobileText><p>Reply to enquires through live chat</p></MobileText>
        </MobileList>

        <MobileList className={indices[counter]==4? 'add-border':null} id={indices[counter]==3? 'tryagain':null}>
            <MobileNumber>
                <MobileNumberWrap className='manage-business'><img src={step_4} alt="" /></MobileNumberWrap>
            </MobileNumber>
            <MobileText><p>Make more sales</p></MobileText>
        </MobileList>

        <MobileImage>
            <MobileImageWrap className={(currentIndex == 1 ||  currentIndex ==3) ? 'manage-small fadeIn':'manage'}><img src={images[currentIndex]} alt="" className=''/></MobileImageWrap>
        </MobileImage>
        </MobileView>
    </ManageContainer>
  )
}
