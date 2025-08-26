import type { SiteRoute } from "../types/route"
import engTitle from "../images/English/FileTitle.png"
import familyTitle from "../images/FamilyClass/Title.png"
import { Break, type MultitextItem } from "../../component/elements/TextBlock/MultiText/MultitextBlock"

interface LinkInfo {
    caption ?: string,
    link : SiteRoute,
    text ?: MultitextItem | MultitextItem[],
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

const FamilyContent : PageStore = {
        titleSource : familyTitle,

        texts : 
        [
            {
                caption : 'О семейных классах',
                link : `/aboutfam`,
                text : [
                    {
                        multitext : [
                            {
                                type : 'roseText',
                                text : `ДАТЬ ДЕТЯМ КАЧЕСТВЕННОЕ ОБРАЗОВАНИЕ БЕЗ ТРЕВОГИ И БОЛИ, НО В ПОКОЕ И РАДОСТИ`,
                            },
                            Break,
                            `– это очевидная цель любого родителя...`
                        ]
                    }
                ],
            },

            {
                caption : 'Наш подход к обучению',
                link : `/ourpath`,
                text : [
                    'Познавая мир, ребёнок проявляет интерес к чему-то важному именно для него. Из ящика...',
                ]
            },

            {
                caption : 'АО vs. ФГОС',
                link : `/aovsfgos`,
                text : 'Почему сейчас количество семейных школ растет? Потому что увеличивается спрос на альтернативные образовательные услуги...'
            },
            {
                caption : 'Домашнее задание',
                link : `/homework`,
                text : 'Споры о том, нужно ли задавать детям задание на дом или нет, ведутся давно. Есть аргументы и за, и против ...',
            },
        ],
        finalButtons : [
            {
                text: "Цены 2025-26 учебный год",
                link: "/price/family"
            },
            {
                text: "Галерея",
                link: "/gallery"
            }
        ],
}
    // end of fam clall

const engContent : PageStore = {
        titleSource : engTitle,

        texts : 
        [
            {
                caption : 'Изучение языка с нами',
                link : `/learneng`,
                text : [
                        {
                            multitext : [
                                { 
                                    roseText : `CLOVER ENGLISH`,
                                },
                                ` - это комфортное пространство, где можно изучать английский язык без страха и стрессов.`,

                            ]
                            
                        },

                        Break,
                        Break,
                        
                        `На занятия мы приглашаем детей школьного возраста.
                        8 лет (2 класс), на наш взгляд, оптимальный возраст, чтобы начать изучать английский
                        язык. Подробнее об этом можно почитать ЗДЕСЬ.`,

                        Break,
                        Break,

                        `Благодаря нашей эффективной методике дети быстро начинают читать и распознавать
                        речь на слух, ориентироваться ...`
                ]
            },

            {
                caption : 'Как мы учим',
                link : `/howwelearn`,
                text : [
                    'На занятия мы приглашаем школьников со 2-го по 11-й класс.',

                    Break,
                    Break,
                    
                    'В 1-й, 2-й и 3-й год обучения занятия длятся 60 минут. Начиная с 4-го года (5 класс) объем материала, который надо усвоить за один урок,увеличивается, поэтому и продолжительность занятий тоже увеличивается до 90 минут.',
                
                    Break,
                    Break,
                    
                    '1-й год начинается с обучения чтению, основам грамматики и простым разговорным фразам. Последний год в 11 классе заканчиваем ...',
                ]
            },

            {
                caption : 'Актуальность знаний английского',
                link : `/actual`,
                text : [
                    'Сейчас многие задаются вопросом, зачем в наше время школьникам дополнительно изучать английский язык:',
                    
                    Break,
                    Break,
                    
                    {
                        listItem : 'обязательный ЕГЭ в школе отменили;',
                    },
                    
                    {
                        listItem : 'получать лингвистическое образование — далеко не у всех в планах;',
                    },
                    
                    {
                        listItem : 'туристические поездки за границу ...',
                    }
                    
                    
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
    } // end of eng content

export const Store : StoreType = {
    english : engContent,

    familyClass : FamilyContent,
} 