import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React from 'react'
const ContentArea = styled(Box)({
    background: '#f5f6f8',
    padding: '1rem',
    borderRadius: 4,
    marginBottom: 20
})
function ContentSection({ children }) {
  return (
    <ContentArea>
        {children}
    </ContentArea>
  )
}

export default ContentSection