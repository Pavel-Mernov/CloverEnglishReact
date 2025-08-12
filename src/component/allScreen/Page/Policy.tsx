import { Stack, Typography } from "@mui/material";
import type { JSX } from "react";
import { LocalAppBar } from "./LocalAppBar";

export function Policy() : JSX.Element {

    return (
        <Stack 
            sx={{ background : '#DFDFDF', height : '100vh' }}>
                
            <LocalAppBar />

            <Stack spacing='2%' padding='2%'>
                <Typography align="center" variant="h4" fontWeight='bold'>
                    Политика конфиденциальности персональных данных
                </Typography>
            </Stack>
        </Stack>
    )
}