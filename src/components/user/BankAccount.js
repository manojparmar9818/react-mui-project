import React from 'react'
import { Avatar, AvatarGroup, Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material'
import { deepOrange } from '@mui/material/colors';
import ContentSection from './ContentSection'
import Title from './Title'
function BankAccount() {
    return (
        <ContentSection>
            <Title text="Bank Account" />
            <Stack direction="row" justifyContent="space-between" spacing={3} sx={{ my: 1 }}>
                <Card
                    sx={{
                        boxShadow: 'none',
                        width: '50%',
                        // maxWidth: 250
                    }}
                >
                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                        <Box sx={{ position: 'relative', display: 'flex' }}>
                            <Box sx={{ bgcolor: 'rgba(212,1,1,1)', p: 1, width: 16, height: 16, borderRadius: 10 }} />
                            <Box sx={{ bgcolor: 'rgba(254,151,1,0.9)', p: 1, width: 16, height: 16, borderRadius: 10, marginLeft: '-10px' }} />
                        </Box>
                        <Box sx={{ display: 'grid' }}>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}><Box component="span" sx={{ fontSize: 16, letterSpacing: 1.5, lineHeight: 1, paddingRight: 1 }}>**** **** ****</Box> 7867</Typography>
                            <Typography variant="caption" sx={{ fontSize: 11, color: '#999', marginTop: -1 }}>Expires 09/27</Typography>
                        </Box>
                    </CardContent>
                </Card>
                <Card
                    sx={{
                        boxShadow: 'none',
                        width: '100%',
                        maxWidth: 250
                    }}
                >
                    <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 1 }}>
                        <Box sx={{ position: 'relative', display: 'flex' }}>
                            <Box sx={{ bgcolor: 'rgba(212,1,1,1)', p: 1, width: 16, height: 16, borderRadius: 10 }} />
                            <Box sx={{ bgcolor: 'rgba(254,151,1,0.9)', p: 1, width: 16, height: 16, borderRadius: 10, marginLeft: '-10px' }} />
                        </Box>
                        <Box sx={{ display: 'grid' }}>
                            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center' }}><Box component="span" sx={{ fontSize: 16, letterSpacing: 1.5, lineHeight: 1, paddingRight: 1 }}>**** **** ****</Box> 7867</Typography>
                            <Typography variant="caption" sx={{ fontSize: 11, color: '#999', marginTop: -1 }}>Expires 09/27</Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Stack>
        </ContentSection>
    )
}

export default BankAccount