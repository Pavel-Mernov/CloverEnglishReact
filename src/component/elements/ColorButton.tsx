import { Stack, Typography, type TypographyVariant } from "@mui/material";
import { useState, type JSX } from "react";
import type { SiteRoute } from "../../assets/types/route";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

type SizeValue = string | number

interface Props {
    color ?: string,
    backgroundColor : string,
    content : string | JSX.Element | JSX.Element[],
    link ?: SiteRoute,
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
    variant ?: TypographyVariant
}

export function ColorButton(props : Props) : JSX.Element {
    const { 
        width,
        maxWidth,
        height,
        color, 
        content, 
        link, 
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
        transform : isMouseEntered ? 'scale(1.01)' : 'scale(1)',
    });

    const navigate = useNavigate();

    const onNavigate = () => {
        if (link) {
            navigate(link)
        }
    }

    return (
        <ColorButton
            spacing={spacing}
            onClick={onNavigate}
            onMouseEnter={() => setMouseEntered(true)}
            onMouseLeave={() => setMouseEntered(false)}
            >
                {
                    typeof content === 'string' ?
                    <Typography 
                        variant={variant}
                        fontWeight={fontWeight}
                        fontSize={fontSize}
                        >
                            {content}
                    </Typography> :
                        content
                }
        </ColorButton>
    );
}

type RoundedProps = Omit<Props, 'borderRadius' | 'paddingBlock'>

export function RoundedButton(props : RoundedProps) {
    const { 
        color, 
        backgroundColor, 
        content, 
        link, 
        width, 
        height, 
        fontSize, 
        fontWeight, 
        margin, 
        marginTop,
        variant, 
        padding,
        paddingTop,
        paddingInline,
        spacing,
    } = props

    return ColorButton({
        color: color,
        backgroundColor: backgroundColor,
        content: content,
        link: link,
        width : width,
        height : height,
        fontSize : fontSize,
        fontWeight : fontWeight,
        borderRadius : '50vh',
        margin : margin,
        marginTop : marginTop,
        paddingBlock : '2%',
        paddingTop : paddingTop,
        paddingInline : paddingInline,
        spacing : spacing,
        padding : padding,
        variant : variant
    })
}