import type { JSX } from "react";
import { Page } from "../../component/pages/Page/Page";
import MainPageContent from "../../component/pages/MainPage/MainPageContent";
import { Policy } from "../../component/pages/Page/Policy";
import { LetsMeetPage } from "../../component/pages/LetsMeet/LetsMeet";
import { BigTitlePage } from "../../component/pages/BigTitlePage/BigTitlePage";
import { Store } from "../store/store";
import { ParaLinkPage } from "../../component/pages/ParaLinkPage/ParaLinkPage";
import { LearnEngPageContent } from "../../component/pages/PageContents/English/LearnEngPage";
import { HowWeLearnPage } from "../../component/pages/PageContents/English/HowWeLearn";
import { ActualPageContent } from "../../component/pages/PageContents/English/Actual";
import { AboutFamGroup } from "../../component/pages/PageContents/FamilyClass/AboutFamGroup";
import type { MultitextItem } from "../../component/elements/TextBlock/MultiText/MultiTextItem";
import { OurPathPage } from "../../component/pages/PageContents/FamilyClass/OurPath";
import { AOvsFGOS } from "../../component/pages/PageContents/FamilyClass/AOvsFGOS";
import { HomeworkContent } from "../../component/pages/PageContents/FamilyClass/Homework";
import { Page7Habits } from "../../component/pages/PageContents/Articles/7Habits";
import { ProjectPage } from "../../component/pages/PageContents/Articles/Project";

export type SiteRoute = "/" |
          
          "/letsmeet" |

          "/policy" |

          "/englishlanguage" |

          "/familyclass" |

          "/price" |

          "/articles" |

          "/articles/project" |

          "/articles/7habits" |

          "/teachers" |

          "/feedback" |

          "/faq" |

          "/gallery" |
          
          "/learneng" |
          
          "/howwelearn" |
          
          "/actual" |
          
          "/aboutfam" |

          "/ourpath" |

          "/aovsfgos" |

          "/homework" |

          "/price/english" |

          "/price/family"

type SiteMap = {
  [route in SiteRoute]: JSX.Element
};

const mainPage = <Page 
  content = {<MainPageContent />}
/>

const letsMeet = <Page 
  content={ <LetsMeetPage /> }
/>

const policyPage = Policy()

const englishPage = Page({ content : BigTitlePage({ store : Store.english })  })

const famClassPage = Page({ content : BigTitlePage({ store : Store.familyClass })  })

const articlesPage = Page({ content : BigTitlePage({ store : Store.articles })  })

const articleProjPage = Page({ content : ParaLinkPage( ProjectPage ) })

const article7habitsPage = Page({ content : ParaLinkPage( Page7Habits ) })

const teachersPage = Page({ content : BigTitlePage({ store : Store.teachers })   })

const feedbackPage = Page({ content : BigTitlePage({ store : Store.feedback })  })

const faqPage = Page({ content : BigTitlePage({ store : Store.faq }) })

const galleryPage = Page({  })

// const additionalPage = Page({  })

const pricePage = Page({  })

const learnEngPage = Page({ content : ParaLinkPage( LearnEngPageContent) })

const howwelearnPage = Page({ content : ParaLinkPage( HowWeLearnPage )  })

const actualPage = Page({ content : ParaLinkPage( ActualPageContent ) })

const aboutFamPage = Page({ content : ParaLinkPage( AboutFamGroup ) })

const familyPricesPage = Page({  })

const englishPricesPage = Page({  })

const ourPathPage = Page({ content : ParaLinkPage( OurPathPage ) })

const aovsfgosPage = Page({ content : ParaLinkPage( AOvsFGOS )  })

const homeworkPage = Page({ content : ParaLinkPage( HomeworkContent )  })

export const siteMap : SiteMap = {
  "/": mainPage,
  "/letsmeet": letsMeet,
  "/policy": policyPage,
  "/englishlanguage": englishPage,
  "/familyclass": famClassPage,
  "/articles": articlesPage,
  "/articles/7habits" : article7habitsPage,
  "/articles/project" : articleProjPage,
  "/teachers": teachersPage,
  "/feedback": feedbackPage,
  "/faq": faqPage,
  "/gallery": galleryPage,
  // "/additional": additionalPage,
  "/price": pricePage,
  "/learneng": learnEngPage,
  "/howwelearn": howwelearnPage,
  "/actual": actualPage,
  "/aboutfam": aboutFamPage,

  "/price/english": englishPricesPage,
  "/price/family": familyPricesPage,
  "/ourpath": ourPathPage,
  "/aovsfgos": aovsfgosPage,
  "/homework": homeworkPage,
}

export type OnClickAction = SiteRoute | (() => void)

export type Action = OnClickAction | { addText : MultitextItem | MultitextItem[] }

export const MapListKeys = Object.keys(siteMap).map(key => key as unknown as SiteRoute);