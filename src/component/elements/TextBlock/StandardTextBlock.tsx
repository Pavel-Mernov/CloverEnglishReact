import { TextBlock, type TextBlockProps } from "./TextBlock";


export function StandardTextBlock(props : Omit<TextBlockProps, 'color' | 'fontSize'>) {
    return <TextBlock 
        text={props.text} 
        fontSize='25px' 
        sx={ props.sx }
        />
}