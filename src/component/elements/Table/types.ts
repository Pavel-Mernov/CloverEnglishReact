import type { MultitextItem } from "../TextBlock/MultiText/MultiTextItem"

export type HeaderTuple<N extends 2 | 3> 
    = (N extends 2 ? [string, string] : 
        [string, string, string] )

export type RowTuple<N extends 2 | 3> 
    = (N extends 2 ? [MultitextItem, MultitextItem] : 
        [MultitextItem, MultitextItem, MultitextItem] ) 

export type GenericTableProps<N extends 2 | 3> =  {
    type ?: 'table',
    header : Readonly<HeaderTuple<N>>,
    rows : Readonly<RowTuple<N>>[]
}

export type LocalTableProps = GenericTableProps<2> | GenericTableProps<3>