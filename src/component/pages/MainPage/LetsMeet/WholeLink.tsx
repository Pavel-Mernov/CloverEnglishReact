
import { Stack } from "@mui/material"
import { Colors } from "../../../../assets/colors/Colors";
import type { SiteRoute } from "../../../../assets/types/route";
import { LeftLink } from "./LeftLink";
import { MiddleButton } from "./MiddleButton";
import { ColorButton } from "../../../elements/ColorButton/ColorButton";

/*
const MainStackProps : SxProps = {
    display : 'flex',
    flexDirection : 'column',
    paddingTop : '5%',
    paddingInline : '2%',
    paddingBottom : '2%',
    background : Colors.PaleGreen,
    alignItems : 'center',
    alignSelf : 'center',
    alignContent : 'center'
    // : '100%',
}
*/



interface RightColProps {
    link : SiteRoute,
    content : any,
}

const RightColButton = (props : RightColProps) => 
    ColorButton({
        backgroundColor: Colors.White,
        borderRadius: '3vh',
        color: Colors.Gray,
        variant: "h5",
        fontSize: '130%',
        padding: '2vh',
        onClick: props.link,
        content: props.content,
})

const mainDirection = (window.screen.width >= 800) ? 'row' : 'column'

export function LetsMeetLink() {
    

    return (

                <Stack
                    key='content'
                    component='div'
                    display='flex'
                    direction={ mainDirection }
                    sx={{
                        background : Colors.PaleGreen,
                    }}
                    padding='5%'
                    // background={Colors.PaleGreen}
                    // width='100%'
                    spacing='10%'
                    alignItems='center'
                    alignContent='center'
                >
                <LeftLink />

                <Stack 
                    key='1'
                    spacing='30px' 
                    // width='100%' 
                    alignSelf='center'
                    >
                        <MiddleButton 
                            link='/englishlanguage' 
                            caption='Английский язык' 
                            key='0'
                        />
                        <MiddleButton 
                            link='/familyclass' 
                            caption='Семейный класс'
                            key='1'
                        />
                </Stack>
                <Stack
                    key='2' 
                    spacing='5%' 
                    alignSelf='center'
                    >
                    
                    <RightColButton content='Преподаватели' link="/teachers" />
                    <RightColButton link="/feedback" content='Отзывы' />
                    <RightColButton link="/gallery" content='Галерея' />
                    <RightColButton link="/faq" content='Ответы на частые вопросы' />
                </Stack>
            </Stack>
    );
}