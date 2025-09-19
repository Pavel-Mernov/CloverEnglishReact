import { Typography } from "@mui/material"
import { ImgMedia } from "../../ParaContentLink/ImgMedia"
import { MultiTextBlock,  } from "./MultitextBlock"
import { StandardTextBlock } from "../StandardTextBlock"
import { Colors } from "../../../../assets/colors/Colors"
import { LocalLink } from "../../Link/LocalLink"
import { RoseTextBlock } from "../RoseTextBlock"
import type { MultitextItem } from "./MultiTextItem"
import { TextBlock } from "../TextBlock"
import { Stack } from "@mui/system"
import { LocalTable } from "../../Table/LocalTable"
import { OpenSansRegular } from "../../../../assets/fonts/fonts"

export function TextItem(props :{ item : MultitextItem }) {
    const { item } = props

    if (typeof item === 'object') {
        if ('text' in item && 'type' in item && (item.type == 'text')) {
            return <TextBlock 
                text={ item.text } 
                color={ item.color } 
                upperCase={ item.uppercase == true }
                fontSize={ item.fontSize ? item.fontSize : '25px' } 
                variant={ item.variant ? item.variant : 'h3' }
                fontWeight={ item.fontWeight ? item.fontWeight : 'semiBold' }
                />
        }
        if ('roseText' in item || 'type' in item && item.type == 'roseText') {
            const text = ('roseText' in item) ? item.roseText : item.text

            return <RoseTextBlock 
                text={ text } 
                component={ item.component }
                upperCase={ item.uppercase == true }
                variant={ item.variant ? item.variant : 'h3' } 
                fontWeight={ item.fontWeight ? item.fontWeight : 'bold' } 
                fontSize={ item.fontSize ? item.fontSize : '25px' } 
            
            />
        }
        else if ('bold' in item || 'type' in item && item.type == 'bold') {
            return <StandardTextBlock 
                text={ 'bold' in item ? item.bold : item.text } 
                component={ item.component }
                upperCase={ item.uppercase == true }
                variant={ item.variant ? item.variant : 'h3' } 
                fontWeight='bold' 
                fontFamily=''
                fontSize={ item.fontSize ? item.fontSize : '28px' } 
            
            />
        }
        else if ('link' in item || 'type' in item && item.type == 'link') {
            return <LocalLink 
                    to={ 'to' in item ? item.to : undefined } 
                    text={ 'link' in item ? item.link : item.text } 
                    
                    variant={ ('variant' in item && item.variant) ? item.variant : 'h5' }
                    color={ Colors.DarkGreen }
                    fontSize={ ('fontSize' in item && item.fontSize) ? item.fontSize : '30px' } 
                />
        }
        else if ('listItem' in item || 'type' in item && item.type == 'listItem') {
            return <Typography 
                component='li'
                fontFamily={ OpenSansRegular }
                variant={ item.variant ? item.variant : 'h5' } 
                fontWeight={ item.fontWeight } 
                fontSize={ item.fontSize ? item.fontSize : '25px' }
                alignSelf={ item.alignSelf ? item.alignSelf : 'start' }
                >
                    { 'text' in item ? item.text : item.listItem }
                </Typography>
        }
        else if ('multitext' in item || 'type' in item && item.type == 'multitext') {
            return <MultiTextBlock 
                children={ 'multitext' in item ? item.multitext : item.text } 
                
                />
        }
        else if ('imageSource' in item) {
            return <ImgMedia image={ item.imageSource } />
        }
        else if ('list' in item) {

            return (
                <Typography component='span'>
                    {
                        item.list.map((it, idx) => {
                            
                            return <Typography 
                                component='li'
                                key={ idx }
                                variant={ item.variant ? item.variant : 'h5' } 
                                fontWeight={ item.fontWeight } 
                                fontSize={ item.fontSize ? item.fontSize : '25px' }
                                alignSelf={ item.alignSelf ? item.alignSelf : 'justify' }
                                >
                                    { it }
                                </Typography>
                                        })
                        }
                </Typography>
            )
        }
        else if (('type' in item && item.type == 'imagetext') 
            || 
            ( 'image' in item && 'text' in item )) {
                return <Stack 
                    component='div'
                    direction='row'
                    spacing='5%'
                    >
                        <ImgMedia image={ item.image } width='30%' sx={{ objectFit : 'contain' }} />

                        <MultiTextBlock children={ item.text } />
                    </Stack>
        }
        else if ('type' in item && item.type == 'break') {
            return <Typography component='br' />
        }
        else if ('header' in item && 'rows' in item) {
            const { header, rows } = item

            return (
                LocalTable({ header : header, rows : rows })
            )
        }

        return <StandardTextBlock
                text={ item.text }
                fontSize={ item.fontSize ? item.fontSize : '25px' }
                fontWeight={ item.fontWeight }
                variant={ item.variant }
                // color={ item.color }
                alignSelf={ item.alignSelf ? item.alignSelf : 'start' }
            />
    }
    

    return <StandardTextBlock 
        alignSelf='start' 
        component="span"
        text={ item } 
        />
}