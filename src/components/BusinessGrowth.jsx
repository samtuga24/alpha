import React from 'react'
import business from '../icons/business.svg'
import search from '../icons/search.svg'
import business_life from '../icons/business-life.svg'

import { Business, BusinessDesc, BusinessDescBody, BusinessDescHeader, BusinessIcon, Container, Growth, GrowthDesc, GrowthDescBody, GrowthDescHeader, GrowthIcon, MobileWrapper, Search, SearchDesc, SearchDescBody, SearchDescHeader, SearchIcon, Wrapper } from './BusinessGrowthStyle'

export const BusinessGrowth = () => {
  return (
    <Container>
        <Wrapper>
            <Growth>
                <GrowthIcon className='growth-icon'>
                    <img src={business} alt="" />
                </GrowthIcon>
                <GrowthDesc>
                    <GrowthDescHeader>
                        <p>Grow your business with <span className='business-alpha-green'>Alpha</span></p>
                    </GrowthDescHeader>
                    <GrowthDescBody>
                        <p>List your business and allow consumers <br/>to find you easily.</p>
                    </GrowthDescBody>
                </GrowthDesc>
            </Growth>
            <Search>
                <SearchIcon className='growth-icon'>
                    <img src={search} alt="" />
                </SearchIcon>
                <SearchDesc>
                    <SearchDescHeader>
                        <p>Find what you need with <span className='business-alpha-orange'>Alpha.</span></p>
                    </SearchDescHeader>
                    <SearchDescBody>
                        <p> We connect you to the exact business or the <br/>service you need</p>
                    </SearchDescBody>
                </SearchDesc>
            </Search>
            <Business>
                <BusinessIcon className='growth-icon'>
                    <img src={business_life} alt="" />
                </BusinessIcon>
                <BusinessDesc>
                    <BusinessDescHeader>
                        <p>Bring your business to life</p>
                    </BusinessDescHeader>
                    <BusinessDescBody>
                        <p>Bring your business to life and connect with <br/>new customers on Alpha </p>
                    </BusinessDescBody>
                </BusinessDesc>
            </Business>
        </Wrapper>

        <MobileWrapper>
        <Growth>
                <GrowthIcon className='growth-icon'>
                    <img src={business} alt="" />
                </GrowthIcon>
                <GrowthDesc>
                    <GrowthDescHeader>
                        <p>Grow your business with <span className='business-alpha-green'>Alpha</span></p>
                    </GrowthDescHeader>
                    <GrowthDescBody>
                        <p>List your business and allow consumers<br/> to find you easily.</p>
                    </GrowthDescBody>
                </GrowthDesc>
            </Growth>

            <Search>
                <SearchIcon className='growth-icon'>
                    <img src={search} alt="" />
                </SearchIcon>
                <SearchDesc>
                    <SearchDescHeader>
                        <p>Find what you need with <span className='business-alpha-orange'>Alpha.</span></p>
                    </SearchDescHeader>
                    <SearchDescBody>
                        <p> We connect you to the exact business or <br/>the service you need</p>
                    </SearchDescBody>
                </SearchDesc>
            </Search>


            <Business>
                <BusinessIcon className='growth-icon'>
                    <img src={business_life} alt="" />
                </BusinessIcon>
                <BusinessDesc>
                    <BusinessDescHeader>
                        <p>Bring your business to life</p>
                    </BusinessDescHeader>
                    <BusinessDescBody>
                        <p>Bring your business to life and connect with new customers on Alpha </p>
                    </BusinessDescBody>
                </BusinessDesc>
            </Business>
        </MobileWrapper>
    </Container>
  )
}
