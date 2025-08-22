import { createTheme, ThemeProvider, Typography, type SxProps, type TypographyVariant } from "@mui/material";
import { useState, type FC } from "react";

interface Props {
    text : string,
    variant ?: TypographyVariant, 
    fontSize ?: string | number,
}

export const Caption : FC<Props> = ({ text, variant, fontSize }) => {
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
                color={ "primary" } 
                component="div"
                variant={ variant }
                fontSize={ fontSize }
                // display='inline'
                onMouseEnter={() => setMouseEntered(true)}
                onMouseLeave={() => setMouseEntered(false)}
                >

                {text}
            </Typography>
        </ThemeProvider>
        
    );
}