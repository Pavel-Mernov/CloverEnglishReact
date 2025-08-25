import { Typography } from "@mui/material";
import type { OwnProps } from "../../../assets/types/OwnProps";
import type { TypographyProps } from "@mui/system";
import type { SiteRoute } from "../../../assets/types/route";
import { RoseTextBlock } from "./RoseTextBlock";
import { LocalLink } from "../Link/LocalLink";
import { StandardTextBlock } from "./StandardTextBlock";
import { Colors } from "../../../assets/colors/Colors";

interface TextProps {
    text : string,
    fontWeight ?: string,
    fontSize ?: string,
    variant ?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'body1',
}

interface RoseTextProps extends TextProps {
    type : 'roseText',
}

interface LinkProps extends TextProps {
    type : 'link',
    to ?: SiteRoute,
}

interface ListItemProps extends TextProps {
    type : 'listItem',
}

interface BoldTextProps extends TextProps {
    type : 'bold',
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
        ListItemProps | 
        BreakType

type SpecProps = { children : MultitextItem[] }

type MultiTextProps = OwnProps<TypographyProps, SpecProps, 'children'>

function TextItem(props :{ item : MultitextItem }) {
    const { item } = props

    if (typeof item === 'object') {
        if (item.type == 'roseText') {
            return <RoseTextBlock 
                text={ item.text } 
                variant={ item.variant ? item.variant : 'h3' } 
                fontWeight={ item.fontWeight ? item.fontWeight : 'bold' } 
                fontSize={ item.fontSize ? item.fontSize : '25px' } 
            
            />
        }
        else if (item.type == 'bold') {
            return <StandardTextBlock 
                text={ item.text } 
                variant={ item.variant ? item.variant : 'h3' } 
                fontWeight='bold' 
                // fontSize={ item.fontSize ? item.fontSize : '25px' } 
            
            />
        }
        else if (item.type == 'link') {
            return <LocalLink 
                    to={ item.to } 
                    text={ item.text } 
                    variant={ item.variant ? item.variant : 'h5' }
                    color={ Colors.DarkGreen }
                    fontSize={ item.fontSize ? item.fontSize : '30px' } 
                />
        }
        else if (item.type == 'break') {
            return <Typography component='br' />
        }
        else if (item.type == 'listItem') {
            return <Typography 
                component='li'
                variant={ item.variant ? item.variant : 'h5' } 
                fontWeight={ item.fontWeight } 
                fontSize={ item.fontSize ? item.fontSize : '25px' }
                >
                    { item.text }
                </Typography>
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