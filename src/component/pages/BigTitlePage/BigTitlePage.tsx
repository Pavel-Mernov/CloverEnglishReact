import { Stack } from "@mui/system";
import type { KeyProps } from "../../../assets/types/keyProps";
import { ArticleContentLink } from "../../elements/ArticleContentLink/ArticleContentLink";
import { CardMedia } from "@mui/material";
import type { PageStore } from "../../../assets/store/store";
import { YellowButton } from "../../elements/ColorButton/DefaultRoundedButton";

type Props = KeyProps & { store : PageStore }

export function BigTitlePage(props : Props) {
    const { store } = props

    const { titleSource, texts, finalButtons } = store

    return (
        <Stack
            alignItems='center'
            width='100%'
            alignContent= 'center'
            spacing='4%'
        >
            {
                titleSource &&
                    <CardMedia
                        component='img'
                        sx={{ objectFit : 'contain', width : '30%' }}
                        image={ titleSource }
                        />
            }

            {
                texts?.map(({ caption, link, text }, i) =>
                    <ArticleContentLink 
                        key={ i }
                        width='70%'
                        alignSelf='center'
                        paddingBottom='2%'
                        caption={ caption } 
                        link={ link }
                        text={ text }
                        paddingInline='3%' 
                    />                
                )
            }

            <Stack spacing='1%' width='70%' alignSelf='center'>
                {
                    finalButtons?.map(({ link, text }, i) => 
                        <YellowButton key={i} link={ link } content={ text } />
                    )
                }
            </Stack>


        </Stack>
    )
}