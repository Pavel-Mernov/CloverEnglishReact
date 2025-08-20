import type { SiteRoute } from "../types/route"
import engTitle from "../images/English/FileTitle.png"

interface LinkInfo {
    caption ?: string,
    link : SiteRoute,
    text ?: string | string[]
}

interface FinalButtonProps {
    text : string,
    link ?: SiteRoute
}

interface ParaPageStore {
    titleSource ?: string,
    texts ?: LinkInfo[],
    finalButtons ?: FinalButtonProps[] 
}

export type PageStore = ParaPageStore

interface StoreType {
    english : PageStore,
    familyClass : PageStore,
}

export const Store : StoreType = {
    english : {
        titleSource : engTitle,

        texts : 
        [
            {
                caption : 'Изучение языка с нами',
                link : `/learneng`,
                text : [
                        `CLOVER ENGLISH - это комфортное пространство, где можно изучать английский язык без
                        страха и стрессов.`,

                        `На занятия мы приглашаем детей школьного возраста.
                        8 лет (2 класс), на наш взгляд, оптимальный возраст, чтобы начать изучать английский
                        язык. Подробнее об этом можно почитать ЗДЕСЬ.`,

                        `Благодаря нашей эффективной методике дети быстро начинают читать и распознавать
                        речь на слух, ориентироваться ...`
                ]
            },

            {
                caption : 'Как мы учим',
                link : `/howwelearn`,
                text : [
                    'На занятия мы приглашаем школьников со 2-го по 11-й класс.',
                    
                    'В 1-й, 2-й и 3-й год обучения занятия длятся 60 минут. Начиная с 4-го года (5 класс) объем материала, который надо усвоить за один урок,увеличивается, поэтому и продолжительность занятий тоже увеличивается до 90 минут.',
                
                    '1-й год начинается с обучения чтению, основам грамматики и простым разговорным фразам. Последний год в 11 классе заканчиваем ...',
                ]
            },

            {
                caption : 'Актуальность знаний английского',
                link : `/actual`,
                text : [
                    'Сейчас многие задаются вопросом, зачем в наше время школьникам дополнительно изучать английский язык:',
                    
                    'обязательный ЕГЭ в школе отменили;',
                
                    'получать лингвистическое образование — далеко не у всех в планах;',
                    
                    'туристические поездки за границу ...',
                ]
            },
        ],
        finalButtons : [
            {
                text: "Цены 2025-26 учебный год",
                link: "/price/english"
            },
            {
                text: "Галерея",
                link: "/gallery"
            }
        ],
    },
    // end of english

    familyClass : {

    }
} 