import { Stack, Typography } from "@mui/material";
import type { KeyProps } from "../../../../assets/types/keyProps";
import { Colors } from "../../../../assets/colors/Colors";
import paint from "../../../../assets/images/main/paint.png"
const isMobile = false // this is designed not for mobile version

const paintSx = 
    {
      backgroundImage : `url(${paint})`,
      
      objectFit : 'contain',
      backgroundPosition : 'center',
      pointerEvents : 'none',

      backgroundRepeat : 'no-repeat',
      backgroundColor : 'transparent',
                    
      zIndex : '1',
      padding : '5%',
      paddingTop : '12%',
      paddingBottom : '12%',
      width : '70%',
      height : '70%',


    }

export function EngClubCloverLayout(_ : KeyProps) {
    return (
        <Stack 
                  
                  direction='column'
                  // width={ isMobile ? '100%' : '70%'}
                  // height = { isMobile ? 'auto' : '70%' }
                  sx={ paintSx }
                >
                    <Typography 
                      key='1'
                      variant="h2" 
                      // fontWeight='bold' 
                      alignSelf='center'
                      fontSize={ isMobile ? '240%' : '50px' }
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
    )
}