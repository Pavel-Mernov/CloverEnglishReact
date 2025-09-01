import type { JSX } from "react";
import { Page } from "../../component/pages/Page/Page";
import MainPageContent from "../../component/pages/MainPage/MainPageContent";
import { Policy } from "../../component/pages/Page/Policy";
import { LetsMeetPage } from "../../component/pages/LetsMeet/LetsMeet";
import { BigTitlePage } from "../../component/pages/BigTitlePage/BigTitlePage";
import { Store } from "../store/store";
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
import { PricePage } from "../../component/pages/PricesPage/PricesPage";
import { MultiTextPage } from "../../component/pages/MultiTextPage/MultiTextPage";

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

const articleProjPage = Page({ content : MultiTextPage( ProjectPage ) })

const article7habitsPage = Page({ content : MultiTextPage( Page7Habits ) })

const teachersPage = Page({ content : BigTitlePage({ store : Store.teachers })   })

const feedbackPage = Page({ content : BigTitlePage({ store : Store.feedback })  })

const faqPage = Page({ content : BigTitlePage({ store : Store.faq }) })

const galleryPage = Page({  })

// const additionalPage = Page({  })

const pricePage = Page({ content : PricePage()  })

const learnEngPage = Page({ content : MultiTextPage( LearnEngPageContent) })

const howwelearnPage = Page({ content : MultiTextPage( HowWeLearnPage )  })

const actualPage = Page({ content : MultiTextPage( ActualPageContent ) })

const aboutFamPage = Page({ content : MultiTextPage( AboutFamGroup ) })

const familyPricesPage = Page({   })

const englishPricesPage = Page({ content : MultiTextPage( Store.price.english )  })

const ourPathPage = Page({ content : MultiTextPage( OurPathPage ) })

const aovsfgosPage = Page({ content : MultiTextPage( AOvsFGOS )  })

const homeworkPage = Page({ content : MultiTextPage( HomeworkContent )  })

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