import type { JSX } from "react";
import { SmallAppBar } from "../Appbar/SmallAppBar";

export function LocalAppBar() : JSX.Element {
        if (window.innerWidth > 1920) {
    
        }
    
        if (window.innerWidth < 800) {
    
        }
        
        if (window.innerWidth < 1280) {
    
        }
    
        return <SmallAppBar />
}