import { Button } from "@mui/material";
import { useState, type JSX } from "react";
import type { SiteRoute } from "../../assets/types/route";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface Props {
    color : string,
    backgroundColor : string,
    text : string,
    link : SiteRoute,
    width ?: string | number,
    height ?: string | number,
    fontSize ?: string | number,
    fontWeight ?: string | number,
    borderRadius ?: string | number,
    margin ?: string | number,
    marginTop ?: string | number,
}

export function ColorButton(props : Props) : JSX.Element {
    const { 
        color, 
        text, 
        link, 
        backgroundColor, 
        fontWeight, 
        fontSize, 
        borderRadius, 
        margin, 
        marginTop,
    } = props;

    const [isMouseEntered, setMouseEntered] = useState(false);

    const ColorButton = styled(Button) ({
        width : props.width == undefined ? 'auto' : props.width,
        height : props.height == undefined ? 'auto' : props.height,
        backgroundColor : backgroundColor,
        color : color,
        fontWeight : fontWeight,
        fontSize : fontSize,
        margin : margin,
        borderRadius : borderRadius,
        marginTop : marginTop,
        overflowY : 'hidden',
        //paddingInline : '10%',
        transform : isMouseEntered ? 'scale(1.01)' : 'scale(1)',
    });

    const navigate = useNavigate();

    const onNavigate = () => {
        navigate(link)
    }

    return (
        <ColorButton 
            variant="contained"
            
            onClick={onNavigate}
            onMouseEnter={() => setMouseEntered(true)}
            onMouseLeave={() => setMouseEntered(false)}
            >{text}
        </ColorButton>
    );
}

type RoundedProps = Omit<Props, 'borderRadius'>

export function RoundedButton(props : RoundedProps) {
    const { 
        color, 
        backgroundColor, 
        text, 
        link, 
        width, 
        height, 
        fontSize, 
        fontWeight, 
        margin, 
        marginTop 
    } = props

    return ColorButton({
        color: color,
        backgroundColor: backgroundColor,
        text: text,
        link: link,
        width : width,
        height : height,
        fontSize : fontSize,
        fontWeight : fontWeight,
        borderRadius : '50vh',
        margin : margin,
        marginTop : marginTop
    })
}