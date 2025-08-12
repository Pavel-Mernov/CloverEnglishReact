import type { JSX } from "react";
import { Page } from "../../component/allScreen/Page/Page";
import SmallMainPageContent from "../../component/smallScreen/MainPage/SmallMainPageContent";

export type SiteRoute = "/" |
          
          "/letsmeet" |

          "/policy" |

          "/englishlanguage" |

          "/familyclass" |

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
  mediumScreenChild={<SmallMainPageContent />}
/>

const letsMeet = <Page 
  // mediumScreenChild={<MediumLetsMeet />}
/>

const policyPage = <Page />

const englishPage = <Page />

const famClassPage = <Page />

const articlesPage = <Page />

const teachersPage = <Page />

const feedbackPage = <Page />

const faqPage = <Page />

const galleryPage = <Page />

const additionalPage = <Page />

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
}

export const MapListKeys = Object.keys(siteMap).map(key => key as unknown as SiteRoute);