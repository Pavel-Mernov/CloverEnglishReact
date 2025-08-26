import { Typography } from "@mui/material";
import type { OwnProps } from "../../../../assets/types/OwnProps";
import type { TypographyProps } from "@mui/system";
import type { SiteRoute } from "../../../../assets/types/route";
import { RoseTextBlock } from "../RoseTextBlock";
import { LocalLink } from "../../Link/LocalLink";
import { StandardTextBlock } from "../StandardTextBlock";
import { Colors } from "../../../../assets/colors/Colors";
import type { KeyProps } from "../../../../assets/types/keyProps";
import { ImgMedia } from "../../ArticleContentLink/ImgMedia";



type TextProps = KeyProps & {
    
    fontWeight ?: string,
    fontSize ?: string,
    variant ?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1',
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
    component ?: any,
} | {
    bold : string,
    component ?: any,
})

type ImageItemProps = {
    imageSource : string,
    width ?: string | number
}

type MultiTextType = {
    multitext : MultitextItem[],
} | {
    type : 'multitext',
    text : MultitextItem[],
}

export const Break = { 
                        type : 'break' as const,
                    } as const

type BreakType = typeof Break

export type MultitextItem = 
        string | 
        RoseTextProps | 
        BoldTextProps | 
        LinkProps | 
        MultiTextType |
        ImageItemProps |
        ListItemProps | 
        BreakType

type SpecProps = { children : MultitextItem[] }

type MultiTextProps = OwnProps<TypographyProps, SpecProps, 'children'>

export function TextItem(props :{ item : MultitextItem }) {
    const { item } = props

    if (typeof item === 'object') {
        if ('roseText' in item || 'type' in item && item.type == 'roseText') {
            const text = ('roseText' in item) ? item.roseText : item.text

            return <RoseTextBlock 
                text={ text } 
                component={ item.component }
                variant={ item.variant ? item.variant : 'h3' } 
                fontWeight={ item.fontWeight ? item.fontWeight : 'bold' } 
                fontSize={ item.fontSize ? item.fontSize : '25px' } 
            
            />
        }
        else if ('bold' in item || 'type' in item && item.type == 'bold') {
            return <StandardTextBlock 
                text={ 'bold' in item ? item.bold : item.text } 
                component={ item.component }
                variant={ item.variant ? item.variant : 'h3' } 
                fontWeight='bold' 
                // fontSize={ item.fontSize ? item.fontSize : '25px' } 
            
            />
        }
        else if ('link' in item || 'type' in item && item.type == 'link') {
            return <LocalLink 
                    to={ 'to' in item ? item.to : undefined } 
                    text={ 'link' in item ? item.link : item.text } 
                    
                    variant={ ('variant' in item && item.variant) ? item.variant : 'h5' }
                    color={ Colors.DarkGreen }
                    fontSize={ ('fontSize' in item && item.fontSize) ? item.fontSize : '30px' } 
                />
        }
        else if ('listItem' in item || 'type' in item && item.type == 'listItem') {
            return <Typography 
                component='li'
                variant={ item.variant ? item.variant : 'h5' } 
                fontWeight={ item.fontWeight } 
                fontSize={ item.fontSize ? item.fontSize : '25px' }
                >
                    { 'text' in item ? item.text : item.listItem }
                </Typography>
        }
        else if ('multitext' in item || 'type' in item && item.type == 'multitext') {
            return <MultiTextBlock children={ 'multitext' in item ? item.multitext : item.text } />
        }
        else if ('imageSource' in item) {
            return <ImgMedia image={ item.imageSource } />
        }
        else if ('type' in item && item.type == 'break') {
            return <Typography component='br' />
        }
    }
    return <StandardTextBlock alignSelf='start' component="span" text={ item } />
}

export function MultiTextBlock(props : MultiTextProps) {
    const { children } = props

    return (
        <Typography component='span' display='inline'>
            {
                children.map( (item, idx) =>
                    <TextItem key={ idx } item={ item } />
                )
            }
        </Typography>
    )
}