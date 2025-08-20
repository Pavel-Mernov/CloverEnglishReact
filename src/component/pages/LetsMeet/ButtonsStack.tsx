import { Stack } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";
import { Colors } from "../../../assets/colors/Colors";
import { WhiteTextButton } from "../../elements/ColorButton/DefaultRoundedButton";



export function ButtonsStack(_ : KeyProps) {


    return <Stack 
        spacing='1%'
        alignItems='center'
        alignSelf='center'
        // width='60%'
        >
                <WhiteTextButton 
                    backgroundColor={Colors.LightGreen} 
                    content={"изучение языка с нами"}
                    link="/learneng"                    
                />

                <WhiteTextButton
                    backgroundColor={Colors.LightGreen} 
                    content={"как мы учим"}
                    link="/howwelearn"                    
                />

                <WhiteTextButton
                    backgroundColor={Colors.LightGreen}
                    content="актуальность знаний английского"
                    link="/actual" />

                <WhiteTextButton
                    backgroundColor={Colors.DarkGreen}
                    content="о семейных классах"
                    link="/aboutfam" />

                <WhiteTextButton
                    backgroundColor={Colors.RoseDark}
                    content="наши преподаватели"
                    link="/teachers" />

                <WhiteTextButton
                    backgroundColor={Colors.RoseDark}
                    content="отзывы"
                    link="/feedback" />

        </Stack>
}