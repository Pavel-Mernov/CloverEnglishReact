import type { JSX } from "react";
import { Stack, Typography } from "@mui/material";
import { Colors } from "../../../assets/colors/Colors";
import { LocalLink } from "../../elements/Link/LocalLink";

export function Bottom() : JSX.Element {
    return (
    <Stack
        // position="fixed"
        bottom="0"
        left="0"
        right="0"
        zIndex="overlay"
        sx={{
            background : Colors.PaleGreen,
        }}
        padding="2%"
        spacing="2%"
        
        // align="center"
    >
        <Typography
            variant="h6">
                Обращаем Ваше внимание на то, что данный интернет-сайт носит исключительно информационный характер 
                и ни при каких условиях не является публичной офертой, 
                определяемой положениями ч. 2 ст. 437 Гражданского кодекса Российской Федерации. 
                Все отзывы на сайте представляют собой субъективные авторские суждения. Цитаты взяты из свободных источников. 
                Любые упоминания статей с сайта требуют указания сайта www.cloverenglish.ru
            </Typography>

        <Stack 
            component='div' 
            alignSelf='center' 
            alignItems='center'
            spacing='2%'
            >
            <LocalLink  to="/policy" variant="h4" text="Политика Конфиденциальности" />

            <Typography variant="h4" align="center">
                2025 АНГЛИЙСКИЙ КЛУБ "КЛЕВЕР"
            </Typography>
        </Stack>

    </Stack>
    )
}