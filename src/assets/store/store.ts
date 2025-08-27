import type { SiteRoute } from "../types/route"


import { type MultitextItem } from "../../component/elements/TextBlock/MultiText/MultiTextItem"


import { EngContent } from "./EngContent"
import { FamilyContent } from "./FamilyContent"
import { ArticlesContent } from "./ArticlesStore"

interface LinkInfo {
    caption ?: string,
    image ?: string,
    link : SiteRoute,
    text ?: MultitextItem | MultitextItem[],
}

interface FinalButtonProps {
    text : string,
    link ?: SiteRoute
}

interface ParaPageStore {
    titleSource ?: string,
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
} 