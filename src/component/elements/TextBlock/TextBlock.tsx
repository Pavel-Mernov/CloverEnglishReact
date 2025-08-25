import { Typography, type TypographyOwnProps, type TypographyVariant } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";
import type { OwnProps } from "../../../assets/types/OwnProps";
import { type SxProps, type TypographyProps } from "@mui/system";

type StandardTextBlockProps = KeyProps & { text : string }

type TextBlockOwnProps = StandardTextBlockProps & { 
    upperCase ?: boolean,
    text : string,
    variant ?: TypographyVariant,
    color ?: string,
    sx ?: SxProps,
    component ?: 'span' | 'p' | 'div' 
}

type OmitProps = 'display' | 'justifyContent' | 'textAlign' | 'alignContent'

export type TextBlockProps = OwnProps<TypographyProps & TypographyOwnProps, 
            TextBlockOwnProps, OmitProps>

export function TextBlock(props : TextBlockProps) {

    const sx = props.upperCase ? { textTransform : 'upperCase'  } : {}
    const { variant, component } = props

    return (
        <Typography
            variant={variant}
            display='inline'
            component={ component ? component : 'p' }
            alignContent='stretch'
            justifyContent='stretch'
            textAlign='justify'
            fontWeight={props.fontWeight}
            fontSize={props.fontSize}
            color={ props.color }
            sx={sx}
        >
            {props.text}
        </Typography>
    )
}