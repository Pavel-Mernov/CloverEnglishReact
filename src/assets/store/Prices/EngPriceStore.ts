import { Break, type MultitextItem } from "../../../component/elements/TextBlock/MultiText/MultiTextItem";

import franklin from '../../images/Price/Franklin.png'
import franklinMobile from "../../images/Mobile/Price/Franklin.png"

const isMobile = (window.screen.width < 600)

const contents : MultitextItem[] = [
    {
        imageSource : isMobile ? franklinMobile : franklin,
        width : isMobile ? '90vw' : '40vw'
    },
    Break, Break,
    {
        roseText: 'Цены на 2026-2027 учебный год'
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
            ['Стоимость обучения', '6400 руб.', '8000 руб.'],
            ['Стоимость одного занятия при разовой оплате',	'1050 руб.',	'1350 руб.'],
            
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
            ['Стоимость', '2000 руб.', '1750 руб.'],
            
        ],
    },    
    Break, Break,
]

export const EngPriceStore = {
    contents,
}