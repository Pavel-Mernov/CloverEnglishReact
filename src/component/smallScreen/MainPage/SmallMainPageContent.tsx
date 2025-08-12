
import { Container, Grid, Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import logo from "../../../assets/images/logo/logomain.png"

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

const RightBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.down("md")]: {
    marginTop: theme.spacing(3),
  },
}));

export default function SmallMainPageContent() {
  return (
      <BgContainer maxWidth="lg">
        <Grid container alignItems="center" spacing={2} >
          <Grid>
            <Box display="flex" justifyContent={{ xs: "center", lg: "flex-start" }}>
              <Img src={logo} alt="logo" className="clover-eng" />
            </Box>
          </Grid>

          <Grid>
            <RightBox className="eng-lang-title">
              <Typography variant="h3" fontWeight='bold'>
                АНГЛИЙСКИЙ КЛУБ "КЛЕВЕР"
              </Typography>

              <Typography component="h2" sx={{ mt: 1 }} className="callback-link-price">
                <Link href="/Price English.html" underline="none" color="secondary">
                  ПРАЙС 2024-2025 ГОД
                </Link>
              </Typography>
            </RightBox>
          </Grid>
        </Grid>
      </BgContainer>
  );
}
