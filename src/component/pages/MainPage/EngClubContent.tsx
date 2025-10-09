import { Stack, styled } from "@mui/system"
import { Colors } from "../../../assets/colors/Colors"
import { Typography } from "@mui/material"
import logo from "../../../assets/images/logo/logobig.png"
import paint from "../../../assets/images/main/paint.png"

const Img = styled("img")(({ theme }) => ({
  // maxWidth: "100%",
  height: "auto",
  display: "block",
  objectFit : 'contain',
  marginTop: theme.spacing(2),
}));

const mainDirection = (window.screen.width < 800) ? 'column' : 'row'

const mainWidth = (window.screen.width < 800) ? '100%' : '80%'

// const fontSize = (window.screen.width < 800) ? '80%' : 'auto'

/*
const PriceButton = (props : { key ?: string | number }) => {

  const fontSize = (window.screen.width < 800) ? '22px' : '35px'

  const marginTop = (window.screen.width < 800) ? '10px' : '25px'

  return              <RoundedButton
                        // upperCase
                        key={ props.key }
                        marginTop={ marginTop }
                        // variant="h1"
                        // fontWeight='bold'
                        fontSize={ fontSize } 
                        color={Colors.Gray} 
                        backgroundColor={Colors.PaleGreen} 
                        content="цены 2025 - 2026" 
                        onClick="/price"            
                    />
}

*/

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
                  sx={{
                    // position : 'absolute',
                    backgroundImage : `url(${paint})`,
                    backgroundSize : 'stretch',
                    // objectFit : 'contain',
                    backgroundPosition : 'center',
                    pointerEvents : 'none',
                    padding : '5%',
                    paddingTop : '10%',
                    paddingBottom : '8%',
                    width : '70%',
                    

                    backgroundRepeat : 'no-repeat',
                    backgroundColor : 'transparent',
                    // color : Colors.PaleGreen,
                    zIndex : '1',
                  }}
                >
                    <Typography 
                      key='1'
                      variant="h2" 
                      // fontWeight='bold' 
                      alignSelf='center'
                      fontSize={ (window.screen.width < 800) ? '220%' : '50px' }
                      fontFamily='"Backwards Sans Bold Cond", sans-serif'
                      color={ Colors.RoseDark }
                      >
                      АНГЛИЙСКИЙ КЛУБ
                    </Typography>

                    <Typography 
                      key='2'
                      alignSelf='center'
                      variant="h1" 
                      fontFamily='"TT Berlinerins", sans-serif'
                      fontSize={ (window.screen.width < 800) ? '135' : '90px' }
                      // fontWeight='' 
                      color={Colors.RoseDark}
                      >
                      КЛЕВЕР
                    </Typography>
                    
                    
                  </Stack>

  
                
                </Stack>
    )
}