import Stack from "@mui/material/Stack"
import { Colors } from "../../../assets/colors/Colors";

import background from "../../../assets/images/main/UpperBackground.png"
import { Card, CardContent } from "@mui/material";
import { EngClubPricesContent } from "./EngClubContent";




export function EngClubPricesLink() {
    return (
      <Stack
        sx={{ 
          background : Colors.PaleGreen, 
          width : '100%', 
          height : '100%' ,
          borderTop : 'solid',
          // padding : '15%',
          borderTopColor : Colors.DarkGreen,
          borderTopWidth : '3px solid',
        }}
        
        >
        
        <Card 
          sx={{ 
            backgroundImage : `url(${background})`,
            backgroundSize : 'cover',
            color : Colors.PaleGreen,
            backgroundPosition : 'center',
            
          }}
          >
            <CardContent>
              <EngClubPricesContent />
            </CardContent>
          
            </Card>
          </Stack>
      

    );
}