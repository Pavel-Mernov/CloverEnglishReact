import { Colors } from "../../../assets/colors/Colors"
import type { KeyProps } from "../../../assets/types/keyProps"
import type { SiteRoute } from "../../../assets/types/route"
import { RoundedButton } from "./RoundedButton"

const isMobile = (window.screen.width < 800)

type BaseProps = KeyProps & { content : string, link ?: SiteRoute  }

type Props = BaseProps & { backgroundColor : string, }

type DefaultProps = Props & { color ?: string }

const DefaultRoundedButton = (props : DefaultProps) => 
    RoundedButton({
        width: '100%',
        
        fontSize: isMobile ? '20px' : '25px',
        color: props.color,
        backgroundColor: props.backgroundColor,
        content: props.content,
        onClick : props.link,
    })

export const WhiteTextButton = (props : Props) => 
    <DefaultRoundedButton
        color="#fff"
        backgroundColor={props.backgroundColor}
        content={props.content} 
        link={ props.link }    
        /> 

export const YellowButton = (props : BaseProps) => 
    <DefaultRoundedButton
        color="#000"
        backgroundColor={ Colors.Yellow }
        content={props.content} 
        link={ props.link }    
        /> 