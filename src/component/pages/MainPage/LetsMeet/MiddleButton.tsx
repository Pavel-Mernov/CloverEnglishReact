import { CardMedia } from "@mui/material";
import type { SiteRoute } from "../../../../assets/types/route";
import { ColorButton } from "../../../elements/ColorButton/ColorButton";

interface Props {
    link : SiteRoute,
    imageSource : string, 
}

function Image(props : { source : string }) {

    return (
        <CardMedia
            component='img'
            src={ props.source }
        />
    )
}

// const width = ( window.screen.width < 800 ) ? '60%' : 'auto'



export function MiddleButton(props : Props) {
    const { link, imageSource } = props

    return (
        <ColorButton
            padding='10%'
            onClick={link}
            // variant="h5"
            // width={ width }
            content={Image({ source : imageSource })}
            // backgroundColor={Colors.RoseDark}
            // borderRadius='20vh'
            // fontWeight='bold'
            // color={Colors.White}
        />
    )
}