import { Stack } from "@mui/system";
import { Gallery } from "../../elements/Gallery/Gallery";
import { MultiTextBlock } from "../../elements/TextBlock/MultiText/MultitextBlock";

interface Source {
    title ?: string,
    source : string[]
}

interface Props {
    source ?: Source | Source[]
}

export function GalleryPage(props : Props) {
    const { source } = props

    return (
        <Stack 
            alignItems='center'
            alignSelf='center'
            width='80%'
            spacing='15%'
        >
            <MultiTextBlock
                textAlign='center'
                alignSelf="center"
                children={[
                    {
                        fontSize : '40px',
                        roseText : 'Галерея'
                    }
                ]}
            />

            {
                source && !Array.isArray(source) &&
                    <Gallery key='01' title={ source.title } images={ source.source } />
            }
            {
                source && Array.isArray(source) &&
                    source.map((item, i) => 
                        <Gallery key={`gal_${i}`} title={ item.title } images={ item.source } 
                    />)                
            }
        </Stack>
    )
}