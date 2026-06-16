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
        onClick, 
        width, 
        height, 
        fontSize, 
        // fontWeight, 
        margin, 
        marginTop,
        alignSelf,
        // variant, 
        // padding,
        // paddingTop,
        // paddingInline,
        // spacing,
        // upperCase,
    } = props

    return ColorButton({
        alignSelf : alignSelf,
        color,
        backgroundColor,
        content,
        onClick,
        width,
        height,
        fontSize,
        fontWeight : 'bold',
        borderRadius : '50vh',
        margin,
        marginTop,
        paddingBlock : '2%',
        // paddingTop : paddingTop,
        paddingInline : '5%',
        // spacing : spacing,
        variant : 'h1',
        upperCase : true,
    })
}