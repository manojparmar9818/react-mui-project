import React from 'react'
import { Box, TextField } from '@mui/material'
const formData = [
    {
        id: 'first__name',
        label: 'First Name',
        defaultValue: "John",
        type: "text"
    },
    {
        id: 'phone',
        label: 'Phone',
        defaultValue: "+11-9818456789",
        type: "number"
    },
    {
        id: 'last__name',
        label: 'Last Name',
        defaultValue: "Smith",
        type: "text"
    },
    {
        id: 'graduation__year',
        label: 'Graduation Year',
        defaultValue: "1990",
        type: "number"
    },
    {
        id: 'email',
        label: 'Email',
        defaultValue: "email@johnsmith.com",
        type: "text"
    },
    {
        id: 'dob',
        label: 'Date of Birth',
        defaultValue: "1990",
        type: "date"
    }
]
function UserInputs() {
    return (
        <Box
            component="form"
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 3,
                marginTop: '10px',
                borderLeft: '1px solid #ddd',
                paddingLeft: {xs: 0, sm: 0, md:'1rem', lg:'2rem'},    
                '& > div': {
                    flex: '40%'
                },
                '& .MuiTextField-root': { width: '100%' }                
            }}
            noValidate
            autoComplete="off"
        >
            { formData.map((item) =>
            <div key={item.id}>
                <TextField
                    label={item.label}
                    id={item.id}
                    size="small"
                    type={item.type}
                    defaultValue={item.defaultValue}
                    sx={{
                        '& .MuiFormLabel-root': {fontSize: '.85rem', bgcolor: '#fff'},
                        '& .MuiInputBase-root': {fontSize: '.85rem', bgcolor: '#fff'}
                    }}
                />
            </div>
            )}
            
        </Box>
    )
}

export default UserInputs