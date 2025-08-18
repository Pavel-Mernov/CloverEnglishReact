import { Stack } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";
import { RoundedButton } from "../../elements/ColorButton/RoundedButton";
import { Colors } from "../../../assets/colors/Colors";
import type { SiteRoute } from "../../../assets/types/route";

type Props = KeyProps & { backgroundColor : string, content : string, link : SiteRoute  }

const LocalRoundedButton = (props : Props) => 
    RoundedButton({
        width: '100%',
        fontSize: '25px',
        color: '#fff',
        backgroundColor: props.backgroundColor,
        content: props.content
    })

export function ButtonsStack(_ : KeyProps) {


    return <Stack 
        spacing='1%'
        alignItems='center'
        alignSelf='center'
        // width='60%'
        >
                <LocalRoundedButton 
                    backgroundColor={Colors.LightGreen} 
                    content={"изучение языка с нами"}
                    link="/learneng"                    
                />

                <LocalRoundedButton
                    backgroundColor={Colors.LightGreen} 
                    content={"как мы учим"}
                    link="/howwelearn"                    
                />

                <LocalRoundedButton
                    backgroundColor={Colors.LightGreen}
                    content="актуальность знаний английского"
                    link="/actual" />

                <LocalRoundedButton
                    backgroundColor={Colors.DarkGreen}
                    content="о семейных классах"
                    link="/aboutfem" />

                <LocalRoundedButton
                    backgroundColor={Colors.RoseDark}
                    content="наши преподаватели"
                    link="/teachers" />

                <LocalRoundedButton
                    backgroundColor={Colors.RoseDark}
                    content="отзывы"
                    link="/feedback" />

        </Stack>
}