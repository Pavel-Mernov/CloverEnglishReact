import type { Action, SiteRoute } from "../types/route"


import { type MultitextItem } from "../../component/elements/TextBlock/MultiText/MultiTextItem"


import { EngContent } from "./EngContent"
import { FamilyContent } from "./FamilyContent"
import { ArticlesContent } from "./ArticlesStore"
import { TeachersStore } from "./TeachersStore"
import { FeedbackStore } from "./FeedbackStore"
import { FaqStore } from "./FaqStore"
import { EngPriceStore } from "./Prices/EngPriceStore"


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
    teachers : TeachersStore,
    feedback : FeedbackStore,
    faq : FaqStore,
    price : {
        english : EngPriceStore,
        family : null,
    },
} 