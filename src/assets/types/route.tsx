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
          
          "/aboutfem" |

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

const famClassPage = Page({  })

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

const aboutFemPage = Page({  })

const familyPricesPage = Page({  })

const englishPricesPage = Page({  })

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
  "/aboutfem": aboutFemPage,
  "/price/english": englishPricesPage,
  "/prices/family": familyPricesPage,
}

export const MapListKeys = Object.keys(siteMap).map(key => key as unknown as SiteRoute);