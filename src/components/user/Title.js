import { Typography } from '@mui/material'
import React from 'react'

function Title({text}) {
  return (
    <Typography variant='h6' sx={{fontSize: 18}} component="h2">{text}</Typography>
  )
}

export default Title