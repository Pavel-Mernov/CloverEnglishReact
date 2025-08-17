import { Stack } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";
import { RoundedButton } from "../../elements/RoundedButton";
import { Colors } from "../../../assets/colors/Colors";
import styled from "@emotion/styled";

export function ButtonsStack(_ : KeyProps) {
    const ButtonStyle = styled(RoundedButton) ({
                    upperCase : true,
                    width : '100%',
                    marginTop : '25px',
                    variant : "h3",
                    fontSize : '150%',
                    paddingInline : '10%',
                    fontWeight : 'bold' ,
                    color : Colors.White, 
                    backgroundColor : Colors.LightGreen, 
                    link : "/price", 
    })

    return <Stack 
        spacing='1%'
        alignItems='center'
        alignSelf='center'
        width='35%'
        >
                <ButtonStyle 
                    backgroundColor={Colors.LightGreen} 
                    content={"изучение языка с нами"}
                    link="/learneng"                    
                />

                <ButtonStyle 
                    backgroundColor={Colors.LightGreen} 
                    content={"как мы учим"}
                    link="/howwelearn"                    
                />

                <ButtonStyle
                    backgroundColor={Colors.LightGreen}
                    content="актуальность знаний английского"
                    link="/actual" />

                <ButtonStyle
                    backgroundColor={Colors.DarkGreen}
                    content="о семейных классах"
                    link="/aboutfem" />

                <ButtonStyle
                    backgroundColor={Colors.RoseDark}
                    content="наши преподаватели"
                    link="/teachers" />

                <ButtonStyle
                    backgroundColor={Colors.RoseDark}
                    content="отзывы"
                    link="/feedback" />

        </Stack>
}