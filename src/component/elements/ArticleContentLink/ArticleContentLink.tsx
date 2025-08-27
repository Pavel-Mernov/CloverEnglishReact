import { Stack, type StackProps, type SxProps } from "@mui/material"
import { Colors } from "../../../assets/colors/Colors"
import styled from "@emotion/styled"
import { RoundedButton } from "../ColorButton/RoundedButton"
import type { SiteRoute } from "../../../assets/types/route"
import { Header } from "./Header"
import type { MultitextItem } from "../TextBlock/MultiText/MultiTextItem"
import { MultiTextBlock } from "../TextBlock/MultiText/MultitextBlock"

interface SpecialProps {
    caption ?: string,
    text ?: MultitextItem | MultitextItem[],
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
    const { caption, link, text } = props

    // const normalizedItem : NormalizedItem = normalize(text as ItemType) 

    const outerProps = {
        ...(props as Omit<OuterProps, 'marginTop' | 'top' | 'width' | 'minWidth' | 'maxWidth' >),
        border : '3px solid',
        borderRadius : '20px',
        borderColor : Colors.LightGreen,
        alignContent : 'start',
        paddingTop : '3%', 
        width : '100%',
        'alignItems' : 'start',
        // transform : `translateY(${ caption ? (- prevH) : 0 })px`,
        // transition : '120 ms'
        
    } // as SxProps

    const innerProps = {
        alignContent : 'stretch',
        padding : '2%',
    } as SxProps

    return (
        <Stack alignContent='center' alignItems='center' width={ props.width }>

            {   caption &&
                    <Header
                        // ref={prevRef}
                        // position='absolute'
                        sx={{ transform : 'translateY(50%)' }}
                        text={ caption } />
            }

            <Stack sx={ outerProps as SxProps }>

                <Stack sx={ innerProps } >


                    { text && <MultiTextBlock 
                        key='001' 
                        children={ Array.isArray(text) 
                        ? 
                        text 
                        : [ text ] } 
                        /> 
                    }

                    <GrayButton 
                        link={link} 
                        marginTop='3%'
                        key='02'
                        backgroundColor={Colors.Gray} 
                        content="Читать полностью" 
                        color="#fff"
                        fontSize='25px' />
                </Stack>
            </Stack>            
        </Stack>

    )
}