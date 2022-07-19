import React, { useState } from 'react'
import help from '../icons/help-circle.svg'
import success from '../icons/success-icon.svg'
import emailjs from 'emailjs-com'
import { ButtonWrap, DivWrapper, EmailDiv, EmailEntry, EmailInput, EmailLabel, EmailTextWrap, EmailWrap, Help, HelpWrap, MobileButtonWrap, MobileEmailWrap, MobileHelpWrap, MobileSubscribeHeader, MobileView, NewsContainer, NewsWrapper, SendButton, SubscribeHeader, SuccessButton, SuccessDiv, SuccessDivWrap, SuccessIcon, SuccessIconWrap, SuccessText } from './NewStyle'

export const NewsetterComponent = () => {
    const [buttonClick, setButtonClick] = useState(false);
    const [form, setForm] = useState({
        email:""
    });

    const onUpdateField = e =>{
        const NextFormState = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(NextFormState);
 
    }

    const isValidEmail = (inputEmail) =>{
        return /\S+@\S+\.\S+/.test(inputEmail);
    }

    const onSubmit = e =>{
        e.preventDefault();
        let emailLength;
        let validEmail;
        const checkEmail = form.email;
        
        if(checkEmail.length < 1){
            emailLength = false;
            alert("Please enter email");

        }else{
            emailLength = true;
        }

        if(emailLength){
            if(isValidEmail(checkEmail)){
                validEmail = true;

            }else{
                validEmail = false;
                alert("Please enter a valid email");
            }         
        }else{
            validEmail = false;
            alert("please enter email")
        }

        if(emailLength && validEmail){
            // emailjs.send('service_k38e7yf', 'template_u21pndj',form,'Obj2B5j1AKUvCwT5a')
            // .then(function(response) {
            //    console.log('SUCCESS!', response.status, response.text);
            // // alert("message successfully sent");
            // }, function(error) {
            //    console.log('FAILED...', error);
            // });
            form.email = " ";
            setButtonClick(!buttonClick);
        }

    }

  return (
    <NewsContainer id='subscribe'>
        <NewsWrapper>                 
            <SubscribeHeader><p><span className={!buttonClick ? 'subscribe-orange' : null}>Subscribe</span> To Our Newsletter <br/>For Fast Updates & News</p></SubscribeHeader>
            <EmailDiv>
                { !buttonClick && (
                <DivWrapper className={!buttonClick ? 'NewfadeIn':''}>
                <EmailLabel>
                    <EmailTextWrap><p>Email Address</p></EmailTextWrap>
                    <Help><HelpWrap className='manage-business'><img src={help} alt="" /></HelpWrap></Help>                    
                </EmailLabel>
                <EmailInput>
                    <EmailEntry><input type= "email" name='email' value={form.email} onChange={onUpdateField} className='newsletter-email-input email-input-control' placeholder='Enter your email address'/></EmailEntry>
                    <SendButton onClick={onSubmit}>
                        <ButtonWrap><p>Subscribe Now</p></ButtonWrap>
                    </SendButton>
                </EmailInput>
              </DivWrapper>
                )}

              { buttonClick && (
              <SuccessDiv className={!buttonClick ? '':'NewfadeIn'}>
              <SuccessDivWrap>
                  <SuccessIcon>
                      <SuccessIconWrap><img src={success} alt="" /></SuccessIconWrap>
                  </SuccessIcon>
                  <SuccessText><p>Hurray you just subscribed to our Newsletter. You would get updates from Alpha as time goes on</p></SuccessText>
                  <SuccessButton onClick={()=> setButtonClick(!buttonClick)}><p>Got It!</p></SuccessButton>
              </SuccessDivWrap>
            </SuccessDiv>
              )}

            </EmailDiv>


        </NewsWrapper>



             
        <MobileView>
        <MobileSubscribeHeader>
            <p><span className='subscribe-orange'>Subscribe</span> To Our <br/>Newsletter For Fast<br/> Updates & News</p>
            </MobileSubscribeHeader>

            <MobileEmailWrap>
                <EmailTextWrap><p>Email Address</p></EmailTextWrap>
                        
                <MobileHelpWrap className='manage-business'><img src={help} alt="" /></MobileHelpWrap>    
                
            </MobileEmailWrap>

            <input type="email" className='mobile-newsletter-email-input'/>  

            <MobileButtonWrap>
                <p>Subscribe Now</p>
            </MobileButtonWrap>

            

        </MobileView>
    </NewsContainer>
  )
}
