
import openSansRegular from "../../assets/fonts/OpenSans-Regular.ttf"
import backRegular from "../fonts/TT Backwards Sans-Regular.ttf"
import backBold from "../fonts/TT Backwards Sans-Bold.ttf"
import berlinerins from "../fonts/TT Berlinerins Trial Grotesk.otf"

interface FontInfo {
  fontFamily : string,
  src : string,
  fontDisplay ?: string,
  fontSize ?: string,
  fontWeight ?: string,
  fontStyle ?: string,
}

const fonts : FontInfo[] = [
  {
    fontFamily: 'TT Berlinerins Trial',
    src: `url(${berlinerins}) format("opentype")`,
    fontDisplay: 'swap',
    fontSize: '30px',
  }, 

  {
    fontFamily: 'Backwards Sans Regular Bold',
    src: `url(${backRegular}) format("truetype")`,
    
    fontWeight: '1000',
    // fontStyle: 'bold',
    fontDisplay: 'swap',
    fontSize: '30px'
  },
  
  {
    fontFamily: 'Backwards Sans Bold Cond',
    src: `url(${backBold}) format("truetype")`,
    
    fontWeight: '1000',
    // fontStyle: 'bold',
    fontDisplay: 'swap',
    fontSize: '30px'
  },

  {
    fontFamily : 'Open Sans',
    src : `url(${openSansRegular}) format("truetype")`,
    fontWeight : '1000',
    // fontStyle : 'normal',
    fontDisplay: 'swap',
    fontSize: '40px',
  }
]

/*
export const BackSansRegular = {
  fontFamily : 'BackSansRegular',
  src : backRegular,
  // fontWeight : 1000,
  fontStyle : 'normal',
  fontDisplay: 'swap',
  fontSize: '350',
}
*/





type Document = {
  fonts : {
    add : (fontFace : FontFace) => void
  }
  getElementById : (id : string) => any,
}


export function loadFonts(document : Document)  {
  // let fontFaces: FontFace[] = []

  fonts.forEach(async (font) => {
    return new FontFace(font.fontFamily, font.src, 
      /*{
      weight: font.fontWeight,
      style: font.fontStyle
    }*/
  ).load().then(fontFace => {
      document.fonts.add(fontFace)
  })
  })

  
  return document
}





