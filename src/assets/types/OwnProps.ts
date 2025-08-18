import type { CommonProps } from "@mui/material/OverridableComponent";

export type OwnProps<BaseProps, SpecialProps, ExcludeProps extends string | number | symbol> 
    = Omit<BaseProps & CommonProps, ExcludeProps> & SpecialProps