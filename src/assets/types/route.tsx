import type { JSX } from "react";
import { Page } from "../../component/pages/Page/Page";
import MainPageContent from "../../component/pages/MainPage/MainPageContent";
import { Policy } from "../../component/pages/Page/Policy";
import { LetsMeetPage } from "../../component/pages/LetsMeet/LetsMeet";
import { BigTitlePage } from "../../component/pages/BigTitlePage/BigTitlePage";
import { Store } from "../store/store";
import type { MultitextItem } from "../../component/elements/TextBlock/MultiText/MultiTextItem";

import { PricePage } from "../../component/pages/PricesPage/PricesPage";
import { MultiTextPage } from "../../component/pages/MultiTextPage/MultiTextPage";
import { GalleryPage } from "../../component/pages/GalleryPage/GalleryPage";

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

const articleProjPage = Page({ content : MultiTextPage( Store.multitextContents.articles.project ) })

const article7habitsPage = Page({ content : MultiTextPage( Store.multitextContents.articles.page7habits ) })

const teachersPage = Page({ content : BigTitlePage({ store : Store.teachers })   })

const feedbackPage = Page({ content : BigTitlePage({ store : Store.feedback })  })

const faqPage = Page({ content : BigTitlePage({ store : Store.faq }) })

const galleryPage = Page({ content : GalleryPage({ source : [
  Store.gallery.english, Store.gallery.family
]
}) })

// const additionalPage = Page({  })

const pricePage = Page({ content : PricePage()  })

const learnEngPage = Page({ content : MultiTextPage( Store.multitextContents.english.learnEng ) })

const howwelearnPage = Page({ content : MultiTextPage( Store.multitextContents.english.howWeLearn )})

const actualPage = Page({ content : MultiTextPage( Store.multitextContents.english.actual ) })

const aboutFamPage = Page({ content : MultiTextPage( Store.multitextContents.family.aboutFamGroup ) })

const familyPricesPage = Page({  content : MultiTextPage( Store.price.family )   })

const englishPricesPage = Page({ content : MultiTextPage( Store.price.english )  })

const ourPathPage = Page({ content : MultiTextPage( Store.multitextContents.family.ourPath ) })

const aovsfgosPage = Page({ content : MultiTextPage( Store.multitextContents.family.aoVSfgos )  })

const homeworkPage = Page({ content : MultiTextPage( Store.multitextContents.family.homework )  })

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