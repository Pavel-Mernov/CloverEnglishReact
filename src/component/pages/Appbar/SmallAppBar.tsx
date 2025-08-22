import { Stack, type SxProps } from "@mui/material"

import { SmallTitle } from "./SmallTitle"
import { Colors } from "../../../assets/colors/Colors"
import { LocalLink } from "../../elements/Link/LocalLink"

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
              <LocalLink caption="Давайте знакомиться" to="/letsmeet"/>

              <LocalLink caption="Английский язык" to="/englishlanguage" />

              <LocalLink caption="Семейные классы" to="/familyclass"/>

              <LocalLink caption="Статьи" to="/articles"/>

              <LocalLink caption="Отзывы" to="/feedback"/>

        </Stack>
        <Stack
          direction='row'
          justifyContent='space-between'
          >
              <LocalLink caption="Преподаватели" to="/teachers"/>
              
              <LocalLink caption="Ответы на вопросы" to="/faq"/>

              <LocalLink caption="Галерея" to="/gallery"/>

              <LocalLink caption="Дополнительные услуги" to="/additional"/>

          </Stack>
      </Stack>
   )     
}