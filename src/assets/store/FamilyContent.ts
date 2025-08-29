import { Break } from "../../component/elements/TextBlock/MultiText/MultiTextItem";
import type { PageStore } from "./store";
import familyTitle from "../images/FamilyClass/Title.png"

export const FamilyContent : PageStore = {
        titleSource : familyTitle,

        texts : 
        [
            {
                caption : 'О семейных классах',
                onClick : `/aboutfam`,
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
                onClick : `/ourpath`,
                text : [
                    'Познавая мир, ребёнок проявляет интерес к чему-то важному именно для него. Из ящика...',
                ]
            },

            {
                caption : 'АО vs. ФГОС',
                onClick : `/aovsfgos`,
                text : 'Почему сейчас количество семейных школ растет? Потому что увеличивается спрос на альтернативные образовательные услуги...'
            },
            {
                caption : 'Домашнее задание',
                onClick : `/homework`,
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
    // end of fam class
