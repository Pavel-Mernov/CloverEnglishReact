import { CardMedia, Stack, Typography, type SxProps } from "@mui/material";
import type { FC } from "react";

import logoMain from "../../../assets/images/logo/logomain.png"
import { useNavigate } from "react-router-dom";

export const SmallTitle : FC = () => {
    const navigate = useNavigate();
    
    const ImageStyle : SxProps = 
    { 
        width: '10%',
        objectFit: "contain" 
    }

    const navToMainPage = () => {
        navigate(`/`)
    }

    return (
        <Stack
            onClick={navToMainPage}
            direction='row'
            alignItems='center'
            spacing='2%'
            >
                <CardMedia 
                        sx={ImageStyle}
                        component="img"
                        
                        // height="100px"
                        image={logoMain}/>

                <Typography variant="h2">АНГЛИЙСКИЙ КЛУБ "КЛЕВЕР"</Typography>
        </Stack>

        
    )
}