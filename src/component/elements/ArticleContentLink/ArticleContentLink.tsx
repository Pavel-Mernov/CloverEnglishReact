import { Stack, type StackProps, type SxProps } from "@mui/material"
import { Colors } from "../../../assets/colors/Colors"
import { Content } from "./Content"
import styled from "@emotion/styled"
import { RoundedButton } from "../ColorButton/RoundedButton"
import type { SiteRoute } from "../../../assets/types/route"
import { Header } from "./Header"

interface SpecialProps {
    caption ?: string,
    text ?: string | string[],
    image ?: string,
    link ?: SiteRoute,
}

type OmitProps = 'children' | 
        'style' | 
        'background' | 
        'stroke' | 
        'component' | 
        'sx' | 
        'border' | 
        'borderRadius' |
        'borderColor' |
        'borderTop' |
        'borderBottom' |
        'borderRight' |
        'borderLeft' |
        'display' |
        'classes' |
        'className' |
        'borderColor' |
        'alignItems' |
        'alignContent' // |
        // 'alignSelf'

export type OuterProps = Omit<StackProps, OmitProps> & SpecialProps

const GrayButton = styled(RoundedButton) ({
    color : '#fff',
    backgroundColor : Colors.Gray,
    
    
})

export function ArticleContentLink(props : OuterProps) {
    const { caption, link } = props

    /*
    const [prevH, setPrevH] = useState(0);

    const prevRef = useRef<any>(null);
    const obsRef = useRef<any>(null);
    useEffect(() => {
        obsRef.current = new ResizeObserver(entries => {
        const entry = entries[0];
        const h = entry?.contentRect?.height ?? 0;
        setPrevH(h);
        });
        return () => obsRef.current?.disconnect();
    }, );
    useEffect(() => {
        const el = prevRef.current;
        if (el) obsRef.current.observe(el);
        return () => el && obsRef.current.unobserve(el);
    }, prevRef.current);

    //const ownProps = 
*/
    const outerProps = {
        ...(props as Omit<OuterProps, 'marginTop' | 'top' | 'width' | 'minWidth' | 'maxWidth' >),
        border : '3px solid',
        borderRadius : '20px',
        borderColor : Colors.LightGreen,
        alignContent : 'start',
        paddingTop : '3%', 
        width : '100%',
        'alignItems' : 'start',
        // transform : `translateY(${ caption ? (- prevH) : 0 })px`,
        // transition : '120 ms'
        
    } // as SxProps

    const innerProps = {
        alignContent : 'stretch',
        padding : '2%',
    } as SxProps

    return (
        <Stack alignContent='center' alignItems='center' width={ props.width }>

            {   caption &&
                    <Header
                        // ref={prevRef}
                        // position='absolute'
                        sx={{ transform : 'translateY(50%)' }}
                        text={ caption } />
            }

            <Stack sx={ outerProps as SxProps }>

                <Stack sx={ innerProps } >



                    <Content text={props.text} />

                    <GrayButton 
                        link={link} 
                        marginTop='3%'
                        
                        backgroundColor={Colors.Gray} 
                        content="Читать полностью" 
                        color="#fff"
                        fontSize='25px' />
                </Stack>
            </Stack>            
        </Stack>

    )
}