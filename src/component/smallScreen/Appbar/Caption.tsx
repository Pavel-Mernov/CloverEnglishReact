import { createTheme, ThemeProvider, Typography, type SxProps } from "@mui/material";
import type { FC } from "react";

interface Props {
    text : string
}

export const Caption : FC<Props> = ({ text }) => {

    const theme = createTheme({
        palette:  {
            primary : {main: '#0000AF'},
        }
    })

    const captionProps : SxProps = {
        fontSize : '25px'
    }

    return (

        <ThemeProvider theme={theme}>
            <Typography
                sx={captionProps}
                color="primary" 
                component="div">

                {text}
            </Typography>
        </ThemeProvider>
        
    );
}