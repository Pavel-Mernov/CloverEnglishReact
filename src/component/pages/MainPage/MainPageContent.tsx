
import { Stack } from "@mui/material";
import { EngClubPricesLink } from "./EngClubPricesLink";
import { LetsMeetLink } from "./LetsMeet/WholeLink";
import { ContactsAndMap } from "./ContactsMap/WholePart";



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

          <ContactsAndMap key='2' />
          
        </Stack>
      </Stack>
  );
}
