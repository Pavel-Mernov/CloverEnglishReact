
import type { OwnProps } from "../../../../assets/types/OwnProps";
import type { SxProps, TypographyProps } from "@mui/system";

import { TextItem } from "./TextItem";
import type { MultitextItem } from "./MultiTextItem";
import { Typography } from "@mui/material";

type SpecProps = { 
    children : MultitextItem[], 
    alignSelf ?: string, 
    sx ?: SxProps,
}

type MultiTextProps = OwnProps<TypographyProps, SpecProps, 'children'>



export function MultiTextBlock(props : MultiTextProps) {
    const { children, alignSelf } = props

    return (
        <Typography 
            component='span' 
            alignSelf={ alignSelf ? alignSelf : 'start'} 
            textAlign='start' 
            display='inline'
            >
            {
                children.map( (item, idx) =>
                    <TextItem key={ idx } item={ item } />
                )
            }
        </Typography>
    )
}