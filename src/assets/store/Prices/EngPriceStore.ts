import { Break, type MultitextItem } from "../../../component/elements/TextBlock/MultiText/MultiTextItem";
import { Colors } from "../../colors/Colors";
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
                {
                    bold : 'занятия в группе',
                    color : Colors.Gray,
                    fontSize : '25px',
                    variant : 'h2',
                }, 
                {
                    bold : '1',
                    color : Colors.Gray,
                    fontSize : '25px',
                    variant : 'h2',
                }, 
                {
                    bold : '2',
                    color : Colors.Gray,
                    fontSize : '25px',
                    variant : 'h2',
                }, 
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
                {
                    bold : 'Индивидуальные занятия',
                    color : Colors.Gray,
                    fontSize : '25px',
                    variant : 'h2',
                }, 
                {
                    bold : '1',
                    color : Colors.Gray,
                    fontSize : '25px',
                    variant : 'h2',
                }, 
                {
                    bold : '2',
                    color : Colors.Gray,
                    fontSize : '25px',
                    variant : 'h2',
                }, 
            ],
        rows : [
            ['Продолжительность', '60 мин', '90 мин'],
            ['Стоимость', '1400 руб.', '1700 руб.'],
            
        ],
    },    
]

export const EngPriceStore = {
    contents,
}