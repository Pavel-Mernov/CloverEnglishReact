import { Typography, type TypographyVariant } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";
import type { OwnProps } from "../../../assets/types/OwnProps";
import { type SxProps, type TypographyProps } from "@mui/system";

type StandardTextBlockProps = KeyProps & { text : string }

type TextBlockOwnProps = StandardTextBlockProps & { 
    upperCase ?: boolean,
    text : string,
    variant ?: TypographyVariant,
    color ?: string,
    sx ?: SxProps
}

type OmitProps = 'display' | 'alignContent'

export type TextBlockProps = OwnProps<TypographyProps, TextBlockOwnProps, OmitProps>

export function TextBlock(props : TextBlockProps) {

    const sx = props.upperCase ? { textTransform : 'upperCase'  } : {}

    return (
        <Typography
            variant={props.variant}
            display='flex'
            alignContent='center'
            justifyContent='center'
            fontWeight={props.fontWeight}
            fontSize={props.fontSize}
            color={ props.color }
            sx={sx}
        >
            {props.text}
        </Typography>
    )
}