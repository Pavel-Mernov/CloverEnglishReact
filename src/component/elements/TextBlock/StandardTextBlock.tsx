import { TextBlock, type TextBlockProps } from "./TextBlock";

const fontSize = '25px'

export function StandardTextBlock(props : Omit<TextBlockProps, 'color' | 'fontSize'>) {
    return <TextBlock 
        text={props.text} 
        fontSize={ fontSize } 
        sx={ props.sx }
        />
}