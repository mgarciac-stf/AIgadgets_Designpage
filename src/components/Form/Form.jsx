/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ArrowDown3 } from "../../icons/ArrowDown3";
import { ArrowUp } from "../../icons/ArrowUp";
import { Calendar } from "../../icons/Calendar";
import { CloseCircle1 } from "../../icons/CloseCircle1";
import "./style.css";

export const Form = ({
  style,
  active,
  input,
  icon,
  supportingMessage,
  className,
  text = "Input",
  text1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit nulla commodo.",
  text2 = "Label",
  text3 = "Value",
}) => {
  return (
    <div className={`form active-${active} supporting-message-${supportingMessage} ${className}`}>
      {!supportingMessage && (
        <div className={`label input-${input}`}>
          {!input && <>{text2}</>}

          {style === "dropdown" && input && <>{text3}</>}

          {style === "input" && input && <>{text}</>}

          {style === "date-picker" && input && <>21.05.2023</>}
        </div>
      )}

      {!active && style === "dropdown" && <ArrowDown3 className="instance-node-2" color="#79747E" />}

      {style === "date-picker" && <Calendar className="instance-node-2" color={!active ? "#79747E" : "#5A9FD0"} />}

      {style === "input" && icon && (
        <CloseCircle1 className="instance-node-2" color={!active ? "#79747E" : "#5A9FD0"} />
      )}

      {supportingMessage && (
        <>
          <div className="input">{text}</div>
          <div className="label-wrapper">
            <div className="label-2">
              {active && <>{text2}</>}

              {!active && <p className="p">{text1}</p>}
            </div>
          </div>
          <div className="supporting-message">
            <div className="lorem-ipsum-dolor">
              {active && <p className="p">{text1}</p>}

              {!active && <>{text2}</>}
            </div>
          </div>
        </>
      )}

      {active && style === "dropdown" && <ArrowUp className="instance-node-2" />}

      {input && icon && (
        <div className="div-wrapper">
          <div className="text-wrapper">{text2}</div>
        </div>
      )}

      {active && style === "dropdown" && (
        <div className="extended">
          <div className="text-wrapper-2">Lorem ipsum 1</div>
          <div className="text-wrapper-3">Lorem ipsum 2</div>
          <div className="text-wrapper-3">Lorem ipsum 3</div>
        </div>
      )}
    </div>
  );
};

Form.propTypes = {
  style: PropTypes.oneOf(["dropdown", "date-picker", "input"]),
  active: PropTypes.bool,
  input: PropTypes.bool,
  icon: PropTypes.bool,
  supportingMessage: PropTypes.bool,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
};
