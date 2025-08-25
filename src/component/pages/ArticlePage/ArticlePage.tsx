import { Stack } from "@mui/system";
import type { ItemType } from "./ItemType";
import { CardMedia } from "@mui/material";
import { ItemView } from "./ItemView";
import { WhiteTextButton } from "../../elements/ColorButton/DefaultRoundedButton";
import type { SiteRoute } from "../../../assets/types/route";

export interface ButtonItem {
    text : string,
    link ?: SiteRoute,
    backgroundColor : string,
}

export interface ArticlePageProps {
    headerImage : string,
    contents : ItemType[],
    footerButtonItems : ButtonItem[],
}

type Props = ArticlePageProps

export function ArticlePage(props : Props) {
    const { headerImage, contents, footerButtonItems } = props
    
    return <Stack
        component='div'
        width='80%'
        alignSelf='center'
        alignItems='center'
        alignContent='center'
        spacing='5%'
    >
    
        <CardMedia
            key='0'
            sx={{ 
                    objectFit : 'contain', 
                    width : '50%'
                }}
            component='img'
            src={ headerImage }
            />

        <Stack 
            spacing='5%'
            key='1'
            >
        {
            contents.map((item, idx) => <ItemView item={ item } key={`content_${ idx }`} />)
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
                        />
                    )
                }
        </Stack>

    </Stack>
}