import type { KeyProps } from "../../../../assets/types/keyProps"
import type { SiteRoute } from "../../../../assets/types/route"
import type { LocalTableProps } from "../../Table/types"

type TextProps = KeyProps & {

    fontWeight ?: string,
    fontSize ?: string,
    variant ?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1',
    alignSelf ?: string,
    uppercase ?: true,
}

type DefaultTextProps = TextProps & {
    type ?: 'text',
    color ?: string,
    text : string,
}

type RoseTextProps = TextProps & ({
    type : 'roseText',
    text : string,
    component ?: any,
} | {
    roseText : string,
    component ?: any,    
})

type LinkProps = TextProps & { to ?: SiteRoute } & ({
    type : 'link',
    text : string,
} | {
    link : string,
})

type ListItemProps = TextProps & ({
    type : 'listItem',
    text : string,
} | {
    listItem : string,
})

type BoldTextProps = TextProps & ({
    type : 'bold',
    text : string,
    color ?: string,
    component ?: any,
} | {
    bold : string,
    color ?: string,
    component ?: any,
})

type ImageItemProps = {
    imageSource : string,
    width ?: string | number
}

type ImageTextItemProps = {
    type ?: 'imagetext',
    image : string,
    text : MultitextItem[],
}

type MultiTextType = {
    multitext : MultitextItem[],
} | {
    type : 'multitext',
    text : MultitextItem[],
}

type ListProps = TextProps & {
    list : string[],
}

export const Break = { 
                        type : 'break' as const,
                    } as const

type BreakType = typeof Break

export type MultitextItem = 
        string | 
        DefaultTextProps |
        RoseTextProps | 
        BoldTextProps | 
        LinkProps | 
        ImageTextItemProps |
        MultiTextType |
        ImageItemProps |
        ListItemProps | 
        ListProps |
        LocalTableProps |
        BreakType