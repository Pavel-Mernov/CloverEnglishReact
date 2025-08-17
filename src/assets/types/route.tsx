import type { JSX } from "react";
import { Page } from "../../component/pages/Page/Page";
import MainPageContent from "../../component/pages/MainPage/MainPageContent";
import { Policy } from "../../component/pages/Page/Policy";
import { LetsMeetPage } from "../../component/pages/LetsMeet/LetsMeet";

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
          
          "/aboutfem";

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

const englishPage = Page({  })

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
  "/learneng" : learnEngPage,
  "/howwelearn" : howwelearnPage,
  "/actual" : actualPage,
  "/aboutfem" : aboutFemPage,
  
}

export const MapListKeys = Object.keys(siteMap).map(key => key as unknown as SiteRoute);