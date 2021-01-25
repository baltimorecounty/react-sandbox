import React from "react";
// import ReactHtmlParser from "react-html-parser";
import { Button } from "@baltimorecounty/dotgov-components";

const DecisionTree = props => {
    //console.log(props);
    return (
        <div>
            {/* <section className="dg_section dark"> */}
            <div className="container">
            <div className="row">
            <div className="col">
            <div className="dg_icon-heading__container">
            <span className="dg_icon-heading__icon">
                <i className="fas fa-question-circle" aria-hidden="true"></i>
            </span>
            <h2 className="dg_icon-heading">Heading</h2>
            </div>
                <div className="text">{props.text.value}</div>
                <Button 
                text="Next"
                onClick={props.nextStep}/>
                </div>
                </div>
            </div>
            {/* </section> */}
        </div>
        )

};

export default DecisionTree;
