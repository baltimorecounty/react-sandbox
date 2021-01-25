import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Button } from "@baltimorecounty/dotgov-components";

const DecisionTree = (props) => {
  var choiceElements = [];
  
  const handlesOnClick = () => {
    props.nextStep();
  };

  props.choices.forEach((choice, i) => {
    if (props.type === "Button") {
      choiceElements.push(
        <Button
          key={i}
          text={choice.ChoiceText}
          //onClick={props.goToStep(choice.GoTo)}
          onClick={handlesOnClick}
        />
      );
    }
  });

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
              <h2 className="dg_icon-heading">{props.setName}</h2>
            </div>
            <div className="text">{ReactHtmlParser(props.text)}</div>
            {choiceElements}
          </div>
        </div>
      </div>
      {/* </section> */}
    </div>
  );
};

export default DecisionTree;
