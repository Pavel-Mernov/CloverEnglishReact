import type { JSX } from "react";
import { Page } from "../../component/pages/Page/Page";
import MainPageContent from "../../component/pages/MainPage/MainPageContent";
import { Policy } from "../../component/pages/Page/Policy";

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

          "/additional";

type SiteMap = {
  [route in SiteRoute]: JSX.Element
};

const mainPage = <Page 
  content = {<MainPageContent />}
/>

const letsMeet = <Page 
  // content = {<MediumLetsMeet />}
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
}

export const MapListKeys = Object.keys(siteMap).map(key => key as unknown as SiteRoute);