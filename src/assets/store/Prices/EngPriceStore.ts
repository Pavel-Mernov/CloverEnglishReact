import { Break, type MultitextItem } from "../../../component/elements/TextBlock/MultiText/MultiTextItem";

import franklin from '../../images/Price/Franklin.png'

const contents : MultitextItem[] = [
    {
        imageSource : franklin,
        width : '40%'
    },
    Break, Break,
    {
        roseText: 'Цены на 2025-2026 учебный год'
    },
    {
        roseText : 'Английский язык',
    },
    Break,
    {
        type : 'table',
        header : [
                'занятия в группе', '1', '2'
            ],
        rows : [
            ['Максимальное количество учеников', '6', '6'],
            ['Продолжительность', '60 мин', '90 мин'],
            ['Количество занятий в месяц', '8', '8'],
            ['Стоимость обучения', '5200 руб.', '6600 руб.'],
            ['Стоимость одного занятия при разовой оплате',	'850 руб.',	'1100 руб.'],
            
        ],
    },
    Break,Break,
    {
        type : 'table',
        header : [
            'Индивидуальные занятия',
            '1',
            '2' 
            ],
        rows : [
            ['Продолжительность', '60 мин', '90 мин'],
            ['Стоимость', '1400 руб.', '1700 руб.'],
            
        ],
    },    
    Break, Break,
]

export const EngPriceStore = {
    contents,
}