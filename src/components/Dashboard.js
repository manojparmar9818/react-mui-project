import React from 'react'
import Header from './Header'
import MainHeading from './MainHeading'
import OtherDetails from './user/OtherDetails'
import UserDetails from './user/UserDetails'

function Dashboard() {
  return (
    <>
        <Header />
        <MainHeading />
        <UserDetails />
    </>
  )
}

export default Dashboard