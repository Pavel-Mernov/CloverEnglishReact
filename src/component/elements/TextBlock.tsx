import { Typography } from "@mui/material";
import type { KeyProps } from "../../assets/types/keyProps";

export type StandardTextBlockProps = KeyProps & { text : string }

export type TextBlockProps = StandardTextBlockProps & { 
    fontSize ?: string | number, 
    fontWeight ?: string | number,
    color ?: string,
    upperCase ?: boolean
}

export function TextBlock(props : TextBlockProps) {

    const sx = props.upperCase ? { textTransform : 'upperCase' } : {}

    return (
        <Typography
            variant="h4"
            display='flex'
            alignContent='center'
            justifyContent='center'
            fontWeight={props.fontWeight}
            fontSize={props.fontSize}
            color={props.color}
            sx={sx}
        >
            {props.text}
        </Typography>
    )
}