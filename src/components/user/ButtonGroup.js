import { Stack } from '@mui/material'
import React from 'react'
import CommonButton from '../CommonButton'

function ButtonGroup() {
  return (
    <Stack direction={{xs: 'column', sm: 'row', md: 'row', lg: 'column'}} spacing={1} sx={{minWidth: '15%', height: '100%', justifyContent: {xs: 'center', sm: 'flex-start'}}}>
        <CommonButton text="Save Changes" color="success" variant="contained" />
        <CommonButton text="Change Password" color="primary" variant="contained" />
        <CommonButton text="Leave Family" color="error" variant="contained" />
    </Stack>
  )
}

export default ButtonGroup