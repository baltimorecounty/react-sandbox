import React from "react";
import {
  TableHead,
  TableHeadCell,
  TableRow
} from "@baltimorecounty/dotgov-components";

const RoadClosingHeaders = props => {
  return (
    <TableHead>
      <TableRow>
        <TableHeadCell key="BlankHeader"></TableHeadCell>
        <TableHeadCell key="FirstNameHeader">Road</TableHeadCell>
        <TableHeadCell key="LastNameHeader">Community</TableHeadCell>
        <TableHeadCell key="PositionHeader">Reason</TableHeadCell>
      </TableRow>
    </TableHead>
  );
};

export default RoadClosingHeaders;
