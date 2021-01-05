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
  display: "none"
};

const RoadClosingRowsChild = props => {
  const { data, cnt } = props;


  return (
    <tr key={`tr-child-${cnt + 1 }`} id={`child-${cnt + 1}`}  className={`child-${cnt}`} style={divStyles1}>
      
      <td key={`tdIcon-${cnt + 1}`} className=""></td>
      <TableCell key={`tdfirstname-${cnt + 1 }`}>{data.FIRST_STLABEL}</TableCell>
    </tr>
  );
};

export default RoadClosingRowsChild;
