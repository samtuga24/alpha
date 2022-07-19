import React, { useState } from 'react'
import help from '../icons/help-circle.svg'
import emailjs from 'emailjs-com'
import { EmailInput, EmailLabel, Header, Help, HelpWrap, Message, MessageContainer, MessageLabel, MessageWrapper, MobileHeader, SendButton, TxtMessage } from './MessageStyle'

export const MessageComponent = () => {
    const [form, setForm] = useState({
        email:"",
        message:""
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
         var data = JSON.stringify(form, null,2);
        
        //  alert(data);
        let emailLength;
        let validEmail;
        const checkEmail = form.email;
        const checkMessage = form.message;
        let messageLength;
        
 
        if(checkEmail.length < 1){
            emailLength = false;
            alert("Please enter email")
            // console.log("please enter email");

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
            alert("please enter email")
        }

        if(validEmail){
            if(checkMessage < 1){
                messageLength = false;
                alert("Please enter Message");
            } else{
                messageLength = true;
            }

        }


        if(emailLength && validEmail && messageLength){            
            emailjs.send('service_rnpcf9b', 'template_4jx5rte', form,'Obj2B5j1AKUvCwT5a')
            .then(function(response) {
            //    console.log('SUCCESS!', response.status, response.text);
            alert("message successfully sent");
            }, function(error) {
               console.log('FAILED...', error);
            });
            setForm({
                email:"",
                message:""
            })
        }
    }

  return (
    <MessageContainer>
        <MessageWrapper>
            <Header><p>Have other questions? Do <br/>send a <span className='message'>message.</span></p></Header>
            <MobileHeader><p>Have other questions? <br/>Do send a <span className='message'>message.</span></p></MobileHeader>
            <EmailLabel><p>Email Address</p></EmailLabel>
            <EmailInput><input type="email" name='email' value={form.email} onChange={onUpdateField} className='email-input email-input-control'/></EmailInput>

            <MessageLabel>
                <Message><p>Your Message</p></Message>
                <Help>
                    <HelpWrap className='manage-business'><img src={help} alt="" /></HelpWrap>
                    </Help>
            </MessageLabel>
            <TxtMessage>
                <textarea name='message' value={form.message} onChange={onUpdateField} className='text-message form-control' placeholder='Write your thoughts here... '></textarea>
            </TxtMessage>

            <SendButton onClick={onSubmit}>
                <p>Send Message</p>
            </SendButton>
        </MessageWrapper>

    </MessageContainer>
  )
}
