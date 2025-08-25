import type { ArticlePageProps } from "../ArticlePage";
import title from "../../../../assets/images/English/learnEngWithUs/Title.png"
import { Colors } from "../../../../assets/colors/Colors";
import wilde from "../../../../assets/images/English/learnEngWithUs/Wilde.png"
import { Break } from "../../../elements/TextBlock/MultitextBlock";
import mallen from "../../../../assets/images/English/learnEngWithUs/Mallen.png"
import kushner from '../../../../assets/images/English/learnEngWithUs/Kushner.png'

// const defaultTextSize = '25px'
const roseTextSize = '25px'

const listItems = [
    'Свободное общение на английском;',
    'Просмотр видеороликов и фильмов без перевода;',
    'ОГЭ на 60+;',
    'ЕГЭ на 90+;',
    'Статус призера или победителя олимпиады 1-го или 2-го уровня.',
]

export const LearnEngPageContent : ArticlePageProps = {
    headerImage: title,
    contents: [
        {
            type : 'image',
            src : wilde,
            width : '70%'
        },
        {
            'type' : 'multitext',
            text : [
                {
                    type : 'roseText',
                    text : 'Clover English',
                    fontSize : '23px',
                    fontWeight : 'bold',
                },
                ' - это комфортное пространство, где можно изучать английский язык без страха и стрессов.',
                Break,
            ],
        },
            {
                type : 'multitext',
                text : [
                    `
                    На занятия мы приглашаем детей школьного возраста.`,
                    Break,
                    `8 лет (2 класс), на наш взгляд, оптимальный возраст, чтобы начать изучать английский язык.`,
                    Break,
                    `Подробнее об этом можно почитать
                    `,
                    {
                        type : 'link',
                        text : 'ЗДЕСЬ.',
                        fontWeight : 'bold',
                        variant : 'h4',
                        to : '/faq'
                    }
                ]
            },
            {
                type : 'text',
                text : `Благодаря нашей эффективной методике дети быстро начинают читать и распознавать речь на слух,
ориентироваться в основах грамматики, запоминают простые разговорные фразы.`,
            },
            {
                type : 'text',
                text : `В работе мы опираемся на материалы учебников иностранных издательств (Pearson, Oxford,
Macmillan и многие другие), на свой многолетний опыт и здравый смысл.`,
            },
            {
                type : 'image',
                src : mallen,
                width : '50%',
            },
            {
                type : 'multitext',
                text : [
                    'Почему ',
                    {
                        type : 'roseText',
                        text : 'Clover English',
                        variant : 'h3',
                        fontSize : roseTextSize,
                        fontWeight : 'bold',
                    },
                    '?',
                ]
            },
            {
                type : 'multitext',
                text : [
                    'Потому что ',
                    {
                        type : 'roseText',
                        text : 'Clover',
                        fontSize : roseTextSize,
                        fontWeight : 'bold',
                        variant : 'h3',
                    },
                    ` (клевер) - красивый цветок, а его название созвучно английскому слову
clever, что значит «умный».`,
                ]
            },
            {
                type : 'text',
                text : 'Clover-клевер-clever-умный - такая лингвистическая цепочка, ассоциативно соединяющая простое и изящное творение природы (clover) и человеческий интеллект (clever), однозначно нам подходит.',
            },
        {
            type : 'multitext',
            text: [
                ...listItems.map(it => 
                {
                    return {
                        type : 'listItem' as const,
                        text : it
                        }
                }
                ),
                Break,
                Break,
                {
                    type : 'bold',
                    text :  `Мы гарантируем высокое качество обучения при выполнении учеником всего двух условий:`,

                },                
                {
                    type: 'listItem',
                    text: `Регулярное посещение занятий (редкие пропуски только по болезни).`,
                },
                {
                    type: 'listItem',
                    text: `Регулярное выполнение домашнего задания.`,
                },

            ],
        },
            {
                type : 'multitext',
                text : [
                    `Мы всегда на связи с учениками и родителями, готовы ответить на все вопросы, проконсультировать по выполнению `,
                    {
                        type : 'link',
                        to : '/homework',
                        text : 'Домашнего задания'
                    },
                    `. Можем оказать помощь дистанционно.`,
                ]
            },
            {
                type : 'text',
                text : `Иностранный язык нельзя выучить быстро - как нельзя быстро научиться играть в футбол или на музыкальном инструменте. На это уйдут годы.`,
            },
            {
                type : 'multitext',
                text : [
                    `Но мы уверены, что эти годы должны быть счастливыми. Поэтому мы стараемся сделать так, 
чтобы время, проведенное детьми с нами, в будущем вспоминалось как самое яркое, светлое и радостное время их жизни.`,
                    Break,
                    `Кстати, именно об этом часто пишут наши выпускники. Их отзывы можно почитать `,
                    {
                        type : 'link',
                        text : 'Здесь',
                        to : `/feedback`
                    },
                    '.'
                ]
            },
            {
                type : 'multitext',
                text : [
                    {
                        type : 'roseText',
                        text : 'Мы используем разные методы работы:',
                    },
                    Break,
                    Break,
                    {
                        type : 'listItem',
                        text : 'игры, викторины, песни, проекты;',
                    },
                    {
                        type : 'listItem',
                        text : 'подбираем увлекательные видео и книги,'
                    },
                    {
                        type : 'listItem',
                        text : 'организуем интересные дискуссии.',
                    },
                    Break,
                    {
                        type : 'bold',
                        text : `Нам важно, чтобы дети на наших занятиях были увлечены самим процессом обучения.`,
                    },
                    ` Нам важно, чтобы дети на наших занятиях были увлечены самим процессом обучения.`,
                ]
            },
            {
                type : 'image',
                src : kushner,
                width : '60%'
            },

            {
                type : 'text',
                text : `Современный мир меняется очень быстро, и чтобы успевать за всеми изменениями, надо постоянно приобретать новые знания. Школьные годы – это время, когда при правильном подходе к обучению дети вырабатывают привычку учиться, искать для себя новую, интересную и полезную информацию.`,
    
            },
            {
                type : 'roseText',
                text : 'ПОЭТОМУ ГЛАВНЫМ ИТОГОМ НАШЕГО ОБУЧЕНИЯ МЫ СЧИТАЕМ НЕ ПОСТУПЛЕНИЕ В ЛУЧШИЙ ВУЗ СТРАНЫ И ПРИЗНАНИЕ НА ОЛИМПИАДАХ, А ЖЕЛАНИЕ РАЗВИВАТЬСЯ И УЧИТЬСЯ ДАЛЬШЕ.'
            },
            {
                type : 'text',
                text : 'И тогда конец света никогда не наступит.'
            }
    ],
    footerButtonItems: [
        {
            text: "Давайте Знакомиться",
            backgroundColor: Colors.Gray,
            link: '/letsmeet'
        },
        {
            text: "Как мы учим",
            backgroundColor: Colors.LightGreen,
            link: '/howwelearn',
        },
        {
            text: "Актуальность знаний английского",
            backgroundColor: Colors.LightGreen,
            link: '/actual'
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
    ],
}