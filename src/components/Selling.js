import styled from "styled-components";
import { device } from './MobileDevice';

export const SellingContainer = styled.div`

background: linear-gradient(180deg, #FFF8EB 0%, #FFFFFF 100%);
`;

export const SellingWrap = styled.div`
display: flex;
flex: 2;
padding-top: 10%;
padding-left: 10%;
padding-right: 10%;

@media ${device.mobilexxS} { 
    flex-direction: column;
    padding-left: 5%;
padding-right: 5%;
}
}

@media ${device.mobileS} { 
    flex-direction: column;
    padding-left: 5%;
padding-right: 5%;
}
}

@media ${device.mobilexS} { 
    flex-direction: column;
    padding-left: 5%;
padding-right: 5%;
}
}

@media ${device. mobileM} { 
flex-direction: column;
padding-left: 5%;
padding-right: 5%;
}

@media ${device. mobileL} { 
    flex-direction: column;
    padding-left: 5%;
padding-right: 5%;
}
}

@media ${device. mobileLx} { 
    flex-direction: column;
    padding-left: 5%;
padding-right: 5%;
}
}
@media ${device. tablet} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
}
}

@media ${device.laptop} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
}

@media ${device. laptopL} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
}

@media ${device. desktop} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
}
`;

export const ImageBackground = styled.div`
display: flex;
justify-content: center;
background: linear-gradient(180deg, rgba(247, 48, 43, 0.08) 0%, rgba(247, 48, 43, 0) 100%);
border-radius: 20px 20px 0px 0px;
padding-top: 10%;
width: 100%;
`;

export const SellingHeader = styled.div`
font-weight: 600;
font-size: 3vw;
color: #FFA500;



@media ${device.mobilexxS} { 
    font-size: 6vw;
}

@media ${device.mobileS} { 
    font-size: 6vw;
}

@media ${device.mobilexS} { 
    font-size: 6vw;
}

@media ${device. mobileM} { 
    font-size: 6vw;
}

@media ${device. mobileL} { 
    font-size: 6vw;
}

@media ${device. mobileLx} { 
    font-size: 6vw;
}
@media ${device. tablet} { 
    font-size: 3vw;
}

@media ${device.laptop} { 
    font-size: 3vw;
}

@media ${device. laptopL} { 
    font-size: 3vw;
}

@media ${device. desktop} { 
    font-size: 3vw;
}
`;


export const SellingDiv = styled.div`
flex: 1;
// padding-right: 5%;
// padding-bottom: 10%;
`;

export const SellingList = styled.div`
display:  flex;
flex: 5;
background: #FFFFFF;
align-items: center;
background: rgba(255, 255, 255, 0.75);
box-shadow: 0px 15px 200px rgba(247, 48, 43, 0.06);


@media ${device.mobilexxS} { 
    border-radius: 2vw;
    margin-bottom: 5vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    width: 100%;
}

@media ${device.mobileS} { 
    border-radius: 2vw;
    margin-bottom: 5vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    width: 100%;
}

@media ${device.mobilexS} { 
    border-radius: 2vw;
    margin-bottom: 5vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    width: 100%;
}

@media ${device. mobileM} { 
    border-radius: 2vw;
    margin-bottom: 5vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    width: 100%;
    
}

@media ${device. mobileL} { 
    border-radius: 2vw;
    margin-bottom: 5vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    width: 100%;
}

@media ${device. mobileLx} { 
    border-radius: 2vw;
    margin-bottom: 5vw;
    padding-top: 2vw;
    padding-bottom: 2vw;
    width: 100%;
}
@media ${device. tablet} { 
    border-radius: 1vw;
    height: 5vw;
    width: 90%;
    margin-bottom: 2vw;
    padding-top: 0vw;
    padding-bottom: 0vw;
}

@media ${device.laptop} { 
    border-radius: 1vw;
    height: 5vw;
    width: 90%;
    margin-bottom: 2vw;
    padding-top: 0vw;
    padding-bottom: 0vw;
}

@media ${device. laptopL} { 
    border-radius: 1vw;
    height: 5vw;
    width: 90%;
    margin-bottom: 2vw;
    padding-top: 0vw;
    padding-bottom: 0vw;
}

@media ${device. desktop} { 
    border-radius: 1vw;
    height: 5vw;
    width: 90%;
    margin-bottom: 2vw;
    padding-top: 0vw;
    padding-bottom: 0vw;
}

`;

export const SellingNumber = styled.div`
flex: 1.2;
padding-left: 2%;
`;

export const SellingNumberWrap = styled.div`
width: 30%;
display: flex;
align-items: center;



@media ${device.mobilexxS} { 
    width: 50%;
}

@media ${device.mobileS} { 
    width: 50%;
}

@media ${device.mobilexS} { 
    width: 50%;
}

@media ${device. mobileM} { 
    width: 50%;
}

@media ${device. mobileL} { 
    width: 50%;
}

@media ${device. mobileLx} { 
    width: 50%;
}
@media ${device. tablet} { 
    width: 30%;
}

@media ${device.laptop} { 
    width: 30%;
}

@media ${device. laptopL} { 
    width: 30%;
}

@media ${device. desktop} { 
    width: 30%;
}

`;

export const StellingStep = styled.div`
flex: 4;
font-weight: 600;
font-size: 1.2vw;
margin-left: -5vw;
@media ${device.mobilexxS} { 
    font-size: 3.5vw;
}

@media ${device.mobileS} { 
    font-size: 3.5vw;
}

@media ${device.mobilexS} { 
    font-size: 3.5vw;
}

@media ${device. mobileM} { 

    font-size: 3.5vw;
    // margin-left: 0vw;
}

@media ${device. mobileL} { 
    font-size: 3.5vw;
}

@media ${device. mobileLx} { 
    font-size: 3.5vw;
}
@media ${device. tablet} { 
    font-size: 1.2vw;
}

@media ${device.laptop} { 
    font-size: 1.2vw;
}

@media ${device. laptopL} { 
    font-size: 1.2vw;
}

@media ${device. desktop} { 
    font-size: 1.2vw;
}
`;


export const SellingImageDiv = styled.div`
flex: 0.8;
position: relative;
display: flex;
justify-content: center;
padding-top: 5%;
`;

export const SellingImageWrap = styled.div`
width: 75%;

`;