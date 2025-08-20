import { Stack } from "@mui/system";
import type { KeyProps } from "../../../assets/types/keyProps";
import { StandardTextBlock } from "../TextBlock/StandardTextBlock";

type Props = KeyProps & { text ?: string | string[] }

const LocalTextBlock = (props : KeyProps & { text : string }) => (
    <StandardTextBlock                
        variant="body1" 
        text={ props.text } 
        fontWeight='semiBold'         
    />
)

export function Text(props : Props) {
    const { text } = props

    return (typeof text === 'string') ?
        <LocalTextBlock text={text} />
        :

        <Stack spacing='3%'>
            {
                (text as string[]).map((item, i) => <LocalTextBlock key={i} text={item} />)
            }
        </Stack>
}