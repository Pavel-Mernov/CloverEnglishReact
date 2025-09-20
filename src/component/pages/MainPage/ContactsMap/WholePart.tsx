
import { CardMedia, Stack } from "@mui/material";
import map from "../../../../assets/images/main/map.png"
import { Info } from "./Info";
import type { KeyProps } from "../../../../assets/types/keyProps";


const MapImage = (_ : KeyProps) => {
    const width = (window.screen.width >= 800) ? '40%' : '100%'

    return <CardMedia 
        sx={{ objectFit : 'contain', width : width }}
        component='img'
        image={map}
        // width='20px'
        />
    
    
}



const mainDirection = ( window.screen.width >= 800 ) ? 'row' : 'column'

const width = (window.screen.width <= 800) ? '100%' : 'auto'

export function ContactsAndMap() {
    return (
        <Stack
            direction={ mainDirection }
            alignItems='center'
            maxWidth='100%'
            padding='5%'
            width={ width }
            margin='5%'
            spacing='10%'
            alignSelf='center'
        >
            <MapImage key='0' />

            <Info key='1' />  
        </Stack>
    )
}