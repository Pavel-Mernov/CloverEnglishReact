import Stack from "@mui/material/Stack"
import { Colors } from "../../../assets/colors/Colors";
import { RoundedButton } from "../../elements/RoundedButton";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/images/logo/logobig.png"



const Img = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  display: "block",
  marginTop: theme.spacing(2),
}));

export function EngClubPricesLink() {
    return (
        <Stack 
          // sx={{ background : Colors.LightGray }}
          width='100%'
          direction='row'
          alignSelf='end'
          spacing='25%'
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
                    variant="h2" 
                    fontWeight='bold' 
                    alignSelf='center'
                    >
                    АНГЛИЙСКИЙ КЛУБ
                  </Typography>

                  <Typography 
                    alignSelf='center'
                    variant="h1" fontWeight='bold' 
                    color={Colors.RoseDark}
                    >
                    Клевер
                  </Typography>
                  
                  <RoundedButton
                      // upperCase
                      marginTop='25px'
                      // variant="h1"
                      // fontWeight='bold'
                      fontSize='35px' 
                      color={Colors.Gray} 
                      backgroundColor={Colors.PaleGreen} 
                      content="цены 2025 - 2026" 
                      link="/price"            
                  /> 
                </Stack>

          
          //</Stack>
    );
}