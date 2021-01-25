import React, { useState } from "react";
// import ReactHtmlParser from "react-html-parser";
//import { TableBody } from "@baltimorecounty/dotgov-components";
import xmlData from "../data/test.xml";
import DecisionStep from "./DecisionStep";
import XMLParser from "react-xml-parser";
import axios from "axios";
import StepWizard from 'react-step-wizard';

const DecisionTree = props => {
    const [getJson, setJson] = useState("");

     if (getJson) {     
        return (
            <div>
                <StepWizard>
                    {JSON.parse(getJson).children.map((question, i) => 
                        <DecisionStep 
                        text={question.children[0]}
                        key={i}
                        />
                        )}
                </StepWizard>
            </div>
            )
     } else {
        axios.get(xmlData, {
            "Content-Type": "application/xml; charset=utf-8"
         })
         .then((response) => {
            var jsonDataFromXml = new XMLParser().parseFromString(response.data);
            setJson(JSON.stringify(jsonDataFromXml));
            //console.log(jsonDataFromXml);
         });
         return (
             <div>Loading</div>
         )
     }
};

export default DecisionTree;
