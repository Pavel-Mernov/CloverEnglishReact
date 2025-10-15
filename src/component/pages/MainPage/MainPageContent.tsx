
import { Stack } from "@mui/material";
import { EngClubPricesLink } from "./PricesLink/EngClubPricesLink";
import { LetsMeetLink } from "./LetsMeet/WholeLink";
import { ContactsAndMap } from "./ContactsMap/WholePart";



export default function MainPageContent() {
  return (
      <Stack
        // sx={{ maxWidth : '100%' }}
        >
        <Stack 
          component='div'
          alignItems="center" 
          // spacing='5%' 
          >
 
          <EngClubPricesLink />

          <LetsMeetLink />

          <ContactsAndMap key='2' />
          
        </Stack>
      </Stack>
  );
}
