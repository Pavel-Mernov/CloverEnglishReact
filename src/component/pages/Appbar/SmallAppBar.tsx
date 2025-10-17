import { Stack, type SxProps } from "@mui/material"

import { SmallTitle } from "./SmallTitle"
import { Colors } from "../../../assets/colors/Colors"
import { LocalLink } from "../../elements/Link/LocalLink"
import { useState } from "react"
import { ContactButtons } from "./ContactButtons"

const isMobile = (window.screen.width < 800)

export const SmallAppBar : React.FC = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)

    const columnStackProps : SxProps = {
      display : 'flex',
      flexDirection : 'column',

      alignItems : isMobile ? 'center' : 'auto',

      

      // width : '100%',
      paddingTop : isMobile ? 0 : '5%',
      paddingInline : isMobile ? '0%' : '1%',
      paddingBottom : isMobile ? '3%' : '2%',
      background : Colors.PaleGreen,
    }

    const displayDirection = isMobile ? 'column' : 'row'
      
    return (
      <Stack
        spacing={ isMobile ? 'auto' : '1%' }
        width={ isMobile ? '100%' : 'auto' }
        sx={columnStackProps}
        >
        <SmallTitle key='0' onClickMenu={() => setMenuOpen(!isMenuOpen)} />

        {
          isMobile && <ContactButtons key='01' size='40px' />
        }
        
        { (!isMobile || isMenuOpen) &&

            <Stack
              key='1'
              direction={ displayDirection } 
              sx={{
                // maxWidth : '100%',
                // marginTop : isMobile ? '30%' : 'auto',
                paddingTop : isMobile ? '10%' : 'auto',
              }}
              display='flex'
              alignItems='center'
              justifyContent='space-between'
              >     
                  <LocalLink text="Давайте знакомиться" to="/letsmeet"/>

                  <LocalLink text="Английский язык" to="/englishlanguage" />

                  <LocalLink text="Семейные классы" to="/familyclass"/>

                  <LocalLink text="Статьи" to="/articles"/>

                  <LocalLink text="Отзывы" to="/feedback"/>

                  <LocalLink text="Преподаватели" to="/teachers"/>
                  
                  <LocalLink text="Ответы на вопросы" to="/faq"/>

                  <LocalLink text="Галерея" to="/gallery"/>

                  <LocalLink text="Цены" to="/price"/>

            </Stack>

        }


      </Stack>
   )     
}