import { Box, Button, Card, Stack, styled } from '@mui/material'
import React, { useState } from 'react'
import ContentSection from './ContentSection'
import Title from './Title'

const ToggleButtonGroup = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})
const ToggleButton = styled(Button)({
    background: '#dbdbdb',
    color: '#000',
    fontSize: 12,
    borderRadius: 20,
    textTransform: 'capitalize',
    padding: '2px, 15px',
    '&:hover': {
        background: '#F8991F',
        color: '#fff'
    }
})

export const Invitations = () => {
    const [sent, setSent] = useState(true);
    const [reviewed, setReviewed] = useState(false);

    const handleChangeSent = () => {
        setSent(true);
        setReviewed(false)
    }
    const handleChangeReviewed = () => {
        setSent(false);
        setReviewed(true)
    }

    return (
        <ContentSection>
            <Stack direction="row" justifyContent="space-between">
                <Title text="Invitations" />
                <ToggleButtonGroup>
                    <ToggleButton onClick={handleChangeSent}>Sent(15)</ToggleButton>
                    <ToggleButton onClick={handleChangeReviewed}>Reviewed(6)</ToggleButton>
                </ToggleButtonGroup>
            </Stack>
            <Box>
                <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', bgcolor: '#dee8ff', color: '#232e3e', boxShadow: 'none', p: 1.5, marginTop: 1, borderRadius: 1.25 }}>
                    { sent ? 
                    <>
                        <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1 }}>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited johnsmith@gmail.com to become family member.
                        </Box>
                        <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1 }}>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited johnsmith@gmail.com to become family member.
                        </Box>
                        <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1 }}>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited johnsmith@gmail.com to become family member.
                        </Box>
                    </>
                    : 
                    <Box>This is the another view</Box>
                    }
                    
                </Card>
            </Box>
        </ContentSection>
    )
}
