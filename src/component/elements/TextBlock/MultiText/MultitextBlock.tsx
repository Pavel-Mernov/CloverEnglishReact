import { Typography } from "@mui/material";
import type { OwnProps } from "../../../../assets/types/OwnProps";
import type { TypographyProps } from "@mui/system";

import { TextItem } from "./TextItem";
import type { MultitextItem } from "./MultiTextItem";

type SpecProps = { children : MultitextItem[] }

type MultiTextProps = OwnProps<TypographyProps, SpecProps, 'children'>



export function MultiTextBlock(props : MultiTextProps) {
    const { children } = props

    return (
        <Typography component='span' alignSelf='start' textAlign='start' display='inline'>
            {
                children.map( (item, idx) =>
                    <TextItem key={ idx } item={ item } />
                )
            }
        </Typography>
    )
}