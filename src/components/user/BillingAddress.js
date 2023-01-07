import React, { useState } from 'react'

import { Avatar, AvatarGroup, Box, Card, CardContent, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'

import ContentSection from './ContentSection'
import Title from './Title'
import { orange } from '@mui/material/colors';
import CommonButton from '../CommonButton';

const formData = [
    {
        id: 'first__name',
        label: 'Last Name',
        defaultValue: "John"
    },
    {
        id: 'last__name',
        label: 'Last Name',
        defaultValue: "Smith"
    },
    {
        id: 'address__1',
        label: 'Address Line 1',
        defaultValue: "Address Line 1"
    },
    {
        id: 'address__2',
        label: 'Address Line 2',
        defaultValue: "Address Line 2"
    }
]
function BillingAddress() {
    const [checked, setChecked] = useState(true);
    const [province, setProvince] = useState('');
    const checkboxHandler = (e) => {
        setChecked(e.target.checked)
    }
    

  const provinceChangeHandler = (e) => {
    setProvince(e.target.value);
  };
    return (
        <ContentSection sx={{ marginTop: '20px' }}>
            <Title text="Billing Address" />
            <FormControlLabel
                value="sameAddress"
                sx={{ '& .MuiTypography-root': { fontSize: 13 } }}
                control={
                    <Checkbox
                        checked={checked}
                        onChange={checkboxHandler}
                        sx={{
                            color: orange[800],
                            '&.Mui-checked': {
                                color: orange[600],
                            },
                        }}
                    />
                }
                label="Same as Home Address"
                labelPlacement="end"
                inputprops={{ 'aria-label': 'controlled' }}
            />
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 3,
                    marginTop: '20px',
                    marginBottom: '30px',
                    '& > div': {
                        flex: '40%'
                    },
                    '& .MuiTextField-root': { width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                {formData.map((item) =>
                    <Box key={item.id}>
                        <TextField
                            label={item.label}
                            id={item.id}
                            size="small"
                            defaultValue={item.defaultValue}
                            sx={{
                                '& .MuiFormLabel-root': { fontSize: '.85rem', bgcolor: '#fff' },
                                '& .MuiInputBase-root': { fontSize: '.85rem', bgcolor: '#fff' }
                            }}
                        />
                    </Box>
                )}
                <Box sx={{ display: 'flex', gap: '10px' }}>
                    <TextField
                        label="Country:"
                        id="country"
                        size="small"
                        defaultValue="USA"
                        sx={{
                            '& .MuiFormLabel-root': { fontSize: '.85rem', bgcolor: '#fff' },
                            '& .MuiInputBase-root': { fontSize: '.85rem', bgcolor: '#fff' }
                        }}
                    />
                    <FormControl 
                        fullWidth size="small"
                        sx={{
                            '& .MuiFormLabel-root': { fontSize: '.85rem', bgcolor: '#fff' },
                            '& .MuiInputBase-root': { fontSize: '.85rem', bgcolor: '#fff' }
                        }}
                    >
                        <InputLabel id="demo-simple-select-label">State/Province/Region:</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={province}
                            label="State/Province/Region"
                            onChange={provinceChangeHandler}
                            sx={{
                                '& li': {
                                    fontSize: 14,
                                    minWidth: 100
                                },
                                '& li:hover': {
                                    bgcolor: '#f9a200',
                                    color: '#fff'
                                }
                            }}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="City:"
                        id="city"
                        size="small"
                        defaultValue="City"
                        sx={{
                            '& .MuiFormLabel-root': { fontSize: '.85rem', bgcolor: '#fff' },
                            '& .MuiInputBase-root': { fontSize: '.85rem', bgcolor: '#fff' }
                        }}
                    />
                    <TextField
                        label="Zip:"
                        id="zip"
                        size="small"
                        defaultValue="Zip"
                        sx={{
                            '& .MuiFormLabel-root': { fontSize: '.85rem', bgcolor: '#fff' },
                            '& .MuiInputBase-root': { fontSize: '.85rem', bgcolor: '#fff' }
                        }}
                    />
                </Box>                
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'end'}}>
                <CommonButton text="Edit Details" color="primary" variant="contained" />
            </Box>
        </ContentSection>
    )
}

export default BillingAddress