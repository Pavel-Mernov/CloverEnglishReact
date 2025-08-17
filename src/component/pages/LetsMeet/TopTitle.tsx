import { CardMedia, Stack, Typography } from "@mui/material";
import type { KeyProps } from "../../../assets/types/keyProps";
import letsmeetTeacher from "../../../assets/images/letsMeet/letsmeet_teacher.png"
import { Colors } from "../../../assets/colors/Colors";
import { StandardTextBlock } from "../../elements/StandardTextBlock";

const RightCol = (_ : KeyProps) => {

    const firstPara = `Я, Мернова Юлия Борисовна, - организатор, идейный вдохновитель и преподаватель клуба Clover English. Занимаюсь любимым делом уже больше 20 лет. В начале своего пути работала в государственной школе и в частных детских клубах. А с 2005 года - индивидуальный предприниматель.`

    const para2 = `Я работала с детьми разных возрастов и приобрела богатый опыт. Это помогло мне создать клуб «Clover English» и сейчас помогает развивать своё комфортное образовательное пространство.`

    return (
        <Stack
            spacing='5%'
            maxWidth='70%'
        >
            <Typography
                key='1'
                variant="h3"
                fontWeight='bold'
                marginTop='20px'
                sx={{ marginTop : '10%' }}
                color={Colors.RoseDark}
            >
                ДАВАЙТЕ ЗНАКОМИТЬСЯ
            </Typography>

            <StandardTextBlock key='0' text={firstPara} /> 

            <StandardTextBlock key='1' text={para2} /> 
        </Stack>
    )
}

export function TopTitle(_ : KeyProps) {

    return (
        <Stack
            spacing="1%"
            component='div'
            direction='row'
            alignContent='center'
        >
            <CardMedia
                key='0' 
                component='img'
                sx={{ objectFit : 'contain' }}
                image={letsmeetTeacher}
            />

            <RightCol key='1' />
            
        </Stack>
    )
}