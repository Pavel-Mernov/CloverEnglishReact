import { Stack, styled } from "@mui/system"
import { Colors } from "../../../assets/colors/Colors"
import { RoundedButton } from "../../elements/ColorButton/RoundedButton"
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

// const fontSize = (window.screen.width < 800) ? '80%' : 'auto'

export const EngClubPricesContent = () => {
    return (
        <Stack
            width='100%'
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
                    // maxWidth : '50%',
                    // maxHeight : '50%'
                  }}
                  />

              
                <Stack 
                  direction='column'
                  width='100%'
                  height = '100%'
                  sx={{
                    // position : 'absolute',
                    backgroundImage : `url(${paint})`,
                    backgroundSize : 'stretch',
                    objectFit : 'stretch',
                    backgroundPosition : 'center',
                    pointerEvents : 'none',
                    padding : '20%',
                    paddingLeft : '25%',
                    paddingRight : '25%',
                    width : '100%',
                    

                    backgroundRepeat : 'no-repeat',
                    backgroundColor : 'transparent',
                    // color : Colors.PaleGreen,
                    zIndex : '1',
                  }}
                >
                    <Typography 
                      key='1'
                      variant="h2" 
                      fontWeight='bold' 
                      alignSelf='center'
                      fontSize='290%'
                      fontFamily='"Backwards Sans Regular Bold", sans-serif'
                      color={ Colors.RoseDark }
                      >
                      АНГЛИЙСКИЙ КЛУБ
                    </Typography>

                    <Typography 
                      key='2'
                      alignSelf='center'
                      variant="h1" 
                      fontFamily='"TT Berlinerins Trial", sans-serif'
                      fontSize='240'
                      fontWeight='bold' 
                      color={Colors.RoseDark}
                      >
                      Клевер
                    </Typography>
                    
                    <RoundedButton
                        // upperCase
                        key='5'
                        marginTop='25px'
                        // variant="h1"
                        // fontWeight='bold'
                        fontSize='35px' 
                        color={Colors.Gray} 
                        backgroundColor={Colors.PaleGreen} 
                        content="цены 2025 - 2026" 
                        onClick="/price"            
                    />
                  </Stack>

  
                
                </Stack>
    )
}