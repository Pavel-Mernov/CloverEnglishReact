import { TextBlock, type TextBlockProps } from "./TextBlock";

const defaultFontSize = (window.screen.width >= 800) ? '24px' : '22px'

export function StandardTextBlock(props : Omit<TextBlockProps, 'color'>) {
    return <TextBlock 
        text={props.text} 
        fontSize={ props.fontSize ?? defaultFontSize }
        component={ props.component ?? 'p' }
        fontWeight={ props.fontWeight } 
        fontFamily={ 
            props.fontFamily 
            // ?? OpenSansRegular
        }
        alignSelf={ props.alignSelf }
        sx={ props.sx }
        />
}