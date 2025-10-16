import { Stack } from "@mui/system";
import type { KeyProps } from "../../../assets/types/keyProps";

import telegramPhoto from "../../../assets/images/main/contacts/telegram.png"
import whatsappPhoto from "../../../assets/images/main/contacts/whatsapp.png"
import phonePhoto from "../../../assets/images/main/contacts/phone.png"

import { CardMedia } from "@mui/material";
import { useState } from "react";

function ContactButton(props : KeyProps & { image : string, link : string }) {
    const { image, link } = props

    const size = '50px'

    const [isMouseEntered, setMouseEntered] = useState(false)

    // const navigate = useNavigate()

    // const onClick = () => navigate(link)

    return (
        <Stack
            component='a'
            href={ link }
            // onClick={ onClick }
            sx={{
                width : size,
                height : size,
                transform : isMouseEntered ? 'scale(1.02)' : 'scale(1)',
                background : 'white',
                borderRadius : '50%',
                // padding : '50%'
            }}
            onMouseEnter={() => setMouseEntered(true)}
            onMouseLeave={() => setMouseEntered(false)}
        >
            <CardMedia
                // onClick={ onClick }
                sx={{
                    transform : 'scale(1)'
                }}
                component='img'
                width={ size }
                height={ size }
                src={ image }
            />
        </Stack>
    )
}

export function ContactButtons() {

    return (
        <Stack
            direction='row'
            // width='100%'
            spacing='10px'
        >
            <ContactButton 
                image={telegramPhoto} 
                link="tg://resolve?domain=@YuliaKorolev/"            
            />

            <ContactButton 
                image={whatsappPhoto} 
                link="https://wa.me/+79165027198"            
            />

            <ContactButton 
                image={phonePhoto} 
                link="tel: +79165027198"            
            />
        </Stack>
    )
}