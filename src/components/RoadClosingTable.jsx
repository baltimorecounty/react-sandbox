import React from "react";

import { Table } from "@baltimorecounty/dotgov-components";

const divStyles = {
  width: "100%"
};

const RoadClosingTable = props => {
  return (
    <Table id="responsive-main-table" className="display">
      {props.children}
    </Table>
  );
};

export default RoadClosingTable;
