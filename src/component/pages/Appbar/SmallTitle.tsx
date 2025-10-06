import { CardMedia, Stack, Typography, type SxProps } from "@mui/material";
import { useState, type FC } from "react";

import logoMain from "../../../assets/images/logo/logomain.png"
import { useNavigate } from "react-router-dom";

const displayDirection = 
    'row'
    // (window.screen.width >= 800) ? 'row' : 'column'

export const SmallTitle : FC = () => {
    const navigate = useNavigate();
    
    const [isMouseEntered, setMouseEntered] = useState(false)

    const ImageStyle : SxProps = 
    { 
        width: '10%',
        objectFit: "contain" 
    }

    const fontSize = (window.screen.width < 800) ? '75' : '200'

    const textSx : SxProps = {
        transform : isMouseEntered ? 'scale(1.01)' : 'scale(1)',
        fontSize : fontSize
    }

    const navToMainPage = () => {
        navigate(`/`)
    }

    return (
        <Stack
            onClick={navToMainPage}
            direction={ displayDirection }
            alignItems='center'
            spacing='2%'
            alignSelf='start'
            >
                <CardMedia 
                        sx={ImageStyle}
                        component="img"
                        
                        height="100px"
                        image={logoMain}/>

                <Typography 
                    variant="h2"
                    sx={textSx}
                    fontFamily='"Backwards Sans Regular Bold", sans-serif'
                    onMouseEnter={ () => setMouseEntered(true) }
                    onMouseLeave={ () => setMouseEntered(false) }
                    >
                        АНГЛИЙСКИЙ КЛУБ "КЛЕВЕР"
                </Typography>
        </Stack>

        
    )
}