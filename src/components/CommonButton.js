import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material';

function CommonButton({ text, color, width, size, variant, ...props }) {
    const theme = createTheme({
        palette: {
            primary: {
                main: '#232e3e'
            },
            secondary: {
                main: '#ddd'
            },
            white: {
                main: '#fff'
            }
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Button sx={{ textTransform: 'capitalize', padding: '10px 20px', lineHeight: 'inherit', maxHeight: 40, fontWeight: 500, fontSize: 12 }} variant={variant} color={color} width={width} size={size} {...props}>{text}</Button>
        </ThemeProvider>
    )
}

export default CommonButton