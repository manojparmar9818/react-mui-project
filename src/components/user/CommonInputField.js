import React from 'react'
import { FormControl, FormHelperText, FormLabel, styled, Input, InputLabel, InputBase } from '@mui/material'
const CustomInputField = styled(InputBase)(({ theme }) => ({
    width: '70%',
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        border: '1px solid #ced4da',
        fontSize: 14,
        width: 'auto',
        padding: '5px 12px',
        // transition: theme.transitions.create([
        //     'border-color',
        //     'background-color',
        //     'box-shadow',
        // ]),
    },
}));
const CustomLabel = styled(InputLabel)({
    position: 'static', transform: 'none', fontSize: 14, overflow: 'unset', maxWidth: '100%', width: '30%'
})
function CommonInputField({ value, id, name, label, helperText, placeholder, type, onChange, onClick, defaultValue, children }) {
    return (
        <FormControl sx={{display: 'flex', flexDirection: 'row', gap: 1, alignItems: 'center', '& :nth-of-child(even) > label': {width: '50%'}}}>
            <CustomLabel shrink htmlFor="my-input">{label}:</CustomLabel>
            <CustomInputField id={id} name={name} value={value} defaultValue={defaultValue} type={type} placeholder={placeholder} />
            {/* <FormHelperText id={id}>{helperText}</FormHelperText> */}
        </FormControl>
    )
}

export default CommonInputField