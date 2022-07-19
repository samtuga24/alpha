import React, { useEffect, useState } from 'react'
import second from '../icons/second-variety.svg'
import variety from '../icons/variety.svg'
import f_white from '../icons/first-white.svg'
import s_white from '../icons/second-white.svg'
import t_white from '../icons/third-white.svg'
import fo_white from '../icons/fourth-white.svg'
import third from '../icons/third-variety.svg'
import fourth from '../icons/fourth-variety.svg'
import { FirstCircle, FourthCircle, MobileIconWrap, MobileVariety, MobileVarietyDesc, MobileVarietyIcons, SecondCircle, ThirdCircle, VarietyContainer, VarietyDesc, VarietyHeader, VarietyIcons, VarietyIconWrap, VarietyWrapper } from './Variety'

export const VarietyComponent = () => {
  const images = [variety, f_white, second, s_white, third, t_white, fourth, fo_white];
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const [onHover, setOnHover] = useState(variety);
  const [first, setFirst] = useState(second);
  const [v_second, setSecond] = useState(third);
  const [v_third, setThird] = useState(fourth);

  return (
    <VarietyContainer>
        <VarietyWrapper>
            <VarietyHeader><p>Variety</p></VarietyHeader>
            <VarietyDesc><p>Alpha hosts different kinds of businesses in<br/>
                    different industries and gives people options that<br/>
                    are close to them</p>
            </VarietyDesc>


            <VarietyIcons>
              <FirstCircle onMouseOver={()=>setOnHover(f_white)} onMouseLeave={()=>setOnHover(variety)}>
                <VarietyIconWrap className='manage-business on-hover'><img src={onHover} alt="" /></VarietyIconWrap>  
              </FirstCircle>

              <SecondCircle onMouseOver={()=>setFirst(s_white)} onMouseLeave={()=>setFirst(second)}>
                <VarietyIconWrap className='manage-business'><img src={first} alt="" /></VarietyIconWrap>
                
              </SecondCircle>

              <ThirdCircle onMouseOver={()=>setSecond(t_white)} onMouseLeave={()=>setSecond(third)}>
                <VarietyIconWrap className='manage-business'><img src={v_second} alt="" /></VarietyIconWrap>
                
              </ThirdCircle>

              <FourthCircle onMouseOver={()=>setThird(fo_white)} onMouseLeave={()=>setThird(fourth)}>
                <VarietyIconWrap className='manage-business'><img src={v_third} alt="" /></VarietyIconWrap>
                
              </FourthCircle>

              
            </VarietyIcons>
        </VarietyWrapper>

        <MobileVariety>
          <VarietyHeader><p>Variety</p></VarietyHeader>
          <MobileVarietyDesc><p>Alpha hosts different kinds of businesses in<br/>
            different industries and gives people options <br/>that
            are close to them</p>
          </MobileVarietyDesc>
          <MobileVarietyIcons>
              <MobileIconWrap className='manage-business fadeIn'><img src={images[currentIndex]} alt=""/></MobileIconWrap>
          </MobileVarietyIcons>
        </MobileVariety>
    </VarietyContainer>
  )
}
