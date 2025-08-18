import type { CommonProps } from "@mui/material/OverridableComponent";

type ElementType = 'contentLink' 
            | 'image' 
            | 'text' 
            | 'roseText' 
            | 'textBlock' 
            | 'button' 
            | 'accordionItem'

export type Element = CommonProps & {
    type : ElementType
} & any

interface StoreType {
    english : Element[]
}

export const store : StoreType = {
    english : [
        {
            type : 'contentLink',
            caption : ''
        }
    ]
}