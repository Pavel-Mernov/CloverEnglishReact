import type { GenericTableProps } from "./types";
import {
  Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Paper
} from "@mui/material";
import { TextItem } from "../TextBlock/MultiText/TextItem";
import { Colors } from "../../../assets/colors/Colors";
import { TextBlock } from "../TextBlock/TextBlock";


export function LocalTable<N extends 2 | 3>(props : GenericTableProps<N>) {
    const { header, rows } = props

  return (
    <TableContainer component={Paper}>
      <Table style={{ 
                width : '80%', 
                alignItems : 'center', 
                justifyContent : 'center', 
                 
                
                padding : '10px',
            }}>
        <TableHead style={{ background : Colors.Gray }}>
          <TableRow>
            {
                header.map((item, i) => {
                    return <TableCell key={`h_${i}`}>
                        <TextBlock 
                          text={item}
                          upperCase
                          color='#fff'
                          fontWeight='bold'
                          variant="h2"
                          fontSize='27px'                        
                        />
                    </TableCell>
                })
            }
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, idx) => (
            <TableRow key={idx}>
              
              {
                row.map((item, j) => (
                    <TableCell key={`row_${idx}_it_${j}`}>
                        <TextItem item={item} />
                    </TableCell>
                ))
              }
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

