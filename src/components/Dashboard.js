import React from 'react'
import MainHeading from './MainHeading'
import NewHeader from './Header'
import UserDetails from './user/UserDetails'
import MobileContainer from './mobileView/MobileContainer'
import { WebView } from './user/WebView'

function Dashboard() {
  return (
    <>
        
        <NewHeader />
        <MobileContainer />
        <WebView />
    </>
  )
}

export default Dashboard