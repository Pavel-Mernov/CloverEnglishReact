import { TextBlock, type TextBlockProps } from "./TextBlock";

const defaultFontSize = '25px'

export function StandardTextBlock(props : Omit<TextBlockProps, 'color'>) {
    return <TextBlock 
        text={props.text} 
        fontSize={ props.fontSize ? props.fontSize : defaultFontSize }
        component={ props.component ? props.component : 'p' }
        fontWeight={ props.fontWeight } 
        alignSelf={ props.alignSelf }
        sx={ props.sx }
        />
}