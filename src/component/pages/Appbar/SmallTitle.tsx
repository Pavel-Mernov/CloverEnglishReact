import { CardMedia, Stack, Typography, type SxProps } from "@mui/material";
import { useState, type FC } from "react";

import logoMain from "../../../assets/images/logo/logomain.png"
import { useNavigate } from "react-router-dom";
import { LocalLink } from "../../elements/Link/LocalLink";
import { ContactButtons } from "./ContactButtons";

const displayDirection = 
    'row'
    // (window.screen.width >= 800) ? 'row' : 'column'

const isMobile = (window.screen.width < 800)

type Props = {
    onClickMenu : () => void,
}

export const SmallTitle : FC<Props> = ({ onClickMenu }) => {
    const navigate = useNavigate();
    
    const [isMouseEntered, setMouseEntered] = useState(false)

    const ImageStyle : SxProps = 
    { 
        width: isMobile ? '10%' : '10%',
        objectFit: "contain" 
    }

    const fontSize = isMobile ? '20px' : '200'

    const variant = isMobile ? 'h5' : 'h2'

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
            spacing={ isMobile ? '3%' : '2%' } 
            
            width='100%'

            alignSelf={ isMobile ? 'center' : 
                'auto' }
            >
                <CardMedia 
                        sx={ImageStyle}
                        component="img"
                        
                        height="100px"
                        image={logoMain}/>

                <Typography 
                    variant={ variant }
                    sx={textSx}
                    fontFamily='"Backwards Sans Regular Bold", sans-serif'
                    onMouseEnter={ () => setMouseEntered(true) }
                    onMouseLeave={ () => setMouseEntered(false) }
                    >
                        АНГЛИЙСКИЙ КЛУБ "КЛЕВЕР"
                </Typography>

                {
                    isMobile && 

                    <LocalLink 
                        variant="h2"
                        fontSize='40px'
                        text='☰'
                        to={ onClickMenu }             
                    />
                }

                {
                    (!isMobile) && <ContactButtons />
                }
        </Stack>

        
    )
}