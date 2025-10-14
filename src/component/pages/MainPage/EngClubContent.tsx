import { maxWidth, Stack, styled } from "@mui/system"
import { Colors } from "../../../assets/colors/Colors"
import { Typography } from "@mui/material"
import logo from "../../../assets/images/logo/logobig.png"
import paint from "../../../assets/images/main/paint.png"

const isMobile = (window.screen.width < 800)

const Img = styled("img")(({ theme }) => ({
  // maxWidth: "100%",
  height: "auto",
  display: "block",
  objectFit : 'contain',
  marginTop: theme.spacing(2),
}));

const mainDirection = isMobile ? 'column' : 'row'

const mainWidth = isMobile ? '100%' : '80%'

const paintSxCommon = {
      backgroundImage : `url(${paint})`,
      backgroundSize : 'stretch',
      // objectFit : 'contain',
      backgroundPosition : 'center',
      pointerEvents : 'none',

      backgroundRepeat : 'no-repeat',
      backgroundColor : 'transparent',
                    
      zIndex : '1',
}

const paintSxBig = 
    {
      ...paintSxCommon,

      padding : '5%',
      paddingTop : '12%',
      paddingBottom : '10%',
      width : '70%',
   


    }

const paintSxMobile = {
  ...paintSxCommon,

  padding : '30%',
  // width : '100%',
  maxWidth : '100vw',
}

export const EngClubPricesContent = () => {
    return (
        <Stack
            width={ mainWidth }
            direction={ mainDirection }
            alignSelf='center'
            // spacing='3%'
            paddingTop='1%'
            paddingBottom='1%'
            // alignContent='stretch'
            // alignItems='stretch'
          
              >

              
                <Img 
                  src={logo} 
                  alt="logo"
                  
                  sx={{
                    maxWidth : '50%',
                    maxHeight : '50%',
                    alignSelf : 'center',
                  }}
                  />

              
                <Stack 
                  
                  direction='column'
                  width='70%'
                  height = '70%'
                  sx={isMobile ? paintSxMobile 
                      : paintSxBig }
                >
                    <Typography 
                      key='1'
                      variant="h2" 
                      // fontWeight='bold' 
                      alignSelf='center'
                      fontSize={ isMobile ? '300%' : '50px' }
                      fontFamily='"Backwards Sans Bold Cond", sans-serif'
                      color={ Colors.RoseDark }
                      >
                      АНГЛИЙСКИЙ КЛУБ
                    </Typography>

                    <Typography 
                      key='2'
                      alignSelf='center'
                      variant={ isMobile ? 'h2' : "h1" } 
                      fontFamily={ isMobile ? '"Backwards Sans Bold Cond", sans-serif' : '"TT Berlinerins", sans-serif' }
                      
                      fontSize={ isMobile ? '75' : '90px' }
                      // fontWeight='' 
                      color={Colors.RoseDark}
                      >
                      КЛЕВЕР
                    </Typography>
                    
                    
                  </Stack>

  
                
                </Stack>
    )
}