import { Stack } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";
import { StandardTextBlock } from "./StandardTextBlock";

export function TextGroup(props : KeyProps & { items ?: string | string[] }) {
    const { items } = props

    const itemsArray = items ? 
        (typeof(items) === 'string' ? [ items ] : 
            items
    ) : null

    return <Stack 
            spacing='1%' 
            alignItems='start'
        >

        {itemsArray?.map((item, id ) => { 
            return <StandardTextBlock key={id} text={item} />
         })}
    </Stack>
}