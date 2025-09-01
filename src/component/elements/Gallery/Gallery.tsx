import { Stack } from "@mui/system"
import type { KeyProps } from "../../../assets/types/keyProps"
import { Colors } from "../../../assets/colors/Colors"
import { CardMedia, Pagination } from "@mui/material"
import { useState } from "react"
import { MultiTextBlock } from "../TextBlock/MultiText/MultitextBlock"

type Props = KeyProps & {
    title ?: string,
    width ?: string | number,
    images : string[],
}

export function Gallery(props : Props) {
    const { width, title, images  } = props

    const [page, setPage] = useState(0)

    return (
        <Stack 
            spacing='2%' 
            width={ width ? width : '100%' }
            >
            { title &&  
                <MultiTextBlock 
                    alignSelf="center"
                    children={[
                        {
                            roseText : title,
                            fontSize : '30px',
                            
                        }
                    ]}                
                />
            }

            <Stack
                key='1'
                padding='5%'
                paddingLeft='15%'
                paddingRight='15%'
                spacing='10%'
                alignSelf='center'
                width = '60%'
                border='5px solid'
                borderRadius='30px'
                borderColor={ Colors.LightGreen }
            >
                <CardMedia
                    component='img'
                    width='10vw'
                    sx={{ objectFit : 'contain' }}
                    src={ images[page] }
                />

                <Pagination 
                    defaultPage={0}
                    count={ images.length }
                    onChange={ (_, page) => setPage(page) }
                />
            </Stack>
        </Stack>

    )
}