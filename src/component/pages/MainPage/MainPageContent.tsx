
import { Container, Grid, Box, Typography, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/images/logo/logobig.png"
import { RoundedButton, ColorButton } from "../../elements/ColorButton";
import { Colors } from "../../../assets/colors/Colors";

const BgContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  alignContent: 'center',
  // при необходимости раскомментируйте и укажите путь к фону
  // backgroundImage: `url("/image/Main/bg.jpg")`,
  // backgroundSize: "cover",
  // backgroundPosition: "center",
}));

const Img = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "auto",
  display: "block",
  marginTop: theme.spacing(2),
}));

export default function MainPageContent() {
  return (
      <BgContainer maxWidth="lg">
        <Stack 
          component='div'
          // alignItems="center" 
          spacing='5%' 
          >
          <Stack // Eng Club + Prices
              width='100%'
              //marginRight='15%'
              direction='row'
              alignSelf='end'
              spacing='15%'
              //justifyContent={{ xs: "center", lg: "flex-start" }}
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
                  <Typography variant="h2" fontWeight='bold' alignSelf='center'>
                    АНГЛИЙСКИЙ КЛУБ
                  </Typography>

                  <Typography 
                    alignSelf='center'
                    variant="h1" fontWeight='bold' color={Colors.RoseDark}
                    >
                    Клевер
                  </Typography>
                  
                  <RoundedButton
                    marginTop='25px'
                    fontSize='220%'
                    fontWeight='bold' 
                    color={Colors.Gray} 
                    backgroundColor={Colors.PaleGreen} 
                    text="ЦЕНЫ 2025 - 2026" 
                    link="/price"            
                  /> 
                </Stack>

          
          </Stack> 
          
          
        </Stack>
      </BgContainer>
  );
}
