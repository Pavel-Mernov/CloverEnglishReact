import { Break, type MultitextItem } from "../../../component/elements/TextBlock/MultiText/MultiTextItem";

import royce from '../../images/Price/Rois.png'

const isMobile = (window.screen.width < 800)

const keys = [
        'Максимальное количество учеников',
        'Количество дней в неделю',
        'Время занятий',
        'Изучаемые предметы',
        'Стоимость учебного года 2026-2027',
] as const

type Values = Record<typeof keys[any], MultitextItem>

const values1 : Values = {
    "Максимальное количество учеников": "6",
    "Количество дней в неделю": "5",
    "Время занятий": "9.00 - 13.00",
    "Изучаемые предметы": {
        multitext : [
            'Математика',
            Break,
            'Русский язык',
            Break,
            'Литературное Чтение',
            Break,
            'Окружающий мир', 
            Break,
            'Творчество',
            Break,
            'Проектная деятельность',
        ]
    },
    "Стоимость учебного года 2026-2027": {
        multitext : [
            '205 000 р. за год.',
            Break, Break,
        ]
    }
} 

const values2 : Values = {
    "Максимальное количество учеников": "6",
    "Количество дней в неделю": "5",
    "Время занятий": "9.00 - 14.00",
    "Изучаемые предметы": {
        multitext : [
            'Математика',
            Break,
            'Русский язык',
            Break,
            'Литературное Чтение',
            Break,
            'Английский язык',
            Break,
            'Окружающий мир', 
            Break,
            'Творчество',
            Break,
            'Проектная деятельность',
        ]
    },
    "Стоимость учебного года 2026-2027": {
        multitext : [
            '225 000 р. за учебный год',  
        ]
    }
}

const table1rows = keys.map(key => [ key as MultitextItem, values1[key] ] as const)

const table2rows = keys.map(key => [ key as MultitextItem, values2[key] ] as const)

const contents : MultitextItem[] = [
    {
        imageSource : royce,
        width : isMobile ? '80vw' : '40vw'
    },
    Break, Break,
    {
        roseText: 'Цены на 2026-2027 учебный год'
    },
    {
        roseText: 'Семейный класс',
    },
    Break,
    {
        type : 'table',
        header : ['Семейный класс', '1 класс'],
        rows : table1rows
    },
    Break, Break,
    {
        type : 'table',
        header : ['Семейный класс', '2 и 3 классы'],
        rows : table2rows
    },  
    Break, Break,
    '*в случае выездных занятий, экскурсий, государственных праздников количество уроков в неделю может измениться',
    Break,  
]

export const famPrices = {
    contents,
}