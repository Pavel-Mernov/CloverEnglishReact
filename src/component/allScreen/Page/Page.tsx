import { Stack } from "@mui/material";
import { LocalAppBar } from "./LocalAppBar";
import { Bottom } from "./Bottom";
import type { JSX } from "react";

interface Props {
    mobileScreenChild ?: JSX.Element,

    smallScreenChild ?: JSX.Element,

    mediumScreenChild ?: JSX.Element,

    largeScreenChild ?: JSX.Element
}

export function Page(props : Props) : JSX.Element {

        const rootElement = 
        (window.innerWidth > 1920) ? props.largeScreenChild :

        (window.innerWidth < 800) ? props.mobileScreenChild :
    
        (window.innerWidth < 1280) ? props.smallScreenChild :

        props.mediumScreenChild;

    return (
        <Stack spacing="3%">
            <LocalAppBar/>

            {rootElement}

            <Bottom />
        </Stack>
    )
}