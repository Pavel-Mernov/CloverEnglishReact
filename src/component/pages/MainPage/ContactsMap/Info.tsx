import { CardMedia, Stack, Typography } from "@mui/material"
import type { Key } from "react"
import titleImage from "../../../../assets/images/main/lol.png"
import type { KeyProps } from "../../../../assets/types/keyProps"
import { Colors } from "../../../../assets/colors/Colors"

export const Info = (_ : { key ?: Key }) => { 

    const InfoString = (props : { text ?: string, key ?: Key, marginTop ?: string | number }) =>
        <Typography variant="h5" fontSize='170%' marginTop={props.marginTop}>
            { props.text }
        </Typography>

    const TitleImage = (_ : KeyProps) => <CardMedia
        image = { titleImage }
        sx = {{ objectFit : 'contain', width : '100%' }}
        component = 'img'
        />

    const maxWidth = (window.screen.width < 800) ? 'auto' : '50%'

    const ourLocationColor = (window.screen.width < 800) ? '#000' : Colors.RoseDark

    return <Stack 
        component='div'
        maxWidth={ maxWidth }
        spacing='6%'
        >
        <TitleImage key='0' />

        <Typography
            key='1'
            variant="h4"
            fontWeight='bold'
            // marginTop='20px'
            sx={{ marginTop : '10%' }}
            color={ourLocationColor}
        >
            НАШЕ МЕСТОПОЛОЖЕНИЕ
        </Typography>

        <Stack spacing='1%'>
            <InfoString key='2' text={"Город Королёв, мкр. Юбилейный"} />

            <InfoString key='3' text={"ул. Ленинская, 12"} />

            <InfoString key='3' text={"Офис 5"} />
        </Stack>


        <InfoString key='4' text={"+7-916-502-71-98"} />
    </Stack>
}