import { ColorButton, type ColorButtonProps } from "./ColorButton"

type RoundedProps = Omit<ColorButtonProps, 'borderRadius' | 'paddingBlock'>

export function RoundedButton(props : RoundedProps) {
    const { 
        color, 
        backgroundColor, 
        content, 
        link, 
        width, 
        height, 
        fontSize, 
        fontWeight, 
        margin, 
        marginTop,
        variant, 
        padding,
        paddingTop,
        paddingInline,
        spacing,
        upperCase,
    } = props

    return ColorButton({
        color: color,
        backgroundColor: backgroundColor,
        content: content,
        link: link,
        width : width,
        height : height,
        fontSize : fontSize,
        fontWeight : fontWeight,
        borderRadius : '50vh',
        margin : margin,
        marginTop : marginTop,
        paddingBlock : '2%',
        paddingTop : paddingTop,
        paddingInline : paddingInline,
        spacing : spacing,
        padding : padding,
        variant : variant,
        upperCase : upperCase,
    })
}