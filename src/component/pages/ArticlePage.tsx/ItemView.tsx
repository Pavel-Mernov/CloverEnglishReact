import { CardMedia } from "@mui/material"
import { MultiTextBlock } from "../../elements/TextBlock/MultitextBlock"
import { StandardTextBlock } from "../../elements/TextBlock/StandardTextBlock"
import type { KeyProps } from "../../../assets/types/keyProps"
import { RoseTextBlock } from "../../elements/TextBlock/RoseTextBlock"
import type { ItemType } from "./ItemType"

export function ItemView(props : { item : ItemType } & KeyProps) {
    const { item } = props

    if (item.type == 'text') {
        return <StandardTextBlock width='100%' text={ item.text } />
    }

    if (item.type == 'rosetext') {
        return <RoseTextBlock 
            text={ item.text } 
            width='100%' 
            variant="h3" 
            fontWeight='bold' 
        />
    }

    if (item.type == 'multitext') {
        return <MultiTextBlock
            children={ item.text } 
        />
    }

    if (item.type == 'image') {
        return <CardMedia
            component='img'
            src={ item.src }
            width='50%'
            sx={{ objectFit : 'contain' }}
        />
    }
}