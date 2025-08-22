import type { FC } from "react";
import { Link } from "react-router-dom";
import { Caption } from "./Caption";
import type { SiteRoute } from "../../../assets/types/route";
import { Box, type TypographyVariant } from "@mui/material";


interface Props {
    caption : string,
    to ?: SiteRoute,
    variant ?: TypographyVariant,
    fontSize ?: string | number,
    alignSelf ?: string,
}

export const LocalLink : FC<Props> = ({ caption, to, variant, fontSize }) => {
    return (
        
            
            to ?
              <Box alignSelf="center">
                <Link to={to}>
                  <Caption text={caption} variant={ variant } fontSize={ fontSize } />
                </Link>
              </Box>

            :
            <Caption text={caption} />
        
    );
}