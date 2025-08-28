import { Stack, Typography, type TypographyVariant } from "@mui/material";
import { useState, type JSX } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import type { OnClickAction } from "../../../assets/types/route";

type SizeValue = string | number

export interface ColorButtonProps {
    color ?: string,
    backgroundColor : string,
    content : string | JSX.Element | JSX.Element[],
    onClick ?: OnClickAction,
    width ?: SizeValue,
    height ?: SizeValue,
    fontSize ?: SizeValue,
    fontWeight ?: SizeValue,
    borderRadius ?: SizeValue,
    margin ?: SizeValue,
    spacing ?: SizeValue,
    marginTop ?: SizeValue,
    padding ?: SizeValue,
    paddingTop ?: SizeValue,
    paddingBlock ?: SizeValue,
    paddingInline ?: SizeValue,
    maxWidth ?: SizeValue,
    upperCase ?: boolean,
    variant ?: TypographyVariant
}

type Props = ColorButtonProps

export function ColorButton(props : Props) : JSX.Element {
    const { 
        width,
        maxWidth,
        height,
        color, 
        content, 
        onClick, 
        backgroundColor, 
        fontWeight, 
        fontSize, 
        borderRadius, 
        margin, 
        spacing,
        marginTop,
        padding,
        paddingTop,
        paddingInline,
        paddingBlock,
        upperCase,
        variant,

    } = props;

    const [isMouseEntered, setMouseEntered] = useState(false);

    const ColorButton = styled(Stack) ({
        width : width,
        height : height,
        maxWidth : maxWidth,
        backgroundColor : backgroundColor,
        color : color,
        fontWeight : fontWeight,
        fontSize : fontSize,
        margin : margin,
        borderRadius : borderRadius,
        marginTop : marginTop,
        overflowY : 'hidden',
        alignItems : 'center',
        paddingBlock : paddingBlock,
        padding : padding,
        paddingInline : paddingInline,
        paddingTop : paddingTop,
        transform : isMouseEntered ? 'scale(1.03)' : 'scale(1)',
    });

    const navigate = useNavigate();

    const onAction = () => {
        if (!onClick) {
            return
        }

        if (typeof onClick == 'string') {
            navigate(onClick)
            return
        }

        if ('link' in onClick) {
            navigate(onClick.link)
            return
        }

        if ('action' in onClick) {
            onClick.action()
            return
        }
        
    }

    return (
        <ColorButton
            spacing={spacing}
            onClick={onAction}
            onMouseEnter={() => setMouseEntered(true)}
            onMouseLeave={() => setMouseEntered(false)}
            >
                {
                    typeof content === 'string' ?
                    <Typography 
                        variant={variant}
                        fontWeight={fontWeight}
                        fontSize={fontSize}
                        sx={upperCase ? { textTransform : 'uppercase' } : {}}
                        >
                            {content}
                    </Typography> :
                        content
                }
        </ColorButton>
    );
}
