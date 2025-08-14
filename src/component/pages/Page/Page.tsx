import { Stack } from "@mui/material";
import { LocalAppBar } from "./LocalAppBar";
import { Bottom } from "./Bottom";
import type { JSX } from "react";

interface Props {
    content ?: JSX.Element
}

export function Page(props : Props) : JSX.Element {


    return (
        <Stack spacing="3%">
            <LocalAppBar/>

            {props.content}

            <Bottom />
        </Stack>
    )
}