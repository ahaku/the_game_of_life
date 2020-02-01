import React from "react";
import ButtonMD from "@material-ui/core/Button";
// import './../../../Mainpage.css';

function Button(props) {
  return (
    <ButtonMD
      className="Button"
      variant={props.variant}
      color={props.color}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.title}
    </ButtonMD>
  );
}

export default Button;
