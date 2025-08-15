import { Colors } from "../../../../assets/colors/Colors";
import type { SiteRoute } from "../../../../assets/types/route";
import { ColorButton } from "../../../elements/ColorButton";

interface Props {
    link : SiteRoute,
    caption : string, 
}

export function MiddleButton(props : Props) {
    const { link, caption } = props

    return (
        <ColorButton
            padding='10%'
            link={link}
            variant="h5"
            content={caption}
            backgroundColor={Colors.RoseDark}
            borderRadius='20vh'
            fontWeight='bold'
            color={Colors.White}
        />
    )
}