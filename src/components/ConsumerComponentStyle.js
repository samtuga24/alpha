import styled from "styled-components";
import { device } from './MobileDevice';

export const ConsumerContainer = styled.div`
background: #EAFBF3;
padding-top: 5%;
`;

export const ConsumerWrapper = styled.div`
display: flex;
flex: 2;
padding-left: 10%;
padding-right: 10%;
padding-top: 5%;


@media ${device.mobilexxS} { 
    flex-direction: column-reverse;
    }
    
    @media ${device.mobileS} { 
        flex-direction: column-reverse;
    }
    
    @media ${device.mobilexS} { 
        flex-direction: column-reverse;
    }
    
    @media ${device. mobileM} { 
        flex-direction: column-reverse;
    }
    
    @media ${device. mobileL} { 
        flex-direction: column-reverse;
    }
    
    @media ${device. mobileLx} { 
        flex-direction: column-reverse;
    }
    @media ${device. tablet} { 
        flex-direction: row;
       
    }
    
    @media ${device.laptop} { 
        flex-direction: row;
    }
    
    @media ${device. laptopL} { 
        flex-direction: row;
    }
    
    @media ${device. desktop} { 
        flex-direction: row;
    }
`;