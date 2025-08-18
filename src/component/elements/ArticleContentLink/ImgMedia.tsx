import { CardMedia } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";

export function ImgMedia(props : KeyProps & { image ?: string }) {

    const { image } = props

    return (
                    <CardMedia 
                        
                        component='img'
                        src={ image }
                        width='40%'
                        sx={{ objectFit : 'contain' }}
                    />
    )
}