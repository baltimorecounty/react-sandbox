import React from "react";
import {
  TableCell,
  TableRow,
  TableBody
} from "@baltimorecounty/dotgov-components";
import RoadClosingIcon from "./RoadClosingIcon";

const divStyles1 = {
  paddingleft: "150px"
};

const RoadClosingRows = props => {
  const { data } = props;
  // console.log("row:" + JSON.stringify(data.features));
  // console.log("testdata:" + JSON.stringify(testdata));
  // const recordsToDisplay = data.filter(
  //   ({ name }) => name !== "Baltimore County Government"
  // );

  return data.features.map((item, i) => (
     
    <tr key={`tr-${i}`} id={i}>
      <td key={`tdIcon-${i}`} className="dtr-control"></td>
      <TableCell key={`tdfirstname-${i}`}>
        {item["attributes"]["FIRST_STLABEL"]}
      </TableCell>
      <TableCell key={`tdlastname-${i}`}>
        {item["attributes"]["FIRST_COMMUNITY"]}
      </TableCell>
      <TableCell key={`tdSpostion-${i}`}>
        {item["attributes"]["FIRST_CLOSURE_TYPE"]}
      </TableCell>
      <TableCell key={`tdOffice-${i}`}>{item.office}</TableCell>
    </tr>

  ));
};

export default RoadClosingRows;
