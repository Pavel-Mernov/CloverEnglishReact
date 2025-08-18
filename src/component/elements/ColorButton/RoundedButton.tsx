import { ColorButton, type ColorButtonProps } from "./ColorButton"

type ExcludedProps = 'borderRadius' | 
    'paddingBlock' | 
    'variant' | 
    'padding' | 
    'paddingInline' | 
    'upperCase' |
    'spacing' |
    'fontWeight'

type RoundedProps = Omit<ColorButtonProps, ExcludedProps>

export function RoundedButton(props : RoundedProps) {
    const { 
        color, 
        backgroundColor, 
        content, 
        link, 
        width, 
        height, 
        fontSize, 
        // fontWeight, 
        margin, 
        marginTop,
        // variant, 
        // padding,
        // paddingTop,
        // paddingInline,
        // spacing,
        // upperCase,
    } = props

    return ColorButton({
        
        color: color,
        backgroundColor: backgroundColor,
        content: content,
        link: link,
        width : width,
        height : height,
        fontSize : fontSize,
        fontWeight : 'bold',
        borderRadius : '50vh',
        margin : margin,
        marginTop : marginTop,
        paddingBlock : '2%',
        // paddingTop : paddingTop,
        paddingInline : '5%',
        // spacing : spacing,
        variant : 'h1',
        upperCase : true,
    })
}