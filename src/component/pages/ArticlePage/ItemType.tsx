import type { MultitextItem } from "../../elements/TextBlock/MultitextBlock";

interface TextItemType {
    type : 'text',
    text : string,
}

interface RoseTextItemType {
    type : 'roseText',
    text : string,
}

interface MultiTextItemType {
    type : 'multitext',
    text : MultitextItem[]
}

interface ImageItemType {
    type : 'image',
    src : string,
    width ?: string,
}

export type ItemType = TextItemType | RoseTextItemType | MultiTextItemType | ImageItemType