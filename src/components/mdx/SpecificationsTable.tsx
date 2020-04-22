import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";

type Props = {
  title: string;
  children?: string[][];
};

export default function SpecificationsTable({ title, children }: Props) {
  return (
    <Paper>
      <Toolbar>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Toolbar>
      <Table>
        <TableBody>
          {children?.map(cells => (
            <TableRow key={cells[0]}>
              {cells.map(x => (
                <TableCell key={x}>{x}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
