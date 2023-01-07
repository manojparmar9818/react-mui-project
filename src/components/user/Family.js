import { Avatar, Box, Card, IconButton, Stack } from '@mui/material'
import React from 'react'
import ContentSection from './ContentSection'
import Title from './Title'
import SearchIcon from '@mui/icons-material/Search';
import CommonButton from '../CommonButton';
import PeopleIcon from '@mui/icons-material/People';

function Family() {
    return (
        <Box>
            <ContentSection>
                <Stack direction="row" justifyContent="space-between">
                    <Title text="Family" />
                    <Box sx={{display: 'flex', gap: 1}}>
                        <IconButton size="small" aria-label="search" color="inherit">
                            <SearchIcon />
                        </IconButton>
                        <CommonButton variant="contained" text="Add new" color="success" size="small" />
                    </Box>
                </Stack>
                <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#f8991f', color: '#fff', boxShadow: 'none', p: 1.5, marginTop: 3, borderRadius: 1.25 }}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box sx={{ fontSize: 14 }}>User Name</Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <Box component="span" sx={{background: '#fff', color: '#333', fontSize: 11, p: "2px 10px", textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 1, minWidth: 50, height: 24}}>ADMIN</Box>
                        <Box sx={{bgcolor: '#fff', height: 24, color: '#232e3e', p: "2px 8px", display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 1, '& svg':{fontSize: 14, width: 14, height: 14}}}><PeopleIcon /></Box>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#dee8ff', color: '#232e3e', boxShadow: 'none', p: 1.5, marginTop: 1, borderRadius: 1.25 }}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box sx={{ fontSize: 14 }}>User Name</Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <Box component="span" sx={{background: '#cad7f5', color: '#232e3e', fontSize: 11, p: "2px 10px", textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 1, minWidth: 50, height: 24}}>MEMBER</Box>
                    </Box>
                </Card>
                <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#dee8ff', color: '#232e3e', boxShadow: 'none', p: 1.5, marginTop: 1, borderRadius: 1.25 }}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
                        <Avatar
                            alt="User"
                            src="https://i.pinimg.com/originals/0a/dd/87/0add874e1ea0676c4365b2dd7ddd32e3.jpg"
                            sx={{ width: 40, height: 40 }}
                        />
                        <Box sx={{ fontSize: 14 }}>User Name</Box>
                    </Box>
                    <Box sx={{display: 'flex', gap: 1}}>
                        <Box component="span" sx={{background: '#cad7f5', color: '#232e3e', fontSize: 11, p: "2px 10px", textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 1, minWidth: 50, height: 24}}>MEMBER</Box>
                    </Box>
                </Card>
            </ContentSection>
        </Box>
    )
}
export default Family