import React, { useEffect, useState } from 'react'
import exclusive from '../icons/exclusive-phone-icon.svg'
import android from '../icons/android.svg'
import apple from '../icons/apple.svg'
import { AlphaFeature, ExclusiveAlpha, ExclusiveAndroid, ExclusiveApple, ExclusiveContainer, ExclusiveDiv, ExclusiveImage, ExclusiveList, ExclusiveWrapper, FifthItem, FirstItem, Fourth, ImageWrap, Items, MobileExclusiveList, MobileItems, SecondItem, StoreDownload, ThirdItem } from './ExclusiveComponentStyle'

export const ExclusiveComponent = () => {
    const indices = [1,2,3,4,5];
    const  [counter, setCounter] = useState(0);

    
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
  return (
    <ExclusiveContainer>
        <ExclusiveWrapper>
            <ExclusiveDiv>
                <AlphaFeature><p>ALPHA — FEATURES</p></AlphaFeature>
                <ExclusiveAlpha><p>Exclusive on Alpha</p></ExclusiveAlpha>
                <ExclusiveList>
                    <Items className={indices[counter]==1 ? 'list-on-click': null}><p>Verified Businesses</p></Items>
                    <Items className={indices[counter]==2 ? 'list-on-click': null}><p>Direct Sourcing</p></Items>
                    <Items className={indices[counter]==3 ? 'list-on-click': null}><p>Enjoy Wholesale Prices</p></Items>
                    <Items className={indices[counter]==4 ? 'list-on-click': null}><p>Reduce your cost</p></Items>
                    <Items id='purchase' className={indices[counter]==5 ? 'list-on-click': null}><p>Save more money on every purchase</p></Items>
                </ExclusiveList>

                <MobileExclusiveList>
                    <MobileItems className={indices[counter]==1 ? 'mobile-list-on-click': null}><p>Verified Businesses</p></MobileItems>
                    <MobileItems className={indices[counter]==2 ? 'mobile-list-on-click': null}><p>Direct Sourcing</p></MobileItems>
                    <MobileItems className={indices[counter]==3 ? 'mobile-list-on-click': null}><p>Enjoy Wholesale Prices</p></MobileItems>
                    <MobileItems className={indices[counter]==4 ? 'mobile-list-on-click': null}><p>Reduce your cost</p></MobileItems>
                    <MobileItems className={indices[counter]==5 ? 'mobile-list-on-click': null}><p>Save more money on every purchase</p></MobileItems>
                </MobileExclusiveList>
            </ExclusiveDiv>
            <ExclusiveImage>
                <ImageWrap className='exclusive-image'><img src={exclusive} alt="" /></ImageWrap>
                <StoreDownload>
                    <ExclusiveAndroid className='exclusive-download'><img src={android} alt="" /></ExclusiveAndroid>
                    <ExclusiveApple className='exclusive-download'><img src={apple} alt="" /></ExclusiveApple>
                </StoreDownload>
            </ExclusiveImage>
        </ExclusiveWrapper>
    </ExclusiveContainer>
  )
}
