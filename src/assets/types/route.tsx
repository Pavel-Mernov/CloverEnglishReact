import type { JSX } from "react";
import { Page } from "../../component/pages/Page/Page";
import MainPageContent from "../../component/pages/MainPage/MainPageContent";
import { Policy } from "../../component/pages/Page/Policy";
import { LetsMeetPage } from "../../component/pages/LetsMeet/LetsMeet";
import { BigTitlePage } from "../../component/pages/BigTitlePage/BigTitlePage";
import { Store } from "../store/store";

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

          "/prices/family"

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

const learnEngPage = Page({  })

const howwelearnPage = Page({  })

const actualPage = Page({  })

const aboutFamPage = Page({  })

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
  "/prices/family": familyPricesPage,
  "/ourpath": ourPathPage,
  "/aovsfgos": aovsfgosPage,
  "/homework": homeworkPage,
}

export const MapListKeys = Object.keys(siteMap).map(key => key as unknown as SiteRoute);