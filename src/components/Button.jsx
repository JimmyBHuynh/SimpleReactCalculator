import React from "react";
import "./Button.css";

const isOperator = val => {
  return (
    !isNaN(val) ||
    val === "." ||
    val === "^2" ||
    val === "%" ||
    val === "+/-" ||
    val === "C"
  );
};

export const Button = props => (
  <div
    className={`button-wrapper ${
      isOperator(props.children)
        ? null
        : props.children === "="
        ? "equals "
        : "operator"
    }`}
    id={(() => {
      switch (props.children) {
        case "-":
          return "-";
        case "+":
          return "+";
        case "/":
          return "/";
          case "*":
          return "*";
        default:
          return "";
      }
    })()}
    onClick={() => {
      props.handleClick(props.children);
      console.log(props.children);
    }}
  >
    {props.children}
  </div>
);
