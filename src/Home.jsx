import React from 'react'
import { Navigation } from './components/Navigation'
import { IntroComponent } from './components/IntroComponent'
import { ReviewComponent } from './components/ReviewComponent'
import { BusinessGrowth } from './components/BusinessGrowth'
import { Feature } from './components/Feature'
import { SellingComponent } from './components/SellingComponent'
import { ExclusiveComponent } from './components/ExclusiveComponent'
import { BusinessComponent } from './components/BusinessComponent'
import { ManageComponent } from './components/ManageComponent'
// import { ConsumerComponent } from './components/ConsumerComponent'
import { BridgeComponent } from './components/BridgeComponent'
import { ConsumerComponent } from './components/ConsumerComponent'
import { CreateManageComponent } from './components/CreateManageComponent'
import { CustomerSupportComponent } from './components/CustomerSupportComponent'
import { FaqsComponent } from './components/FaqsComponent'
import { MessageComponent } from './components/MessageComponent'
import { NewsetterComponent } from './components/NewsetterComponent'
import { FooterComponent } from './components/FooterComponent'
import { VarietyComponent } from './components/VarietyComponent'





export const Home = () => {
  
  return (
    <div>
     <Navigation/>
     <IntroComponent/>
    <ReviewComponent/>
    <BusinessGrowth/>
    <Feature/>
    <SellingComponent/>
    <ExclusiveComponent/>
     <BusinessComponent/>
   <ManageComponent/>
     <ConsumerComponent/>
    <BridgeComponent/>
     <VarietyComponent/>
     <CreateManageComponent/>
     <CustomerSupportComponent/>
     <FaqsComponent/>
     <MessageComponent/>
     <NewsetterComponent/>
     <FooterComponent/>
     {/* <MobileNav/> */}
    </div>
  )
}
