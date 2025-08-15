
import { Stack } from "@mui/material";
import { EngClubPricesLink } from "./EngClubPricesLink";
import { LetsMeetLink } from "./LetsMeet/WholeLink";



export default function MainPageContent() {
  return (
      <Stack

        >
        <Stack 
          component='div'
          alignItems="center" 
          spacing='5%' 
          >
 
          <EngClubPricesLink />

          <LetsMeetLink />
          
        </Stack>
      </Stack>
  );
}
