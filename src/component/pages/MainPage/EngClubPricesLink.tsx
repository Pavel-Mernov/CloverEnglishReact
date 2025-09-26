import Stack from "@mui/material/Stack"
import { Colors } from "../../../assets/colors/Colors";

import background from "../../../assets/images/main/UpperBackground.png"
import { EngClubPricesContent } from "./EngClubContent";




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
            zIndex : '0',
          }}
          >
              <EngClubPricesContent />
            
          
            </Stack>
          </Stack>
      

    );
}