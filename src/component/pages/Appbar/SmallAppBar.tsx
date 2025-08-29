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
              <LocalLink text="Давайте знакомиться" to="/letsmeet"/>

              <LocalLink text="Английский язык" to="/englishlanguage" />

              <LocalLink text="Семейные классы" to="/familyclass"/>

              <LocalLink text="Статьи" to="/articles"/>

              <LocalLink text="Отзывы" to="/feedback"/>

        </Stack>
        <Stack
          direction='row'
          justifyContent='space-between'
          >
              <LocalLink text="Преподаватели" to="/teachers"/>
              
              <LocalLink text="Ответы на вопросы" to="/faq"/>

              <LocalLink text="Галерея" to="/gallery"/>

              <LocalLink text="Цены" to="/price"/>

          </Stack>
      </Stack>
   )     
}