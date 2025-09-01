import type { ButtonItem } from "../../MultiTextPage/MultiTextPage"
import title from "../../../../assets/images/FamilyClass/Title.png"
import { Break, type MultitextItem } from "../../../elements/TextBlock/MultiText/MultiTextItem"
import { Colors } from "../../../../assets/colors/Colors"

const contents : MultitextItem[] = [
    Break, Break,
    'Споры о том, нужно ли задавать детям задание на дом или нет, ведутся давно. Есть аргументы и за, и против - и все они разумны.',
    Break, Break,
    'С одной стороны, д/з – это или самостоятельное осмысление пройденного материала, или поиск новой информации по теме, которую начали изучать в классе, или просто чтение книг в своём темпе. Кроме того - это важный и необходимый для жизни навык распределять свое время, учиться самоорганизации.',
    Break, Break,
    'С другой стороны, д/з ослабляет тягу к знаниям, снижает любовь к обучению, потому что свое свободное время детям приходится тратить на то, что делать не хочется. И чем больше домашнего задания, тем больше накапливается негатива по отношению к школе и учебе в целом.',
    Break, Break,
    'То есть, основная проблема домашнего задания не в том, что оно есть, а в том, что его слишком много, и в том, что у ребенка просто нет мотивации делать его, а, значит, ему приходится выполнять всё по принуждению, а не по желанию.',
    Break, Break,
    {
        roseText : 'ТАК ЧТО ПРОБЛЕМА В КОЛИЧЕСТВЕ И КАЧЕСТВЕ Д/З, В ЕГО СОДЕРЖАНИИ, А НЕ В САМОМ ФАКТЕ ЕГО СУЩЕСТВОВАНИЯ.'
    },
    Break, Break,
    {
        multitext : [
            
            'Можно ли с этим что-то сделать? Можно!',
            Break,
            {
                bold : 'Достаточно позаботиться о том, чтобы задания были интересными и не занимали много времени.  '
            },
            'Например, учитель подберёт книги, которые детям будет интересно читать, или необычные задачки, над которыми интересно подумать.',
            Break,
            'А ещё часть домашнего задания, может быть по желанию - только для тех учеников, кому интересен предмет, и кто хочет копнуть поглубже.',
            Break,
            'Учитель может посоветоваться с детьми, спросить их мнение - что они сами хотели бы сделать дома. Предоставить детям выбор, значит, запустить маховик мотивации: я делаю то, что хочу сам, мне интересно делать то, что я хочу',
            Break, Break,
        ]
    }
]

const footerButtons : ButtonItem[] = [
    {
        text : 'Изучение языка с нами',
        backgroundColor : Colors.LightGreen,
        link : '/learneng'
    },
    {
        text : 'Как мы учим',
        backgroundColor : Colors.LightGreen,
        link : '/howwelearn'
    },
    {
        text : 'Актуальность знаний английского',
        backgroundColor : Colors.LightGreen,
        link : '/actual'
    },
    {
        text : 'О семейных классах',
        backgroundColor : Colors.DarkGreen,
        link : '/aboutfam'
    },
    {
        text : 'Наши преподаватели',
        backgroundColor : Colors.RoseDark,
        link : '/teachers'
    },
    {
        text : 'Отзывы',
        backgroundColor : Colors.RoseDark,
        link : '/feedback'
    },
]

export const HomeworkContent = {
    headerImage : title,
    contents : contents,
    footerButtonItems : footerButtons,
}