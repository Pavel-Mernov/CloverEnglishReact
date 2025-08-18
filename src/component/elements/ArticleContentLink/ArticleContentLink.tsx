import { Stack, type StackProps, type SxProps } from "@mui/material"
import { Colors } from "../../../assets/colors/Colors"
import { Content } from "./Content"
import styled from "@emotion/styled"
import { RoundedButton } from "../ColorButton/RoundedButton"
import type { SiteRoute } from "../../../assets/types/route"
import { Header } from "./Header"

interface SpecialProps {
    caption ?: string,
    text ?: string | string[],
    image ?: string,
    link ?: SiteRoute,
}

type OmitProps = 'children' | 
        'style' | 
        'background' | 
        'stroke' | 
        'component' | 
        'sx' | 
        'border' | 
        'borderRadius' |
        'borderColor' |
        'borderTop' |
        'borderBottom' |
        'borderRight' |
        'borderLeft' |
        'display' |
        'classes' |
        'className' |
        'borderColor' |
        'alignItems' |
        'alignContent' // |
        // 'alignSelf'

export type OuterProps = Omit<StackProps, OmitProps> & SpecialProps

const GrayButton = styled(RoundedButton) ({
    color : '#fff',
    backgroundColor : Colors.Gray,
    
    
})

export function ArticleContentLink(props : OuterProps) {
    const { caption, link } = props

    //const ownProps = 

    const outerProps = {
        ...(props as Omit<OuterProps, ''>),
        border : '3px solid',
        borderRadius : '20px',
        borderColor : Colors.LightGreen,
        alignContent : 'center', 
        'alignItems' : 'center',
    } as SxProps

    const innerProps = {
        alignItems : 'revert',
        padding : '2%',
    } as SxProps

    return (
            <Stack sx={ outerProps }>
                <Stack sx={ innerProps } >

                    {
                        caption && <Header text={caption} />

                    }

                    <Content text={props.text} />

                    <GrayButton 
                        link={link} 
                        marginTop='3%'
                        
                        backgroundColor={Colors.Gray} 
                        content="Читать полностью" 
                        color="#fff"
                        fontSize='25px' />
                </Stack>
            </Stack>
    )
}