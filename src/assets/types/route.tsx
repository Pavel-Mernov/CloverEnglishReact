import type { JSX } from "react";
import { Page } from "../../component/pages/Page/Page";
import MainPageContent from "../../component/pages/MainPage/MainPageContent";
import { Policy } from "../../component/pages/Page/Policy";
import { LetsMeetPage } from "../../component/pages/LetsMeet/LetsMeet";
import { BigTitlePage } from "../../component/pages/BigTitlePage/BigTitlePage";
import { Store } from "../store/store";
import { ArticlePage } from "../../component/pages/ArticlePage/ArticlePage";
import { LearnEngPageContent } from "../../component/pages/ArticlePage/PageContents/English/LearnEngPage";
import { HowWeLearnPage } from "../../component/pages/ArticlePage/PageContents/English/HowWeLearn";
import { ActualPageContent } from "../../component/pages/ArticlePage/PageContents/English/Actual";
import { AboutFamGroup } from "../../component/pages/ArticlePage/PageContents/FamilyClass/AboutFamGroup";

export type SiteRoute = "/" |
          
          "/letsmeet" |

          "/policy" |

          "/englishlanguage" |

          "/familyclass" |

          "/price" |

          "/articles" |

          "/teachers" |

          "/feedback" |

          "/faq" |

          "/gallery" |

          "/additional" |
          
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

const articlesPage = Page({  })

const teachersPage = Page({  })

const feedbackPage = Page({  })

const faqPage = Page({  })

const galleryPage = Page({  })

const additionalPage = Page({  })

const pricePage = Page({  })

const learnEngPage = Page({ content : ArticlePage( LearnEngPageContent) })

const howwelearnPage = Page({ content : ArticlePage( HowWeLearnPage )  })

const actualPage = Page({ content : ArticlePage( ActualPageContent ) })

const aboutFamPage = Page({ content : ArticlePage( AboutFamGroup ) })

const familyPricesPage = Page({  })

const englishPricesPage = Page({  })

const ourPathPage = Page({  })

const aovsfgosPage = Page({  })

const homeworkPage = Page({  })

export const siteMap : SiteMap = {
  "/": mainPage,
  "/letsmeet": letsMeet,
  "/policy": policyPage,
  "/englishlanguage": englishPage,
  "/familyclass": famClassPage,
  "/articles": articlesPage,
  "/teachers": teachersPage,
  "/feedback": feedbackPage,
  "/faq": faqPage,
  "/gallery": galleryPage,
  "/additional": additionalPage,
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

export const MapListKeys = Object.keys(siteMap).map(key => key as unknown as SiteRoute);