import { CardMedia, Stack, Typography, type SxProps } from "@mui/material";
import { Colors } from "../../../../assets/colors/Colors";
import photo from "../../../../assets/images/main/letsmeet3.jpg"
import type { Key } from "react";
import { ColorButton } from "../../../elements/ColorButton/ColorButton";


const Photo = () => {
    return (
        <CardMedia 
            sx={{ 'objectFit' : 'contain' }}
            component="img"
            
            
            
            image={photo}
        /> 
    )
}

const UpperButton = (_ : { key ?: Key }) => { 
    const sxProps : SxProps = {
        paddingInline : '10%',
        paddingBlock : '5%',
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
            fontSize='100%' 
            key='0'
            alignSelf='center'
            alignItems='center'
            justifyContent='space-between'
            fontWeight='bold'
            alignContent='center'
            >
            Давайте 
            
            знакомиться
        </Typography>

       
    </Stack>
}

export function LeftLink() {
    return (
                    <ColorButton 
                        key='0'
                        maxWidth='15%'
                        link="/letsmeet"
                        backgroundColor={Colors.White}
                        borderRadius='3vh'
                        spacing='2%'
                        padding='1%'
                        paddingInline='3%'
                        paddingTop='2%'
                        content={[
                            <UpperButton key='0' />,

                            <Photo key='1' />
                        ]}
                    />    
    )
}