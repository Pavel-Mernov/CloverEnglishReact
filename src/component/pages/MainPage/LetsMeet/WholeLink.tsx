
import { Stack, type SxProps } from "@mui/material"
import { Colors } from "../../../../assets/colors/Colors";
import type { SiteRoute } from "../../../../assets/types/route";
import { LeftLink } from "./LeftLink";
import { MiddleButton } from "./MiddleButton";
import { ColorButton } from "../../../elements/ColorButton/ColorButton";

const MainStackProps : SxProps = {
    display : 'flex',
    flexDirection : 'column',
    paddingTop : '5%',
    paddingInline : '2%',
    paddingBottom : '2%',
    background : Colors.PaleGreen,
    // : '100%',
}




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

export function LetsMeetLink() {
    

    return (
        <Stack 
            
            sx={MainStackProps}
            >
                <Stack
                    key='content'
                    display='flex'
                    direction='row'
                    alignSelf='center'
                    width='100%'
                    spacing='10%'
                    alignItems='center'
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
                    >
                    
                    <RightColButton content='Преподаватели' link="/teachers" />
                    <RightColButton link="/feedback" content='Отзывы' />
                    <RightColButton link="/gallery" content='Галерея' />
                    <RightColButton link="/faq" content='Ответы на частые вопросы' />
                </Stack>
            </Stack>
        </Stack>
    );
}