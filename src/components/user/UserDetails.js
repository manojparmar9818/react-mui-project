import { Box, Grid, Stack, styled } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CommonButton from '../CommonButton'
import MainHeading from '../MainHeading'
import ButtonGroup from './ButtonGroup'
import ContentSection from './ContentSection'
import Family from './Family'
import { Invitations } from './Invitations'
import OtherDetails from './OtherDetails'
import Title from './Title'
import UserInputs from './UserInputs'
import UserProfile from './UserProfile'

const UserDetails = () => {
  return (
    <Container maxWidth="xl">
        <Grid container spacing={2}>
            <Grid item sm={8} md={8} lg={9}>
                <ContentSection>
                    <Grid container spacing={3}>
                        <Grid item sm={12} md={6} lg={3}>
                            <UserProfile />
                        </Grid>
                        <Grid item sm={12} md={6} lg={6}>
                            <UserInputs />
                        </Grid>
                        <Grid item sm={12} md={4} lg={3}>
                            <ButtonGroup />
                        </Grid>
                    </Grid>
                </ContentSection>
                <OtherDetails />
            </Grid>
            <Grid item sm={4} md={4} lg={3}>
                <Family />
                <Invitations />
            </Grid>
        </Grid>
    </Container>
  )
}

export default UserDetails