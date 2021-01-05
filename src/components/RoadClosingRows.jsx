import React from "react";
import ReactHtmlParser from 'react-html-parser';
import {
  TableCell,
  TableRow,
  TableBody
} from "@baltimorecounty/dotgov-components";
import RoadClosingIcon from "./RoadClosingIcon";
import  RoadClosingRowsChild from './RoadClosingRowsChild';
const divStyles1 = {
  paddingLeft: "150px"
};

const RoadClosingRows = props => {
  const { data } = props;

  return data.features.map((item, i) => (
    <React.Fragment>
      <TableRow key={`tr-${i}`} id={i}>
        <td key={`tdIcon-${i}`} className="toggler"  data-prod-cat={i}></td>
        <TableCell key={`tdfirstname-${i}`}>
          {item["attributes"]["FIRST_STLABEL"]}
        </TableCell>
        <TableCell key={`tdlastname-${i}`}>
          {item["attributes"]["FIRST_COMMUNITY"]}
        </TableCell>
        <TableCell key={`tdSpostion-${i}`}>
          {item["attributes"]["FIRST_CLOSURE_TYPE"]}
        </TableCell>
     
      </TableRow>
      <RoadClosingRowsChild data={item["attributes"]} cnt ={i}/>
     
    </React.Fragment>
  ));
};

export default RoadClosingRows;
