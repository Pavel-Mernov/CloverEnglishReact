import type { PageStore } from "./store";
import engTitle from "../images/English/FileTitle.png"
import famTitle from "../images/FamilyClass/Title.png"
import { Colors } from "../colors/Colors";
import { Break, type MultitextItem } from "../../component/elements/TextBlock/MultiText/MultiTextItem";

const ColorText = (text : string, color : string = Colors.LightGreen) => {
    return (
                {
                    'type' : 'text',
                    text : text,
                    color : color,
                    fontSize : '30px',
                    fontWeight : 'bold',
                }   as MultitextItem     
    )
}

const QuestionBlock = (props : {
    questionNumber : number,
    questionText : string, 
    questionColor ?: string,
    answerText : MultitextItem | MultitextItem[]
    }) => {
        const { questionNumber, questionText, questionColor, answerText } = props
    return {
        buttonText : 'Ответ' as string,
        width : '100%',
        text : [
            ColorText(`Вопрос №${questionNumber}`, 
                questionColor ? questionColor : Colors.LightGreen,
            ),

            Break, Break,
            questionText as MultitextItem
        ] as MultitextItem[],
        onClick : {
            addText : answerText // as MultitextItem[] | MultitextItem
        }
    }
}

const EngQuestions : PageStore = {
    titleSource : {
        imageSource : engTitle,
        width : '30%'
    },
    
    texts : [
        QuestionBlock({
            questionNumber: 1,
            questionText: `ПОЧЕМУ ВЫ НЕ УЧИТЕ ДЕТЕЙ АНГЛИЙСКОМУ РАНЬШЕ 2 КЛАССА?`,

            answerText: [
                `Потому что в этом нет большого смысла. 2-й класс – это оптимальный возраст для того, чтобы начать учить язык.`,
                Break,
                `Дети готовы к осознанному восприятию и быстро всему учатся. В 1-м классе перед ребёнком стоит масса других, более важных задач. Не стоит усложнять детям жизнь и не стоит тратить их драгоценное время впустую. Судите сами: дети, которые начинают учить язык в 1-м классе или ранее, уже к концу 2-го класса (а иногда и раньше) ничем не отличаются по знаниям от тех детей, которые начали учить язык во 2-м классе.`,
            ] as MultitextItem[] | MultitextItem,
            // questionColor: ""
        }),

        QuestionBlock({
            questionNumber: 2,
            questionText: `КАК СООТНОСИТСЯ ВАША ПРОГРАММА ПО АНГЛИЙСКОМУ ЯЗЫКУ С ТЕМ, ЧТО ДЕТИ ПРОХОДЯТ В ШКОЛЕ?`,

            answerText: [
                `У нас нет точного ответа на этот вопрос, потому что даже в пределах одной школы учителя учат детей по-разному. Но в итоге, наши ученики, как правило, показывают более высокий уровень подготовки, чем требуется в школе. Наши ученики уверенно себя чувствуют при сдаче ВПР, ОГЭ и ЕГЭ. А желающие принимают участие в олимпиадах и занимают призовые места.`,
            ] as MultitextItem[] | MultitextItem,
            // questionColor: ""
        }),

        QuestionBlock({
            questionNumber: 3,
            questionText: `КАК ПРОИСХОДИТ ОТБОР В ОЛИМПИАДНУЮ ГРУППУ?`,

            answerText: `Самое главное - это желание самих учеников заниматься дополнительно. Попробовать могут все учащиеся, которые хорошо справляются с основной программой. В олимпиадную группу мы приглашаем учеников, начиная с 5-го класса. Занятия проходят 1 раз в неделю.`,
 
            
            // questionColor: ""
        }),


        QuestionBlock({
            questionNumber : 4,
            questionText : `МОЖНО ЗАНИМАТЬСЯ ТОЛЬКО В ОЛИМПИАДНОЙ ГРУППЕ И НЕ ХОДИТЬ НА ОСНОВНУЮ ПРОГРАММУ?`,
            answerText : `Нет, к олимпиадам мы готовим только своих учеников.`,
            
        }),
        QuestionBlock({
            questionNumber : 5,

            questionText : `ДЕЛАЕТЕ ЛИ ВЫ ПЕРЕРАСЧЁТ ЗА ОПЛАЧЕННЫЕ ПРОПУЩЕННЫЕ ЗАНЯТИЯ?`,
            answerText : `Нет, но у вас есть возможность платить за каждое занятие отдельно`,
            
        }),
    ]
}

const FamQuestions : PageStore = {
    titleSource : {
        imageSource : famTitle,
        width : '30%'
    },
    
    texts : [
        QuestionBlock({
            questionNumber: 1,
            questionText: `БУДЕТ ЛИ СРЕДНЯЯ ШКОЛА ДЛЯ СЕМЕЙНЫХ КЛАССОВ?`,
            questionColor : Colors.RoseDark,

            answerText: `Да, будет. Будем расти и развиваться вместе с нашими детьми. Уже сейчас работаем над этим. Постепенно, всё сделаем.`
        }),

        QuestionBlock({
            questionNumber: 2,
            questionText: `ПОМОГАЕТЕ ЛИ ВЫ С ОФОРМЛЕНИЕМ СЕМЕЙНОГО ОБРАЗОВАНИЯ ДЛЯ ДЕТЕЙ?`,
            questionColor : Colors.RoseDark,
            answerText: `Да. Мы дадим подробную инструкцию, как написать заявление для перевода детей на семейное образование и объясним, куда его надо отнести. Далее, вы можете сами выбрать школу для прохождения государственной аттестации, а можете доверить это нам. В этом случае мы прикрепим вас к школе, с которой мы сотрудничаем.`,
            
        }),

        QuestionBlock({
            questionNumber: 3,
            questionText: `КАК ПРОИСХОДИТ ЗАЧИСЛЕНИЕ В ШКОЛУ?`,
            questionColor : Colors.RoseDark,
            answerText: `После того, как мы с вами познакомимся и поймём, что подходим друг другу, вы оформляете семейное обучение в департаменте образования, прикрепляетесь к государственной школе, приносите нам копии этих документов. Затем мы заключаем договор, вы делаете первый взнос (не менее 15 000р ). Ваш ребёнок зачислен.`,
        }),


        QuestionBlock({
            questionNumber : 4,
            questionText : `ПРИНИМАЕТЕ ЛИ ВЫ ДЕТЕЙ С ОСОБЕННОСТЯМИ РАЗВИТИЯ?`,
            answerText : `Всё зависит от того, какие это особенности. Для того, чтобы ответить на этот вопрос, нам надо познакомиться с ребёнком и родителями. С какими-то особенностями мы можем справиться, а с какими-то нет.`,
            questionColor : Colors.RoseDark,
        }),
        QuestionBlock({
            questionNumber : 5,
            questionColor : Colors.RoseDark,
            questionText : `ЕСТЬ ЛИ ЗАНЯТИЯ НА КАНИКУЛАХ В СЕМЕЙНЫХ КЛАССАХ?`,
            answerText : `Да, на каникулах занятия есть, но они необязательные. Это будут скорее развлекательные и творческие занятия: настольные игры, поделки, ребусы, скороговорки, загадки, чтение книг, сочинение историй и т.д. Эти занятия можно пропустить и провести время на каникулах так, как вам хочется. Перерасчёт оплаты занятий в связи с каникулами мы не делаем.`,
            
        }),
    ]
}

export const FaqStore : PageStore[] = [
    EngQuestions,
    FamQuestions,
]