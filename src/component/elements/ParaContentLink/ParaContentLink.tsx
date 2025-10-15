import { Stack, type StackProps, type SxProps } from "@mui/material"
import { Colors } from "../../../assets/colors/Colors"
import styled from "@emotion/styled"
import { RoundedButton } from "../ColorButton/RoundedButton"
import type { Action, } from "../../../assets/types/route"
import { Header } from "./Header"
import type { MultitextItem } from "../TextBlock/MultiText/MultiTextItem"
import { MultiTextBlock } from "../TextBlock/MultiText/MultitextBlock"
import { ImgMedia } from "./ImgMedia"
import { useState } from "react"

const isMobile = (window.screen.width < 800)

interface SpecialProps {
    caption ?: string,
    text ?: MultitextItem | MultitextItem[],
    buttonText ?: string,
    image ?: string,
    imageWidth ?: string | number,
    imageHeight ?: string | number,
    onButtonClick ?: Action,
}

type OmitProps = 'children' | 
        'style' | 
        'background' | 
        'stroke' | 
        'component' | 
        'sx' | 
        'height' |
        'direction' |
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

export function ParaContentLink(props : OuterProps) {
    const { caption, onButtonClick, text, image, imageWidth, imageHeight, buttonText } = props

    const [isTextOpen, setTextOpen] = useState(false)

    const outerProps = {
        ...(props as Omit<OuterProps, 'marginTop' | 'top' | 'width' | 'minWidth' | 'maxWidth' >),
        border : '3px solid',
        borderRadius : '20px',
        borderColor : Colors.LightGreen,
        alignContent : 'start',
        paddingTop : isMobile ? '8%' : '2%', 
        width : '100%',
        padding : '2%',
        'alignItems' : 'start',
        
        // transform : `translateY(${ caption ? (- prevH) : 0 })px`,
        // transition : '120 ms'
        
    } // as SxProps

    

    const innerProps = {
        alignContent : 'stretch',
        padding : '2%',
        
    } as SxProps

    const onLinkClick = (typeof onButtonClick == 'object' && 'addText' in onButtonClick) ?
    () => {
        setTextOpen(!isTextOpen)
    } 
    : onButtonClick

    const accordionText = (typeof onButtonClick == 'object' && 'addText' in onButtonClick) ?
        onButtonClick.addText : undefined

    return (
        <Stack alignContent='center' alignItems='center' width={ props.width }>

            {   caption &&
                    <Header
                        // ref={prevRef}
                        // position='absolute'
                        sx={{ transform : 'translateY(50%)' }}
                        text={ caption } />
            }

            <Stack sx={ outerProps as SxProps } spacing='2%'>

                <Stack direction='row' spacing='2%'>
                {
                    image && <ImgMedia 
                        image={ image }
                        
                        
                        sx={{ 
                                alignSelf : 'center', 
                                marginTop : '50px', 
                                maxWidth : imageWidth ? imageWidth :'30%',
                                maxHeight : imageHeight, 
                            }}                    
                    />
                }

                <Stack sx={ innerProps } spacing='6%' >


                    { text && <MultiTextBlock 
                        key='001' 
                        sx={{
                            marginTop : isMobile ? '10px' : '0'
                        }}
                        children={ Array.isArray(text) 
                        ? 
                        text 
                        : [ text ] } 
                        
                        /> 
                    }

                    {
                        !isTextOpen &&
                            <GrayButton 
                                onClick={ onLinkClick } 
                                marginTop='3%'
                                key='02'
                                backgroundColor={Colors.Gray} 
                                content={ buttonText ? buttonText : "Читать полностью" } 
                                color="#fff"
                                fontSize='25px' />
                    }


                </Stack>



                </Stack>

                    {
                        accordionText && isTextOpen && 

                        <Stack
                            border='1px solid'
                            key='003'
                            borderColor={ Colors.Gray }
                            borderRadius='10px'
                            padding='15px'
                            alignSelf='stretch'
                        >
                            <MultiTextBlock 
                                children={ 
                                    Array.isArray(accordionText) ?
                                        accordionText :
                                        [ accordionText ]
                                }
                            />
                        </Stack>
                    }

                    {
                        isTextOpen &&
                            <GrayButton 
                                alignSelf='end'
                                width='40%'
                                
                                onClick={ onLinkClick } 
                                marginTop='3%'
                                key='02'
                                backgroundColor={Colors.Gray} 
                                content={ "Свернуть" } 
                                color="#fff"
                                fontSize='25px' />
                    }

                </Stack>            
        </Stack>

    )
}