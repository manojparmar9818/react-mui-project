import { Avatar, Box, Button, Card, Stack, styled } from '@mui/material'
import React, { useState } from 'react'
import ContentSection from './ContentSection'
import Title from './Title'
import PeopleIcon from '@mui/icons-material/People';
import CommonButton from '../CommonButton';
import ClearIcon from '@mui/icons-material/Clear';
import DoneIcon from '@mui/icons-material/Done';
import { minWidth } from '@mui/system';

const ToggleButtonGroup = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#dbdbdb',
    borderRadius: 20,
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
    },
    '& .active': {
        background: '#000'
    }
})

const Invitations = () => {
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
            { sent ? 
            <Box>
                <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', color: '#232e3e', bgcolor: 'transparent', boxShadow: 'none', marginTop: 1, borderRadius: 1.25 }}>
                    
                    
                        <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1, borderRadius: '5px', bgcolor: '#dee8ff'}}>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited johnsmith@gmail.com to become family member.
                        </Box>
                        <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1, borderRadius: '5px', bgcolor: '#dee8ff'}}>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited johnsmith@gmail.com to become family member.
                        </Box>
                        <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1, borderRadius: '5px', bgcolor: '#dee8ff'}}>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited johnsmith@gmail.com to become family member.
                        </Box>
                    
                    
                </Card>
            </Box>
            :
            <Box>
                <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column', color: '#232e3e', bgcolor: 'transparent', boxShadow: 'none', marginTop: 1, borderRadius: 1.25 }}>                    
                    
                    <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1.5, borderRadius: '5px', bgcolor: '#dee8ff', display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited to become family.
                        </Box>
                        <Box sx={{ display:'flex', gap: '5px', '& button': {minWidth: '30px', height: '30px', padding: '1px', fontSize: '10px'}, '& button svg': {width: '20px', height: '20px'}}}>
                            <CommonButton color="success" text={<DoneIcon />} variant="contained" />
                            <CommonButton color="error" text={<ClearIcon />} variant="contained" />
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1.5, borderRadius: '5px', bgcolor: '#dee8ff', display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited to become family.
                        </Box>
                        <Box sx={{ display:'flex', gap: '5px', '& button': {minWidth: '30px', height: '30px', padding: '1px', fontSize: '10px'}, '& button svg': {width: '20px', height: '20px'}}}>
                            <CommonButton color="success" text={<DoneIcon />} variant="contained" />
                            <CommonButton color="error" text={<ClearIcon />} variant="contained" />
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1.5, borderRadius: '5px', bgcolor: '#dee8ff', display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited to become family.
                        </Box>
                        <Box sx={{ display:'flex', gap: '5px', '& button': {minWidth: '30px', height: '30px', padding: '1px', fontSize: '10px'}, '& button svg': {width: '20px', height: '20px'}}}>
                            <CommonButton color="success" text={<DoneIcon />} variant="contained" />
                            <CommonButton color="error" text={<ClearIcon />} variant="contained" />
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1.5, borderRadius: '5px', bgcolor: '#dee8ff', display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited to become family.
                        </Box>
                        <Box sx={{ display:'flex', gap: '5px', '& button': {minWidth: '30px', height: '30px', padding: '1px', fontSize: '10px'}, '& button svg': {width: '20px', height: '20px'}}}>
                            <CommonButton color="success" text={<DoneIcon />} variant="contained" />
                            <CommonButton color="error" text={<ClearIcon />} variant="contained" />
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1.5, borderRadius: '5px', bgcolor: '#dee8ff', display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited to become family.
                        </Box>
                        <Box sx={{ display:'flex', gap: '5px', '& button': {minWidth: '30px', height: '30px', padding: '1px', fontSize: '10px'}, '& button svg': {width: '20px', height: '20px'}}}>
                            <CommonButton color="success" text={<DoneIcon />} variant="contained" />
                            <CommonButton color="error" text={<ClearIcon />} variant="contained" />
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1.5, borderRadius: '5px', bgcolor: '#dee8ff', display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited to become family.
                        </Box>
                        <Box sx={{ display:'flex', gap: '5px', '& button': {minWidth: '30px', height: '30px', padding: '1px', fontSize: '10px'}, '& button svg': {width: '20px', height: '20px'}}}>
                            <CommonButton color="success" text={<DoneIcon />} variant="contained" />
                            <CommonButton color="error" text={<ClearIcon />} variant="contained" />
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1.5, borderRadius: '5px', bgcolor: '#dee8ff', display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited to become family.
                        </Box>
                        <Box sx={{ display:'flex', gap: '5px', '& button': {minWidth: '30px', height: '30px', padding: '1px', fontSize: '10px'}, '& button svg': {width: '20px', height: '20px'}}}>
                            <CommonButton color="success" text={<DoneIcon />} variant="contained" />
                            <CommonButton color="error" text={<ClearIcon />} variant="contained" />
                        </Box>
                    </Box>
                    <Box sx={{ fontSize: 13, lineHeight: 1.4, my: 1, p: 1.5, borderRadius: '5px', bgcolor: '#dee8ff', display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box>
                            <Box component="span" sx={{ color: '#F8991F' }}>You </Box> have invited to become family.
                        </Box>
                        <Box sx={{ display:'flex', gap: '5px', '& button': {minWidth: '30px', height: '30px', padding: '1px', fontSize: '10px'}, '& button svg': {width: '20px', height: '20px'}}}>
                            <CommonButton color="success" text={<DoneIcon />} variant="contained" />
                            <CommonButton color="error" text={<ClearIcon />} variant="contained" />
                        </Box>
                    </Box>
                    
                    
                </Card>
            </Box>
            }
        </ContentSection>
    )
}
export default Invitations
