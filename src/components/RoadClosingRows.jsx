import React from "react";
import ReactHtmlParser from "react-html-parser";
import {
  TableCell,
  TableRow,
  TableBody
} from "@baltimorecounty/dotgov-components";
import RoadClosingIcon from "./RoadClosingIcon";

const divStyles1 = {
  paddingLeft: "150px"
};

const RoadClosingRows = props => {
  const { data } = props;

  return data.features.map((item, i) => (
    <React.Fragment>
      <TableRow key={`tr-${i}`} id={i}>
        <td
          key={`tdIcon-${i}`}
          className="toggler"
          data-prod-cat={i}
          closure_date={item["attributes"]["FIRST_ROAD_CLOSURE_DATE"]}
          closure_intersection={item["attributes"]["FIRST_INTERSECTIONLIST"]}
        ></td>
        <TableCell key={`tdfirstname-${i}`}>
          {item["attributes"]["FIRST_STLABEL"]}
        </TableCell>
        <TableCell key={`tdlastname-${i}`}>
          {item["attributes"]["FIRST_COMMUNITY"]}
        </TableCell>
        <TableCell key={`tdSpostion-${i}`}>
          {item["attributes"]["FIRST_CLOSURE_TYPE"]}
        </TableCell>
        {/* <TableCell key={`td1firstname-${i}`}>
          {item["attributes"]["FIRST_STLABEL"]}
        </TableCell>
        <TableCell key={`td2lastname-${i}`}>
          {item["attributes"]["FIRST_COMMUNITY"]}
        </TableCell>
        <TableCell key={`td3Spostion-${i}`}>
          {item["attributes"]["FIRST_CLOSURE_TYPE"]}
        </TableCell> */}
      </TableRow>
    </React.Fragment>
  ));
};

export default RoadClosingRows;
