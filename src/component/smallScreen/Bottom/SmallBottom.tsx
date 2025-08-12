import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function SmallBottom() {
    return (
    <Stack
        // position="fixed"
        bottom="0"
        left="0"
        right="0"
        zIndex="overlay"
        sx={{
            background : "#DFDFDF"
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

        <Link to="/policy"
            >
            <Typography variant="h4" align="center">Политика конфиденциальности</Typography>
        </Link>

        <Typography variant="h4" align="center">
            2025 АНГЛИЙСКИЙ КЛУБ "КЛЕВЕР"
        </Typography>
    </Stack>
    )
}