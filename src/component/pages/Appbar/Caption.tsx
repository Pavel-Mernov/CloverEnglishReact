import { createTheme, ThemeProvider, Typography, type SxProps } from "@mui/material";
import { useState, type FC } from "react";

interface Props {
    text : string
}

export const Caption : FC<Props> = ({ text }) => {
    const [isMouseEntered, setMouseEntered] = useState(false);

    const theme = createTheme({
        palette:  {
            primary : {main: '#0000AF'},
        }
    })

    const captionProps : SxProps = {
        fontSize : '25px',
        transform : isMouseEntered ? 'scale(1.03)' : 'scale(1.0)'
    }

    

    return (

        <ThemeProvider theme={theme}>
            <Typography
                sx={captionProps}
                color="primary" 
                component="div"
                fontSize='15px'
                onMouseEnter={() => setMouseEntered(true)}
                onMouseLeave={() => setMouseEntered(false)}
                >

                {text}
            </Typography>
        </ThemeProvider>
        
    );
}