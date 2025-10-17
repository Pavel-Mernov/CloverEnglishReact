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
            ['Стоимость обучения', '5400 руб.', '6850 руб.'],
            ['Стоимость одного занятия при разовой оплате',	'900 руб.',	'1150 руб.'],
            
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
            ['Продолжительность', '60 мин', '45 мин'],
            ['Стоимость', '1750 руб.', '1450 руб.'],
            
        ],
    },    
    Break, Break,
]

export const EngPriceStore = {
    contents,
}