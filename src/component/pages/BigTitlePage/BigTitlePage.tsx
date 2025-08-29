import { Stack } from "@mui/system";
import type { KeyProps } from "../../../assets/types/keyProps";
import type { PageStore } from "../../../assets/store/store";
import { SingleTitlePage } from "./SingleTitle";

type Props = KeyProps & { store : PageStore | PageStore[] }

export function BigTitlePage(props : Props) {
    const { store } = props

    if (Array.isArray( store )) {
        return (
            <Stack 
                width='100%'
                spacing='30%'
                >
                    {
                        store.map((elem, i) => {
                            return <SingleTitlePage key={ i } store={ elem } />
                        })
                    }
            </Stack>
        )
    }

    return <SingleTitlePage store={ store } />
}

