import { Stack, type SxProps } from "@mui/material";
import type { OuterProps } from "./ArticleContentLink";
import { ImgMedia } from "./ImgMedia";
import { Text } from './Text'

type OmitProps = 'caption' | 'spacing' | 'alignSelf' | 'width' | 'maxWidth' | 'minWidth'

type Props = Omit<OuterProps, OmitProps>

export function Content(props : Props) {
    const { text, image } = props

    return (
            <Stack 
                spacing='1vh' 
                direction="row" 
                alignSelf='center'
                width='100%'
                sx={ props as SxProps }
                >
                {
                    image && <ImgMedia image={ image } />
                }

                <Text text={ text } />
            </Stack>
    )
}

