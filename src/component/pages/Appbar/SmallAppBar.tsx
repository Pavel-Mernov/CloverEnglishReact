import { Stack, type SxProps } from "@mui/material"

import { AppBarLink } from "./AppBarLink"
import { SmallTitle } from "./SmallTitle"
import { Colors } from "../../../assets/colors/Colors"

export const SmallAppBar : React.FC = () => {

    const columnStackProps : SxProps = {
      display : 'flex',
      flexDirection : 'column',
      paddingTop : '5%',
      paddingInline : '2%',
      paddingBottom : '2%',
      background : Colors.PaleGreen,
    }

    
      
    return (
      <Stack
        spacing='1%'
        sx={columnStackProps}
        >
        <SmallTitle />

        

        <Stack
          direction='row' 
          // display='flex'
          justifyContent='space-between'
          >     
              <AppBarLink caption="Давайте знакомиться" to="/letsmeet"/>

              <AppBarLink caption="Английский язык" to="/englishlanguage" />

              <AppBarLink caption="Семейные классы" to="/familyclass"/>

              <AppBarLink caption="Статьи" to="/articles"/>

              <AppBarLink caption="Отзывы" to="/feedback"/>

        </Stack>
        <Stack
          direction='row'
          justifyContent='space-between'
          >
              <AppBarLink caption="Преподаватели" to="/teachers"/>
              
              <AppBarLink caption="Ответы на вопросы" to="/faq"/>

              <AppBarLink caption="Галерея" to="/gallery"/>

              <AppBarLink caption="Дополнительные услуги" to="/additional"/>

          </Stack>
      </Stack>
   )     
}