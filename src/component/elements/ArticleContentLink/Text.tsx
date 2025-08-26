import { Stack } from "@mui/system";
import type { KeyProps } from "../../../assets/types/keyProps";
import { StandardTextBlock } from "../TextBlock/StandardTextBlock";
import type { OwnProps } from "../../../assets/types/OwnProps";

type Props = KeyProps & 
    { 
        text ?: string | string[], 
        fontWeight ?: string,
        color ?: string,
    }

type SingleTextProps = OwnProps<Props, { text : string }, 'text'>

const LocalTextBlock = (props : SingleTextProps) => (
    <StandardTextBlock                
        variant="body1" 
        text={ props.text } 
        fontWeight={ props.fontWeight ? props.fontWeight : 'semiBold' }         
    />
)

export function Text(props : Props) {
    const { text, fontWeight } = props

    return (typeof text === 'string') ?
        <LocalTextBlock text={text} />
        :

        <Stack spacing='3%'>
            {
                (text as string[]).map((item, i) => 
                    <LocalTextBlock 
                        key={i} fontWeight={ fontWeight }  text={item} />)
            }
        </Stack>
}