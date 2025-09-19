import { Colors } from "../../../assets/colors/Colors"
import { TextBlock, type TextBlockProps } from "./TextBlock"
import openStars from "../../../assets/fonts/OpenSans-Regular.ttf"

type Props = Omit<TextBlockProps, 'color'>

export const RoseTextBlock = (props : Props) => {
    return <TextBlock
        text = {props.text} 
        fontFamily={ 
            props.fontFamily ?? 
            
            openStars
        }
        color = {Colors.RoseDark}
        fontSize = { props.fontSize ?? '30px' }
        component={ props.component ?? 'span' }

        fontWeight = { props.fontWeight ?? 'bold' }
        upperCase
     />
}