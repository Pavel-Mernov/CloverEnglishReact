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

const isMobile = (window.screen.width < 600)

export function ImgMedia(props : Props) {

    const { image, width, height, sx } = props

    const defaultWidth = isMobile ? '90%' : '40%'

    return (
                    <CardMedia 
                        height={ height }
                        
                        component='img'
                        src={ image }
                        width={ width ? width : defaultWidth }
                        sx={ { 
                            ...sx, 
                            alignSelf : 'center'
                        } }
                    />
    )
}