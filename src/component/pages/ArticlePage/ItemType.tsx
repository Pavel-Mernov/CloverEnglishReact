import type { MultitextItem } from "../../elements/TextBlock/MultitextBlock";

type TextItemType =  {
    type : 'text',
    text : string,
} | {
    text : string,
}

type RoseTextItemType = {
    type : 'roseText',
    text : string,
} | {
    roseText : string,
}

type BoldTextItemType = {
    type : 'boldText',
    text : string,
} | {
    boldText : string,
}

type MultiTextItemType = {
    type : 'multitext',
    text : MultitextItem[]
} | {
    multitext : MultitextItem[]
}

type ImageItemType = {
    type : 'image',
    src : string,
    width ?: string,
} | {
    imageSource : string,
    width ?: string,
}

export type ItemType = 
    TextItemType | 
    RoseTextItemType |
    BoldTextItemType |  
    MultiTextItemType | 
    ImageItemType

export function normalize( item : ItemType ) {
    if ('type' in item) {
        return item;
    }
    if ('text' in item) {
        return {
            type : 'text' as const,
            text : item.text
        } as const
    }
    if ('roseText' in item) {
        return {
            type : 'roseText' as const,
            text : item.roseText,
        } as const
    }
    if ('boldText' in item) {
        return {
            type : 'boldText' as const,
            text : item.boldText,
        } as const
    }
    if ('multitext' in item) {
        return {
            type : 'multitext' as const,
            text : item.multitext
        } as const
    }
    if ('imageSource' in item) {
        return {
            type : 'image' as const,
            src : item.imageSource,
            width : item.width,
        } as const
    }

    return { type : null }
}