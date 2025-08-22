import { Typography } from "@mui/material";
import type { OwnProps } from "../../../assets/types/OwnProps";
import type { TypographyProps } from "@mui/system";
import type { SiteRoute } from "../../../assets/types/route";
import { RoseTextBlock } from "./RoseTextBlock";
import { LocalLink } from "../Link/LocalLink";
import { StandardTextBlock } from "./StandardTextBlock";

interface RoseTextProps {
    type : 'roseText',
    text : string,
}

interface LinkProps {
    type : 'link',
    to ?: SiteRoute,
    text : string
}

export type MultitextItem = string | RoseTextProps | LinkProps

type SpecProps = { children : MultitextItem[] }

type MultiTextProps = OwnProps<TypographyProps, SpecProps, 'children'>

function TextItem(props :{ item : MultitextItem }) {
    const { item } = props

    if (typeof item === 'object') {
        if (item.type == 'roseText') {
            return <RoseTextBlock 
                text={ item.text } 
                variant="h5" 
                fontWeight='semiBold' 
                fontSize='30px' 
            
            />
        }
        else if (item.type == 'link') {
            return <LocalLink 
                    to={ item.to } 
                    caption={ item.text } 
                    variant="h5" 
                    fontSize='30px' 
                />
        }

        return <StandardTextBlock text={ item } />
    }
}

export function MultiTextBlock(props : MultiTextProps) {
    const { children } = props

    return (
        <Typography display='inline'>
            {
                children.map( item =>
                    <TextItem item={ item } />
                )
            }
        </Typography>
    )
}