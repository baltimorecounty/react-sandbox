import React from "react";
import ReactHtmlParser from "react-html-parser";
import {
  TableCell,
  TableRow,
  TableBody
} from "@baltimorecounty/dotgov-components";
import RoadClosingIcon from "./RoadClosingIcon";

const divStyles1 = {
  paddingLeft: "150px",
  //display: "none"
};

const RoadClosingRowsChild = props => {
  const { data, cnt } = props;


  return (
    <tr key={`tr-${cnt}`} id={cnt} style={divStyles1}>
      <td key={`tdIcon-${cnt}`} className=""></td>
      <TableCell key={`tdfirstname-${cnt}`}>{data.FIRST_STLABEL}</TableCell>
    </tr>
  );
};

export default RoadClosingRowsChild;
