import { Stack, styled } from "@mui/system"
import { Colors } from "../../../assets/colors/Colors"
import { RoundedButton } from "../../elements/ColorButton/RoundedButton"
import { Typography } from "@mui/material"
import logo from "../../../assets/images/logo/logobig.png"

const Img = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  display: "block",
  marginTop: theme.spacing(2),
}));

const mainDirection = (window.screen.width < 800) ? 'column' : 'row'

const fontSize = (window.screen.width < 800) ? '80' : 'auto'

export const EngClubPricesContent = () => {
    return (
        <Stack
            width='100%'
            direction={ mainDirection }
            alignSelf='center'
            spacing='15%'
            paddingTop='5%'
            paddingBottom='5%'
          
              >

              
                <Img 
                  src={logo} 
                  alt="logo"
                  width='45%'
                  />

                <Stack 
                  direction='column'
                  width='100%'
                >
                  <Typography 
                    key='1'
                    variant="h2" 
                    fontWeight='bold' 
                    alignSelf='center'
                    fontSize={ fontSize }
                    color={ Colors.RoseDark }
                    >
                    АНГЛИЙСКИЙ КЛУБ
                  </Typography>

                  <Typography 
                    key='2'
                    alignSelf='center'
                    variant="h1" 
                    fontSize={ fontSize }
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