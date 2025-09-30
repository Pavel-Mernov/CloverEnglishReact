
import { CardMedia, Stack } from "@mui/material";
import map from "../../../../assets/images/main/map.png"
import { Info } from "./Info";
import type { KeyProps } from "../../../../assets/types/keyProps";


const MapImage = (_ : KeyProps) => {
    const width = (window.screen.width >= 800) ? '45%' : '100%'

    // const height = (window.screen.width >= 800) ? '20%' : 'auto'

    return <CardMedia 
        sx={{ 
            objectFit : 'contain', 
            width : width, 
            // height : height 
        }}
        component='img'
        image={map}
        // width='20px'
        />
    
    
}



const mainDirection = ( window.screen.width >= 800 ) ? 'row' : 'column'

const width = (window.screen.width <= 800) ? '100%' : 'auto'

const padding = (window.screen.width < 800) ? '0' : '2%'

const spacing = (window.screen.width < 800) ? '0' : '5%'

export function ContactsAndMap() {
    return (
        <Stack
            direction={ mainDirection }
            alignItems='center'
            maxWidth='100%'
            padding={ padding }
            width={ width }
            marginTop='5%'
            marginBottom='5%'
            spacing={ spacing }
            alignSelf='center'
        >
            <MapImage key='0' />

            <Info key='1' />  
        </Stack>
    )
}