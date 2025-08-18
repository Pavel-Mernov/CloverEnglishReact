import { Stack } from "@mui/system";
import type { KeyProps } from "../../../assets/types/keyProps";
import { ArticleContentLink } from "../../elements/ArticleContentLink/ArticleContentLink";


const text1 = [`CLOVER ENGLISH - это комфортное пространство, где можно изучать английский язык без
                страха и стрессов.`,

                `На занятия мы приглашаем детей школьного возраста.
                8 лет (2 класс), на наш взгляд, оптимальный возраст, чтобы начать изучать английский
                язык. Подробнее об этом можно почитать ЗДЕСЬ.`,

                `Благодаря нашей эффективной методике дети быстро начинают читать и распознавать
                речь на слух, ориентироваться ...`

]

export function EnglishPage(_ : KeyProps) {

    return (
        <Stack
            alignItems='center'
            width='100%'
            alignContent= 'center'
        >
            <ArticleContentLink 
                key='0'
                width='70%'
                alignSelf='center'
                paddingBottom='2%'
                caption="Изучение языка с нами" 
                link="/learneng"
                text={text1}
                paddingInline='3%' 
                />
        </Stack>
    )
}