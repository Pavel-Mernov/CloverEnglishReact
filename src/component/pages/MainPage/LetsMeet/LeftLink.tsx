import { CardMedia, Stack, Typography, type SxProps } from "@mui/material";
import { Colors } from "../../../../assets/colors/Colors";
import photo from "../../../../assets/images/main/letsmeet3.jpg"
import type { Key } from "react";
import { ColorButton } from "../../../elements/ColorButton/ColorButton";

const isMobile = (window.screen.width < 800)

const Photo = () => {
    return (
        <CardMedia 
            sx={{ 
                'objectFit' : 'contain', 
                width : isMobile ? '65%' : undefined,
                
            }}
            component="img"
            
            
            
            image={photo}
        /> 
    )
}

const UpperButton = (_ : { key ?: Key }) => { 
    const sxProps : SxProps = {
        paddingInline : '10%',
        paddingBlock : '1%',
        alignItems : 'center',
        alignContent : 'center',
        alignSelf : 'center',
        border : '2px solid #777777',
        borderRadius : '50vh'
    }

    

    return <Stack
        // variant = 'outlined'
        sx = {sxProps}
        color={Colors.Gray}
    >
        <Typography variant="h5" 
            fontSize='150%' 
            key='0'
            textAlign='center'
            alignSelf='center'
            alignItems='center'
            justifyContent='space-between'
            fontWeight='bold'
            alignContent='center'
            >
            Давайте 
            
            <br />

            знакомиться
        </Typography>

       
    </Stack>
}

export function LeftLink() {
    const maxWidth = (window.screen.width < 800) ? '100%' : '20%'

    return (
                    <ColorButton 
                        key='0'
                        maxWidth={ maxWidth }
                        height={ isMobile ? 'auto' : '15%' }
                        onClick="/letsmeet"
                        backgroundColor={Colors.White}
                        borderRadius='3vh'
                        spacing='0'
                        padding={ isMobile ? '8%' : '2%' }
                        paddingInline={ isMobile ? 'auto' : '5%' }
                        paddingTop={ isMobile ? '5%' : '2%' }
                        content={[
                            <UpperButton key='0' />,

                            <Photo key='1' />
                        ]}
                    />    
    )
}