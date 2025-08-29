import { Stack } from "@mui/system";
import type { PageStore } from "../../../assets/store/store";
import type { KeyProps } from "../../../assets/types/keyProps";
import { YellowButton } from "../../elements/ColorButton/DefaultRoundedButton"
import { TextItem } from "../../elements/TextBlock/MultiText/TextItem";
import { CardMedia } from "@mui/material";
import { ParaContentLink } from "../../elements/ParaContentLink/ParaContentLink";

type Props = KeyProps & { store : PageStore }

export function SingleTitlePage(props : Props) {
    const { store } = props

    const { titleSource, texts, finalButtons, width } = store

    return (
        <Stack
            alignItems='center'
            width='100%'
            alignContent= 'center'
            spacing='4%'
        >

            {
                titleSource && typeof titleSource == 'object' && 'imageSource' in titleSource &&
                    <CardMedia
                        component='img'
                        sx={{ 
                            objectFit : 'contain', 
                            width : titleSource.width ? titleSource.width : '30%' 
                        }}
                        width={ titleSource.width ? titleSource.width : '30%' }
                        image={ titleSource.imageSource }
                        />
            }

            {
                titleSource && (typeof titleSource == 'string' || typeof titleSource == 'object' && !('imageSource' in titleSource)) &&
                    <TextItem 
                        item={titleSource}                        
                        />
            }

            {
                texts?.map(({ caption, onClick, text, image, buttonText }, i) =>
                    <ParaContentLink 
                        key={ i }
                        image={ image }
                        width={ width ? width : '70%' }
                        alignSelf='center'
                        paddingBottom='2%'
                        caption={ caption } 
                        buttonText={ buttonText }
                        onButtonClick={ onClick }
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