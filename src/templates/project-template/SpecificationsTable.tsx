import {
  Paper,
  PaperProps,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

type SpecificationsTableProps = PaperProps & {
  specifications: [string, string][];
  title: string;
};

export default function SpecificationsTable({
  specifications,
  title,
  ...props
}: SpecificationsTableProps) {
  return (
    <Paper {...props}>
      <Toolbar>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
      </Toolbar>
      <Table>
        <TableBody>
          {specifications.map(([key, value]) => (
            <TableRow key={key}>
              <TableCell>{key}</TableCell>
              <TableCell>{value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
