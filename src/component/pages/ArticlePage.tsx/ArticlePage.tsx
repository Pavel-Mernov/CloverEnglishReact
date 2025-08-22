import { Stack } from "@mui/system";
import type { ItemType } from "./ItemType";
import { CardMedia } from "@mui/material";
import { ItemView } from "./ItemView";
import { WhiteTextButton } from "../../elements/ColorButton/DefaultRoundedButton";

interface ButtonItem {
    text : string,
    link ?: string,
    backgroundColor : string,
}

interface Props {
    headerImage : string,
    contents : ItemType[],
    footerButtonItems : ButtonItem[],
}

export function ArticlePage(props : Props) {
    const { headerImage, contents, footerButtonItems } = props
    
    return <Stack
        component='div'
        width='80%'
        alignItems='center'
        alignContent='center'
        spacing='10%'
    >
    
        <CardMedia
            key='0'
            component='img'
            width='50%'
            src={ headerImage }
            />

        {
            contents.map((item, idx) => <ItemView item={ item } key={`content_${ idx }`} />)
        }

        <Stack 
            width='85%' 
            spacing='1%'
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