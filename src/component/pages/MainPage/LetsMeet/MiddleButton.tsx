import { Colors } from "../../../../assets/colors/Colors";
import type { SiteRoute } from "../../../../assets/types/route";
import { ColorButton } from "../../../elements/ColorButton/ColorButton";

interface Props {
    link : SiteRoute,
    caption : string, 
}

const width = ( window.screen.width < 800 ) ? '60%' : 'auto'

export function MiddleButton(props : Props) {
    const { link, caption } = props

    return (
        <ColorButton
            padding='10%'
            onClick={link}
            variant="h5"
            width={ width }
            content={caption}
            backgroundColor={Colors.RoseDark}
            borderRadius='20vh'
            fontWeight='bold'
            color={Colors.White}
        />
    )
}