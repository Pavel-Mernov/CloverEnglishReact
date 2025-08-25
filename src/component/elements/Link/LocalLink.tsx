import { useState, type FC } from "react";
import type { SiteRoute } from "../../../assets/types/route";
import { createTheme, ThemeProvider, Typography, type SxProps, type TypographyVariant } from "@mui/material";
import { useNavigate } from "react-router-dom";


interface Props {
    text : string,
    to ?: SiteRoute,
    color ?: string,
    variant ?: TypographyVariant,
    fontSize ?: string | number,
    alignSelf ?: string,
}

export const LocalLink : FC<Props> = ({ text, to, variant, fontSize, color }) => {
    const [isMouseEntered, setMouseEntered] = useState(false);
    const navigate = useNavigate()

    
    const theme = createTheme({
        palette:  {
            primary : {main: color ? color : '#0000AF'},
        }
    })

    const captionProps : SxProps = {
        transform : isMouseEntered ? 'scale(1.03)' : 'scale(1.0)'
    }

    const onClick = !to ? () => { } :
      () => {
        navigate(to)
      }

    return (
        
        <ThemeProvider theme={theme}>
            <Typography

                sx={captionProps}
                color={ "primary" } 
                component="a"
                onClick={ onClick }
                variant={ variant }
                fontSize={ fontSize ? fontSize : '25px' }
                // display='inline'
                onMouseEnter={() => setMouseEntered(true)}
                onMouseLeave={() => setMouseEntered(false)}
                >

                {text}
            </Typography>
        </ThemeProvider>
        
    );
}