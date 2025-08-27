import { CardMedia, type SxProps } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";

type Props = KeyProps & 
        { 
            image : string, 
            width ?: string | number,
            height ?: string | number, 
            // maxWidth ?: string | number,
            sx ?: SxProps,
        }

export function ImgMedia(props : Props) {

    const { image, width, height, sx } = props

    return (
                    <CardMedia 
                        height={ height }
                        
                        component='img'
                        src={ image }
                        width={ width ? width : '40%' }
                        sx={ sx }
                    />
    )
}