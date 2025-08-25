import { CardMedia } from "@mui/material"
import { MultiTextBlock } from "../../elements/TextBlock/MultitextBlock"
import { StandardTextBlock } from "../../elements/TextBlock/StandardTextBlock"
import type { KeyProps } from "../../../assets/types/keyProps"
import { RoseTextBlock } from "../../elements/TextBlock/RoseTextBlock"
import { normalize, type ItemType } from "./ItemType"

export function ItemView(props : { item : ItemType } & KeyProps) {
    const { item } = props

    const normalizedItem = normalize(item)

    if (normalizedItem.type == 'text') {
        return <StandardTextBlock 
            component="span" 
            alignSelf='start' 
            alignItems='self-start'
            width='100%' 
            text={ normalizedItem.text } 
            />
    }

    if (normalizedItem.type == 'roseText') {
        return <RoseTextBlock 
            text={ normalizedItem.text } 
            width='100%' 
            variant="h3" 
            fontSize='25px'
            fontWeight='bold' 
        />
    }

    if (normalizedItem.type == 'boldText') {
            return <StandardTextBlock 
                text={ normalizedItem.text } 
                // variant='h4' 
                fontWeight='bold' 
                // fontSize={ item.fontSize ? item.fontSize : '25px' } 
            
            />
        }

    if (normalizedItem.type == 'multitext') {
        return <MultiTextBlock
            children={ normalizedItem.text } 
        />
    }

    if (normalizedItem.type == 'image') {
        return <CardMedia
            component='img'
            src={ normalizedItem.src }
            width={ normalizedItem.width }
            sx={{ objectFit : 'contain' }}
        />
    }
}