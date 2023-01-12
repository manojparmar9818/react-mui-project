import { Box } from '@mui/material'
import React from 'react'
import MainHeading from '../MainHeading'
import UserDetails from './UserDetails'

export const WebView = () => {
  return (
    <Box sx={{ width: "100%", display: {xs: 'none', sm: 'none', md: 'block'} }}>
        <MainHeading />
        <UserDetails />
    </Box>
  )
}
