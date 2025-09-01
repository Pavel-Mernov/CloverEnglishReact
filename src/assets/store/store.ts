import type { Action, SiteRoute } from "../types/route"


import { type MultitextItem } from "../../component/elements/TextBlock/MultiText/MultiTextItem"


import { EngContent } from "./EngContent"
import { FamilyContent } from "./FamilyContent"
import { ArticlesContent } from "./ArticlesStore"
import { TeachersStore } from "./TeachersStore"
import { FeedbackStore } from "./FeedbackStore"
import { FaqStore } from "./FaqStore"
import { EngPriceStore } from "./Prices/EngPriceStore"
import { LearnEngPageContent } from "./ParaPageContents/English/LearnEngPage"
import { HowWeLearnPage } from "./ParaPageContents/English/HowWeLearn"
import { ActualPageContent } from "./ParaPageContents/English/Actual"
import { AboutFamGroup } from "./ParaPageContents/FamilyClass/AboutFamGroup"
import { OurPathPage } from "./ParaPageContents/FamilyClass/OurPath"
import { AOvsFGOS } from "./ParaPageContents/FamilyClass/AOvsFGOS"
import { HomeworkContent } from "./ParaPageContents/FamilyClass/Homework"
import { Page7Habits } from "./ParaPageContents/Articles/7Habits"
import { ProjectPage } from "./ParaPageContents/Articles/Project"


interface LinkInfo {
    caption ?: string,
    image ?: string,
    buttonText ?: string,
    width ?: string | number,
    onClick : Action,
    text ?: MultitextItem | MultitextItem[],
}

interface FinalButtonProps {
    text : string,
    link ?: SiteRoute
}

interface ParaPageStore {
    titleSource ?: MultitextItem,
    width ?: string | number,
    texts ?: LinkInfo[],
    finalButtons ?: FinalButtonProps[] 
}

export type PageStore = ParaPageStore

`interface StoreType {
    english : PageStore,
    familyClass : PageStore,
}`






export const Store = {
    english : EngContent,
    articles : ArticlesContent,
    familyClass : FamilyContent,

    multitextContents : {
        english : {
            learnEng : LearnEngPageContent,
            howWeLearn : HowWeLearnPage,
            actual : ActualPageContent,
        },
        family : {
            aboutFamGroup : AboutFamGroup,
            ourPath : OurPathPage,
            aoVSfgos : AOvsFGOS,
            homework : HomeworkContent,
        },
        articles : {
            page7habits : Page7Habits,
            project :  ProjectPage,
        }
    },

    teachers : TeachersStore,
    feedback : FeedbackStore,
    faq : FaqStore,
    price : {
        english : EngPriceStore,
        family : null,
    },
}