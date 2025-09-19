
import { CardMedia, Stack } from "@mui/material";
import map from "../../../../assets/images/main/map.png"
import { Info } from "./Info";
import type { KeyProps } from "../../../../assets/types/keyProps";


const MapImage = (_ : KeyProps) => {
    return <CardMedia 
        sx={{ objectFit : 'contain', width : '40%' }}
        component='img'
        image={map}
        // width='20px'
        />
    
    
}





export function ContactsAndMap() {
    return (
        <Stack
            direction='row'
            alignItems='center'
            maxWidth='100%'
            padding='5%'
            margin='5%'
            spacing='10%'
            alignSelf='center'
        >
            <MapImage key='0' />

            <Info key='1' />  
        </Stack>
    )
}