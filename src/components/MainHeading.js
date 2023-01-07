import { Alert, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import CommonButton from './CommonButton'

function MainHeading() {
    console.log("main heading..");
    return (
        <Container maxWidth="xl">
            <Stack direction={{xs: 'column', sm: 'row'}} justifyContent="space-between" spacing={3} sx={{ py: 4 }}>
                <Typography variant='h5' component="h1">My Account</Typography>
                <Alert icon={false} severity="success" sx={{color: '#0c611a', bgcolor: '#cef2da', px: 5}}>
                    This is a success alert — check it out!
                </Alert>
                {/* <Alert icon={false} severity={`${success} ? sx={{color: '#0c611a', bgcolor: '#cef2da'}} : sx={{color: '#0c611a', bgcolor: '#cef2da'}}`}>
                    This is a success alert — check it out!
                </Alert> */}
                <CommonButton color="primary" variant="contained" text="Submit Request" size="large" />
            </Stack>
        </Container>
    )
}

export default MainHeading