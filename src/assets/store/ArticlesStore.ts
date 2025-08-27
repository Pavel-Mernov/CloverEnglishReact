import { Break } from "../../component/elements/TextBlock/MultiText/MultiTextItem";
import type { PageStore } from "./store";
import mariaP from "../../assets/images/Teachers/Maria_P.png"
import elizaB from "../../assets/images/Teachers/Eliza_B.jpg"

export const ArticlesContent : PageStore = {
    texts : [
        {
            caption : `Проектная деятельность в семейной школе`,
            link: "/articles/project",
            image : elizaB,
            text : [
                {
                    multitext : [
                        {
                            bold : 'Елизавета Бычковская'
                        },
                        Break,
                        `Учитель начальных классов высшей квалификационной категории`,
                    ],
                },
                Break,
                Break,
                Break,
                {
                    multitext : [
                        `Что мы, родители, общество, государство, хотим сегодня от детей?`,
                        Break,
                        `И чего хотят сами дети, когда приходят в школу учиться?`,
                        Break,
                        `Есть ли что-то общее у этих двух сфер?`,
                        Break,
                        `И как нам, учителям, удовлетворять эти запросы? Реально ли это?...`,
                    ],
                }
            ]
        },
        {
            caption : '7 привычек, чтобы интегрировать английский в свою жизнь',
            link : '/articles/7habits',
            image : mariaP,
            text : [
                {
                    bold : 'Мария Парфёнова',
                    
                },
                Break,
                `Преподаватель английского языка детям, взрослым,`,
                Break,
                `Подготовка к ОГЭ и ЕГЭ,`,
                Break,
                `г. Королёв`,
                Break,
                Break,
                Break,

                `Меня зовут Мария, я преподаватель английского языка для детей и взрослых в Королёве. Я поделюсь с вами отлично работающими приёмами, которые помогут сделать английский неотъемлемой частью вашей жизни.`,
            ]
        }
    ]
}