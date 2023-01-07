import React from 'react'
import { Stack } from '@mui/material'
import CommonButton from '../CommonButton'
import ContentSection from './ContentSection'
import Title from './Title'
import { ActivityItems } from './ActivityItems'

function Activities() {
  return (
    <ContentSection>
      <Stack direction="row" justifyContent="space-between">
        <Title text="Activities" />
        <CommonButton text="View all" color="success" variant="contained" />
      </Stack>
      <ActivityItems />
    </ContentSection>
  )
}

export default Activities