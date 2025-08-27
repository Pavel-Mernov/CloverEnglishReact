import type { ArticlePageProps, ButtonItem } from "../../ArticlePage";
import title from "../../../../../assets/images/English/Actual/Title.png"
import fellini from "../../../../../assets/images/English/Actual/Fellini.png"
import vitkg from "../../../../../assets/images/English/Actual/Vitkgstein.png"
import { Colors } from "../../../../../assets/colors/Colors";
import type { MultitextItem } from "../../../../elements/TextBlock/MultiText/MultiTextItem";

const contents : any[] = [
    {
        
        imageSource : fellini,
        width : '40%',
    } as MultitextItem,
    
    `Сейчас многие задаются вопросом, зачем в наше время школьникам дополнительно изучать английский язык:`,
,
    {
        multitext : [
            `обязательный ЕГЭ в школе отменили;`,
            `получать лингвистическое образование — далеко не у всех в планах;`,
            `туристические поездки за границу временно потеряли актуальность (ключевое слово -"временно")..`,
        ].map(item => {
            return {
                type : 'listItem' as const,
                text : item
            } as MultitextItem
        })
     },
    {
        type : 'bold',
        bold : 'Тогда зачем?'
    } as MultitextItem,
    {
        roseText : `МОГУ С УВЕРЕННОСТЬЮ СКАЗАТЬ, ЧТО ЗНАНИЕ АНГЛИЙСКОГО ЯЗЫКА ПО-ПРЕЖНЕМУ НЕОБХОДИМО КАК ДЛЯ УСПЕШНОЙ КАРЬЕРЫ, ТАК И ДЛЯ ИНТЕРЕСНОЙ ЖИЗНИ.`
    } as MultitextItem,
    {
        multitext : [
            `Со многими своими выпускниками я поддерживаю связь.
Одни рассказывают, как слушают лекции на иностранных сайтах или ютуб-каналах на английском языке, и это здорово помогает им в учебе в вузе. Другие – как благодаря знанию английского еще на старших курсах смогли обойти других кандидатов и получить работу на выгодных условиях. `,
            {
                type : 'bold',
                text : 'Примеров много.'
            }
    ]
    } as MultitextItem,
    {
        imageSource : vitkg,
        width : '50%',
    } as MultitextItem,
    `Несмотря на глобальные перемены, происходящие в мире, есть факторы, которые сложились давно и вряд ли изменятся в обозримом будущем. Один из них – это статус английского, как языка международного общения. Научное, деловое и культурное взаимодействие в мире происходит на английском языке – самом распространенном на всех континентах. И если мы хотим быть частью мирового сообщества, нам нужно знать английский.`,
    
    {
        roseText : `ВЫВОД ПРОСТОЙ: ЗНАНИЕ АНГЛИЙСКОГО ЯЗЫКА ПО-ПРЕЖНЕМУ ОСТАЕТСЯ ОБЯЗАТЕЛЬНОЙ ЧАСТЬЮ ХОРОШЕГО ОБРАЗОВАНИЯ. ЕГО АКТУАЛЬНОСТЬ НИКУДА НЕ ИСЧЕЗЛА.`,
    } as MultitextItem
]

const footerButtons : ButtonItem[] = [
        {
            text: "Давайте Знакомиться",
            backgroundColor: Colors.Gray,
            link: '/letsmeet'
        },
        {
            text: "Изучение языка с нами",
            backgroundColor: Colors.LightGreen,
            link: '/learneng',
        },
        {
            text: "Как мы учим",
            backgroundColor: Colors.LightGreen,
            link: '/howwelearn'
        },
        {
            text: "Отзывы",
            backgroundColor: Colors.RoseDark,
            link: '/feedback'
        },
        {
            text: "Цены на 2025-2026 учебный год",
            backgroundColor: Colors.Yellow,
            link: '/price/english'
        },  
        {
            text: "О семейных классах",
            backgroundColor: Colors.DarkGreen,
            link: '/aboutfam'
        },
    ]

export const ActualPageContent : ArticlePageProps = {
    headerImage: title,
    contents: contents,
    footerButtonItems: footerButtons,
}