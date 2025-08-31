import type { MultitextItem } from "../TextBlock/MultiText/MultiTextItem"

export type TableTuple<N extends 2 | 3> 
    = (N extends 2 ? [MultitextItem, MultitextItem] : 
        [MultitextItem, MultitextItem, MultitextItem] ) 

export type GenericTableProps<N extends 2 | 3> =  {
    type ?: 'table',
    header : TableTuple<N>,
    rows : TableTuple<N>[]
}

export type LocalTableProps = GenericTableProps<2> | GenericTableProps<3>