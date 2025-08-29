import { Stack } from "@mui/system";
import { CardMedia } from "@mui/material";
import { WhiteTextButton } from "../../elements/ColorButton/DefaultRoundedButton";
import type { SiteRoute } from "../../../assets/types/route";
import type { MultitextItem } from "../../elements/TextBlock/MultiText/MultiTextItem";
import { TextItem } from "../../elements/TextBlock/MultiText/TextItem";


export interface ButtonItem {
    text : string,
    link ?: SiteRoute,
    backgroundColor : string,
}

export interface ParaLinkPageProps {
    headerImage : string,
    contents : MultitextItem[],
    footerButtonItems : ButtonItem[],
}

type Props = ParaLinkPageProps

export function ParaLinkPage(props : Props) {
    const { headerImage, contents, footerButtonItems } = props
    
    return <Stack
        component='div'
        width='80%'
        alignSelf='center'
        alignItems='center'
        alignContent='center'
        spacing='2%'
    >
    
        <CardMedia
            key='0'
            sx={{ 
                    objectFit : 'contain', 
                    width : '50%'
                }}
            component='img'
            src={ headerImage }
            alt="title"
            />

        <Stack 
            spacing='2%'
            key='01'
            >
        {
            contents.map((item, idx) => <TextItem item={ item } key={`content_${ idx }`} />)
        }
        </Stack>


        <Stack 
            width='70%' 
            marginTop='50px'
            spacing='1%'
            key='2'
            alignContent='center'
            alignItems='center'
            alignSelf='center'
            >
                {
                    footerButtonItems.map((item, idx) => 
                        <WhiteTextButton 
                            key={ `fb_${idx}` }
                            content={ item.text } 
                            backgroundColor={ item.backgroundColor }   
                            link={ item.link }                         
                        />
                    )
                }
        </Stack>

    </Stack>
}