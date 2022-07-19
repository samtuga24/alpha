import styled from "styled-components";

import support from '../background/customer-support-background.svg'
import { device } from './MobileDevice';
export const CustomerContainer = styled.div`

`;

export const CustomerWrapper = styled.div`
display: flex;
flex: 2;
// background-position: center;
background-repeat: no-repeat;
background-size: cover;
padding-top: 5%;

@media ${device.mobilexxS} { 
flex-direction: column-reverse;
background: #FFFFFF;
padding-left: 5%;
padding-right: 5%;
}

@media ${device.mobileS} { 
    flex-direction: column-reverse;
    background: #FFFFFF;
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device.mobilexS} { 
    background: #FFFFFF;
    padding-left: 5%;
    padding-right: 5%;
    flex-direction: column-reverse;

}

@media ${device. mobileM} { 
    flex-direction: column-reverse;
    background: #FFFFFF;
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device. mobileL} { 
    flex-direction: column-reverse;
    padding-left: 5%;
    padding-right: 5%;
    background: #FFFFFF;
}

@media ${device. mobileLx} { 
    flex-direction: column-reverse;
    padding-left: 5%;
    padding-right: 5%;
    background: #FFFFFF;
}
@media ${device. tablet} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
    background: url(${support});
}

@media ${device.laptop} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
    background: url(${support});
    background-position:right;
}

@media ${device. laptopL} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
    background: url(${support});
}

@media ${device. desktop} { 
    padding-left: 10%;
padding-right: 10%;
flex-direction: row;
background: url(${support});

}    
`;

export const SupportImage = styled.div`
flex: 1;
// display: flex;
// align-items: end;
// justify-content: end;

`;

export const SupportText = styled.div`
flex: 1;
margin-top: 10vw;


@media ${device.mobilexxS} { 
    padding-left: 0vw;
}

@media ${device.mobileS} { 
    padding-left: 0vw;
}

@media ${device.mobilexS} { 
    padding-left: 0vw;
}

@media ${device. mobileM} { 
    padding-left: 0vw;
}

@media ${device. mobileL} { 
    padding-left: 0vw;
}

@media ${device. mobileLx} { 
    padding-left: 0vw;
}
@media ${device. tablet} { 
    padding-left: 5vw;
}

@media ${device.laptop} { 
    padding-left: 5vw;
}

@media ${device. laptopL} { 
    padding-left: 5vw;
}

@media ${device. desktop} { 
    padding-left: 5vw;
}

`;

export const TextHeader = styled.div`
font-weight: 600;
color: #27C078;

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
    font-size: 3.1vw;
}

@media ${device.laptop} { 
    font-size: 3.1vw;
}

@media ${device. laptopL} { 
    font-size: 3.1vw;
}

@media ${device. desktop} { 
    font-size: 3.1vw;
}

`;

export const TextDesc = styled.div`
font-weight: 400;

color: #0A0C14;
margin-top: -2vw;

@media ${device.mobilexxS} { 
    font-size: 3.7vw;
}

@media ${device.mobileS} { 
    font-size: 3.7vw;
}

@media ${device.mobilexS} { 
    font-size: 3.7vw;
}

@media ${device. mobileM} { 
    font-size: 3.7vw;
}

@media ${device. mobileL} { 
    font-size: 3.7vw;
}

@media ${device. mobileLx} { 
    font-size: 3.7vw;
}
@media ${device. tablet} { 
    font-size: 1.5vw;
}

@media ${device.laptop} { 
    font-size: 1.5vw;
}

@media ${device. laptopL} { 
    font-size: 1.5vw;
}

@media ${device. desktop} { 
    font-size: 1.5vw;
}
`;

export const ImageWrap = styled.div`
width: 100%;
position: relative;

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

export const MobileImageWrap = styled.div`
width: 100%;


@media ${device.mobilexxS} { 
    display: flex;
    }
    
    @media ${device.mobileS} { 
        display: flex;
    }
    
    @media ${device.mobilexS} { 
        display: flex;
    }
    
    @media ${device. mobileM} { 
        display: flex;
    }
    
    @media ${device. mobileL} { 
        display: flex;
    }
    
    @media ${device. mobileLx} { 
        display: flex;
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