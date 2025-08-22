import { Colors } from "../../../assets/colors/Colors"
import { TextBlock, type TextBlockProps } from "./TextBlock"

type Props = Omit<TextBlockProps, 'color'>

export const RoseTextBlock = (props : Props) => {
    return <TextBlock
        text = {props.text} 
        color = {Colors.RoseDark}
        fontSize = { props.fontSize }
        fontFamily={ props.fontFamily }
        fontWeight = { props.fontWeight }
        upperCase
     />
}