import { CardMedia } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";

export function ImgMedia(props : KeyProps & { image : string, width ?: string | number  }) {

    const { image, width } = props

    return (
                    <CardMedia 
                        
                        component='img'
                        src={ image }
                        width={ width ? width : '40%' }
                        sx={{ objectFit : 'contain' }}
                    />
    )
}