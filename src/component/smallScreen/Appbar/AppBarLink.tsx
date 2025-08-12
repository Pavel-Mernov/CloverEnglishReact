import type { FC } from "react";
import { Link } from "react-router-dom";
import { Caption } from "./Caption";
import type { SiteRoute } from "../../../assets/types/route";


interface Props {
    caption : string,
    to ?: SiteRoute,
}

export const AppBarLink : FC<Props> = ({ caption, to }) => {
    return (
        
            
            to ?
              <Link to={to}>
                <Caption text={caption} />
              </Link>
            :
            <Caption text={caption} />
        
    );
}