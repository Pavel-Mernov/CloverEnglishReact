import { Stack } from "@mui/system";
import type { KeyProps } from "../../../assets/types/keyProps";

import telegramPhoto from "../../../assets/images/main/contacts/telegram.png"
import whatsappPhoto from "../../../assets/images/main/contacts/whatsapp.png"
import phonePhoto from "../../../assets/images/main/contacts/phone.png"

import { CardMedia } from "@mui/material";
import { useState } from "react";

function ContactButton(props : KeyProps & { image : string, link : string, size ?: number | string }) {
    const { image, link, size } = props

    // const size = '50px'

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

export function ContactButtons(props : KeyProps & { size ?: number | string }) {

    const { size } = props

    return (
        <Stack
            direction='row'
            // width='100%'
            spacing='10px'
        >
            <ContactButton 
                image={telegramPhoto} 
                size={ size }
                link="tg://resolve?domain=@YuliaKorolev/"            
            />

            <ContactButton 
                image={whatsappPhoto} 
                size={ size }
                link="https://wa.me/+79165027198"            
            />

            <ContactButton 
                image={phonePhoto} 
                size={ size }
                link="tel: +79165027198"            
            />
        </Stack>
    )
}