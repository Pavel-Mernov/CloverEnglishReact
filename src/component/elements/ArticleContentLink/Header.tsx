import type { StackBaseProps, StackProps, SxProps } from "@mui/system";
import type { OwnProps } from "../../../assets/types/OwnProps";
import { Stack, Typography } from "@mui/material";
import { Colors } from "../../../assets/colors/Colors";

interface LocalProps {
    text : string,
} 

type OmitProps = 'color' | 'background' | 'backgroundColor' | "component" 
    | "children" | 'alignItems' | 'alignContent' | 'alignSelf' | 'minWidth' | 'width' | 'maxWidth'

type Props = OwnProps<StackProps & StackBaseProps, LocalProps, OmitProps>

type OmitSxProps = Omit<SxProps, OmitProps>

export function Header(props : Props) {
        const { text, sx } = props

        const omitSx = sx as OmitSxProps

        const newProps : SxProps = {
            ...(props as OmitSxProps),
            ...omitSx,
            backgroundColor : Colors.LightGreen,
            color : "#fff",
            minWidth : '60%',
            maxWidth : '80%',
            alignContent : 'center',
            alignItems : 'center',
            alignSelf : 'center',
            paddingBlock : '2vh',
            borderRadius : '50vh',
        } as SxProps

        return (
            <Stack
                component='a'
                
                // backgroundColor=""
                sx={newProps} >
                    <Typography
                        variant="h1"
                        fontSize='30px'
                        fontWeight='bold'>
                            { text }
                        </Typography>
            </Stack>
        )
}