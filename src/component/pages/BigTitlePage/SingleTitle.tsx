import { Stack } from "@mui/system";
import type { PageStore } from "../../../assets/store/store";
import type { KeyProps } from "../../../assets/types/keyProps";
import { YellowButton } from "../../elements/ColorButton/DefaultRoundedButton"
import { TextItem } from "../../elements/TextBlock/MultiText/TextItem";
import { CardMedia } from "@mui/material";
import { ParaContentLink } from "../../elements/ParaContentLink/ParaContentLink";

type Props = KeyProps & { store : PageStore }

const isMobile = (window.screen.width < 800)

export function SingleTitlePage(props : Props) {
    const { store } = props

    const { titleSource, texts, finalButtons, width } = store

    const defaultTitleWidth = isMobile ? '75%' : '30%'

    const defaultBottomStackWidth = isMobile ? '80vw' : '70%'

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
                            width : titleSource.width ?? defaultTitleWidth 
                        }}
                        width={ titleSource.width ?? defaultTitleWidth }
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
                        width={ width ? width : defaultBottomStackWidth }
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

            <Stack spacing='1%' width={ defaultBottomStackWidth } alignSelf='center'>
                {
                    finalButtons?.map(({ link, text }, i) => 
                        <YellowButton key={i} link={ link } content={ text } />
                    )
                }
            </Stack>


        </Stack>
    )
}