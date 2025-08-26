import { TextBlock, type TextBlockProps } from "./TextBlock";

const fontSize = '25px'

export function StandardTextBlock(props : Omit<TextBlockProps, 'color' | 'fontSize'>) {
    return <TextBlock 
        text={props.text} 
        fontSize={ fontSize }
        component={ props.component ? props.component : 'p' }
        fontWeight={ props.fontWeight } 
        sx={ props.sx }
        />
}