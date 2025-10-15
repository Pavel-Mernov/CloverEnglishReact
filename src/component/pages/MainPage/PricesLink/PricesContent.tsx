import { Stack, styled, type SxProps } from "@mui/system"

import logo from "../../../../assets/images/logo/logobig.png"

import { EngClubCloverLayout } from "./EngClubCloverLayout";
import paintEngClub from "../../../../assets/images/main/mazokEngClubMobile.png"

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




const paintSxMobile : SxProps = {
  // ...paintSxCommon,
  padding : '8%',
  paddingTop : '36%',
  paddingBottom : '36%',
  // maxWidth : '100%',
  // maxWidth : '100vw',
}

export const PricesContent = () => {
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

              
                  {
                    (!isMobile) && 
                      <EngClubCloverLayout />
                  }

                  {
                    isMobile && 
                      <Img
                        src={ paintEngClub }
                        alt="Английский Клуб Клевер"

                        sx={paintSxMobile} 
                        />
                  }
                
                </Stack>
    )
}