import { Stack } from "@mui/material";
import { LocalAppBar } from "./LocalAppBar";
import { Bottom } from "./Bottom";
import type { JSX } from "react";

interface Props {
    content ?: JSX.Element,
    spacing ?: string,
}

export function Page(props : Props) : JSX.Element {


    return (
        <Stack 
            spacing={ props.spacing ?? '3%' } 
            alignItems='justify'
            >
            
            <LocalAppBar/>

            {props.content}

            <Bottom />
        </Stack>
    )
}