import { TextBlock, type TextBlockProps } from "./TextBlock";

export function StandardTextBlock(props : Omit<TextBlockProps, 'fontSize'>) {
    return <TextBlock 
        text={props.text} 
        fontSize='26px' 
        />
}