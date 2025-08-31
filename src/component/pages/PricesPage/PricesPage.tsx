import { Stack } from "@mui/system";
import { RoseTextBlock } from "../../elements/TextBlock/RoseTextBlock";
import { YellowButton } from "../../elements/ColorButton/DefaultRoundedButton";



export function PricePage() {

    return <Stack
        width='80%'
        alignSelf='center'
        alignItems='center'
        spacing='10%'
        >
        
        <RoseTextBlock 
            fontWeight='bold'
            key='1'
            text="Цены на 2025-2026 учебный год"
            variant="h1"
            fontSize='35px'
        />

        <Stack
            key='2'
            spacing='10%'
            alignItems='stretch'
            >
                <YellowButton 
                    content='цены на английский язык'
                    link="/price/english"
                    
                />
                <YellowButton 
                    content='цены на семейный класс'
                    link="/price/family"
                    
                />
            </Stack>
    </Stack>
}