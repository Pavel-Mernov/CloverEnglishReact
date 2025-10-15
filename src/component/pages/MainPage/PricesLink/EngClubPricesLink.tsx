import Stack from "@mui/material/Stack"
import { Colors } from "../../../../assets/colors/Colors";

import background from "../../../../assets/images/main/UpperBackground.png"
import { PricesContent } from "./PricesContent";




export function EngClubPricesLink() {
    return (
      <Stack
        sx={{ 
          background : Colors.PaleGreen, 
          width : '100%', 
          // height : '100%' ,
          borderTop : 'solid',
          // padding : '15%',
          borderTopColor : Colors.DarkGreen,
          borderTopWidth : '3px solid',
        }}
        
        >
        
        <Stack 
          sx={{ 
            backgroundImage : `url(${background})`,
            backgroundSize : 'cover',
           backgroundColor : 'transparent',
            // position : 'absolute',
            backgroundPosition : 'center',
            backgroundRepeat : 'no-repeat',
            border: 'transparent',
            // height : '50%',
            zIndex : '0',
          }}
          >
              <PricesContent />
            
          
            </Stack>
          </Stack>
      

    );
}