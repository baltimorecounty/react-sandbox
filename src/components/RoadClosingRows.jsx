import React from "react";
import ReactHtmlParser from 'react-html-parser';
import {
  TableCell,
  TableRow,
  TableBody
} from "@baltimorecounty/dotgov-components";
import RoadClosingIcon from "./RoadClosingIcon";

const divStyles1 = {
  paddingLeft: "150px"
};
function format2(d, i) {
  // `d` is the original data object for the row
  return (
    '<table cellpadding="5" cellspacing="0" border="0" style="padding-left:50px;">' +
    "<tr  key={i+ 2}>" +
    "<td>Full name:</td>" +
    "<td>" +
    d["attributes"]["FIRST_STLABEL"] +
    "</td>" +
    "</tr>" +
    "</table>"
  );
}
const RoadClosingRows = props => {
  const { data, testData } = props;
  // console.log("row:" + JSON.stringify(data.features));
  // console.log("testdata:" + JSON.stringify(testdata));
  // const recordsToDisplay = data.filter(
  //   ({ name }) => name !== "Baltimore County Government"
  // );

  return data.features.map((item, i) => (
    <React.Fragment>
      <TableRow key={`tr-${i}`} id={i}>
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
        {/* <TableCell key={`tdOffice-${i}`}>{item.office}</TableCell> */}
      </TableRow>
      <tr key={i + 1} id={i + 1}>
      {ReactHtmlParser(format2(item, i))}
      </tr>
     
    </React.Fragment>
  ));
};

export default RoadClosingRows;
