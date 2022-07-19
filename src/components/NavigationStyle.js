import styled from "styled-components";
import { device } from './MobileDevice';

export const Container = styled.div`
    height: 100px;
    // display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    // background: blue;
    background-attachment: local;
    width: 100%;
    top: 0;
    height: auto;
    // position: relative; 
    position: fixed;
    left: 0;
`;

export const Wrapper = styled.div`
    // border: 1px solid green;
    display: flex;
    flex: 5;
    align-items: center;
    // display: none;
    padding-right: 10%;
    padding-left: 10%;
    padding-top: 1%;
    padding-bottom: 1%;
    position: relative;

    @media ${device.mobilexxxS} { 
      display: none;
    }
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

export const MobileWrapper = styled.div`
    // border: 1px solid green;
    display: flex;
    flex: 2;
    align-items: center;
    height: auto;
    padding-right: 5%;
    padding-left: 5%;
    padding-top: 2%;
    @media ${device.mobilexxxS} { 
      display: flex;
    }
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

export const MobileLogo = styled.div`
    // border: 1px solid green;
    flex: 1;
    align-items: center;
    width: 100%;
`;

export const Hamburger = styled.div`
    flex: 1;
    align-items: end;
    justify-content: end;
    width: 100%;

`;


export const Logo = styled.div`
    // border: 1px solid black;
    flex: 1;
    align-item: center;
    display: flex;
    width: 100%;
`;

export const NavList = styled.div`
    // border: 1px solid blue;
    flex: 3.5;
`;


export const LogoWrap = styled.div`
    // border: 1px solid yellow;
    display: flex;
    width: 22%;
`;

export const BurgerWrap = styled.div`
    display: flex;
    align-items: end;
    justify-content: end;
    width: 22%;
    float: right;
`;

export const ListWrap = styled.div`
    // border: 1px solid green;
    float: right;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // font-size: 60px;
`;

