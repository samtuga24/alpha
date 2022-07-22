import styled from "styled-components";
import manage from '../background/manage-back.svg'
import mobile_background from '../background/background.svg'
import { device } from './MobileDevice';
export const ManageContainer = styled.div`
background: #EAFBF3;
`;

export const ManageWrapper = styled.div`
display: flex;
flex: 2;
padding-left: 10%;
padding-top: 5%;

@media ${device.mobilexxS} { 
display: none;
}

@media ${device.mobileS} { 
    display: none;
}

@media ${device.mobilexS} { 
    display: none;
}

@media ${device. mobileM} { 
    display: none;
}

@media ${device. mobileL} { 
    display: none;
}

@media ${device. mobileLx} { 
    display: none;
}
@media ${device. tablet} { 
    display: flex;
}

@media ${device.laptop} { 
    display: flex;
}

@media ${device. laptopL} { 
    display: flex;
}

@media ${device. desktop} { 
    display: flex;
}

`;


export const ManageDiv = styled.div`
flex: 1;
padding-right: 5%;
padding-bottom: 10%;
`;

export const ManageImageDiv = styled.div`
flex: 1;
position: relative;
display: flex;
justify-content: center;
padding-top: 12%;
background: url(${manage});
border-radius: 20px 0px 0px 0px;
height: 42.5vw;
`;

export const ManageImageWrap = styled.div`
width: 100%;
position: absolute;
bottom: 0;
display: flex;
align-items: center;
justify-content: center;
`;

export const ManageHeader = styled.div`
font-weight: 600;
font-size: 3vw;
color: #0A0C14;
`;

export const ManageInfo = styled.div`
position: relative;
height: 70vh;
`;

export const InfoList = styled.div`
display:  flex;
flex: 5;
align-items: center;
background: rgba(255, 255, 255, 0.75);
box-shadow: 0px 15px 200px rgba(247, 48, 43, 0.06);
border-radius: 1vw;
height: 5vw;
width: 100%;
margin-bottom: 2vw;
position: absolute;
top: 0;
`;


export const InfoList2 = styled.div`
display:  flex;
flex: 5;
align-items: center;
background: rgba(255, 255, 255, 0.75);
box-shadow: 0px 15px 200px rgba(247, 48, 43, 0.06);
border-radius: 1vw;
height: 5vw;
width: 90%;
margin-bottom: 2vw;
position: absolute;
top: 7vw;
box-sizing: border-box;
`;


export const InfoList3 = styled.div`
display:  flex;
flex: 5;
align-items: center;
background: rgba(255, 255, 255, 0.75);
box-shadow: 0px 15px 200px rgba(247, 48, 43, 0.06);
border-radius: 1vw;
height: 5vw;
width: 80%;
margin-bottom: 2vw;
position: absolute;
top: 14vw;
box-sizing: border-box;
`;


export const InfoList4 = styled.div`
display:  flex;
flex: 5;
align-items: center;
background: rgba(255, 255, 255, 0.75);
box-shadow: 0px 15px 200px rgba(247, 48, 43, 0.06);
border-radius: 1vw;
height: 5vw;
width: 72%;
position: absolute;
top: 21vw;
box-sizing: border-box;
`;

export const Number = styled.div`
flex: 1;
padding-left: 2%;
`;


export const NumberWrap = styled.div`
width: 27%;
display: flex;
align-items: center;
`;


export const NumberWrap2 = styled.div`
width: 33%;
display: flex;
align-items: center;
`;


export const NumberWrap3 = styled.div`
width: 36%;
display: flex;
align-items: center;
`;

export const NumberWrap4 = styled.div`
width: 40%;
display: flex;
align-items: center;
`;


export const Step = styled.div`
flex: 4;
font-weight: 600;
font-size: 1.2vw;
margin-left: -6vw;
`;


export const Step2 = styled.div`
flex: 4;
font-weight: 600;
font-size: 1.2vw;
margin-left: -4.5vw;
`;

export const Step3 = styled.div`
flex: 4;
font-weight: 600;
font-size: 1.2vw;
margin-left: -3.5vw;
`;


export const Step4 = styled.div`
flex: 4;
font-weight: 600;
font-size: 1.2vw;
margin-left: -2.5vw;
`;


export const MobileView = styled.div`

@media ${device.mobilexxS} { 
display: flex;
flex-direction: column;
}

@media ${device.mobileS} { 
    display: flex;
    flex-direction: column;
}

@media ${device.mobilexS} { 
    display: flex;
    flex-direction: column;
}

@media ${device. mobileM} { 
    display: flex;
    flex-direction: column;
}

@media ${device. mobileL} { 
    display: flex;
    flex-direction: column;
}

@media ${device. mobileLx} { 
    display: flex;
    flex-direction: column;
}
@media ${device. tablet} { 
    display: none;

}

@media ${device.laptop} { 
    display: none;
}

@media ${device. laptopL} { 
    display: none;
}

@media ${device. desktop} { 
    display: none;
}

`;

export const MobileHeader = styled.div`
font-weight: 600;
font-size: 6vw;
color: #0A0C14;
padding-left: 5%;
padding-right: 5%;
`;


export const MobileList = styled.div`
display: flex;
flex: 5;
background: #FFFFFF;
border-radius: 2vw;
padding-left: 2%;
margin-bottom: 5vw;
margin-right: 5%;
margin-left: 5%;
padding-top: 2vw;
padding-bottom: 2vw;
`;

export const MobileNumber = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

export const MobileText = styled.div`
flex: 4;
font-size: 3.5vw;
color: #666666;
margin-left: -3vw;
`;

export const MobileNumberWrap = styled.div`
width: 60%;
disply: flex;
align-items: center;
justify-content: center;
`;

export const MobileImage = styled.div`
// width: 60%;
// disply: flex;
// align-items: center;
// justify-content: center;
display: flex;
position: relative;
align-items: center;
justify-content: center;
background: url(${mobile_background});
padding-top: 20%;
margin-top: 10%;
height: 100vw;
`;

export const MobileImageWrap = styled.div`
position: absolute;
bottom: 0;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;