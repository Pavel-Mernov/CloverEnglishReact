import { CardMedia, type SxProps } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";
import type { SizeType } from "../../../assets/types/sizeType";

type Props = KeyProps & 
        { 
            image : string, 
            width ?: string | number | SizeType,
            height ?: string | number | SizeType, 
            // maxWidth ?: string | number,
            sx ?: SxProps,
        }

const isMobile = (window.screen.width < 600)

export function ImgMedia(props : Props) {

    const { 
        image, 
        width, 
        height, 
        sx 
    } = props

    const defaultWidth = isMobile ? '90%' : '40%'

    return (
                    <CardMedia 
                        
                        component='img'
                        src={ image }
                        sx={ { 
                            ...sx, 
                            width : width ?? defaultWidth,
                            height : height ?? 'auto',

                            alignSelf : 'center'
                        } }
                    />
    )
}