import React from 'react'
import { Grid } from '@mui/material'
import BankAccount from './BankAccount'
import BillingAddress from './BillingAddress'
import Activities from './Activities'

function OtherDetails() {
    return (
        <Grid container spacing={2} my={1}>
            <Grid item sm={12} md={6} lg={7}>
                <BankAccount />
                <BillingAddress />
            </Grid>
            <Grid item sm={12} md={6} lg={5}>
                <Activities />
            </Grid>
        </Grid>
    )
}

export default OtherDetails