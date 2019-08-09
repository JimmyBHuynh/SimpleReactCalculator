import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import Input from "./components/Input";
import EqualsButton from "./components/EqualsButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "", //What is use to show on screen
      previousNumber: "", //save previous number
      operator: "", //check which operator has been pushed
      check: "" //check if the same operator has already been pushed so it doesn't read it multiple times.
    };
  }

  addToInput = val => {
    if (this.state.input !== "" && this.state.check !== "") {
      this.setState({ input: val });
      this.setState({ check: "" });
    } else {
      this.setState({ input: this.state.input + val });
      this.setState({ check: "" });
    }
  };

  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
    this.setState({ previousNumber: "" });
    this.setState({ operator: "" });
  };
  power = () => {
    this.setState({ input: this.state.input ** 2 });
    this.setState({ check: "" });
  };
  reverse = () => {
    this.setState({ input: -this.state.input });
    this.setState({ check: "" });
  };
  percentage = () => {
    this.setState({ input: this.state.input / 100 });
    this.setState({ check: "" });
  };
  add = () => {
    if (this.state.input === "" || this.state.check === "1") {
    } else if (this.state.operator === "plus") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) + parseFloat(this.state.input)
      });
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) + parseFloat(this.state.input)
      });
      this.setState({ check: "1" });
    } else if (this.state.operator !== "") {
      this.evaluate();
      this.setState({ operator: "plus" });
      this.setState({ check: "1" });
    } else {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ operator: "plus" });
    }
  };

  subtract = () => {
    if (this.state.input === "" || this.state.check === "1") {
    } else if (this.state.operator === "subtract") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) - parseFloat(this.state.input)
      });
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) - parseFloat(this.state.input)
      });
      this.setState({ check: "1" });
    } else if (this.state.operator !== "") {
      this.evaluate();
      this.setState({ operator: "subtract" });
      this.setState({ check: "1" });
    } else {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ operator: "subtract" });
    }
  };

  multiply = () => {
    if (this.state.input === "" || this.state.check === "1") {
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) * parseFloat(this.state.input)
      });
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) * parseFloat(this.state.input)
      });
      this.setState({ check: "1" });
    } else if (this.state.operator !== "") {
      this.evaluate();
      this.setState({ operator: "multiply" });
      this.setState({ check: "1" });
    } else {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ operator: "multiply" });
    }
  };

  divide = () => {
    if (this.state.input === "" || this.state.check === "1") {
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) / parseFloat(this.state.input)
      });
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) / parseFloat(this.state.input)
      });
      this.setState({ check: "1" });
    } else if (this.state.operator !== "") {
      this.evaluate();
      this.setState({ operator: "divide" });
      this.setState({ check: "1" });
    } else {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ operator: "divide" });
    }
  };

  evaluate = () => {
    if (this.state.input === "") {
    } else if (this.state.operator === "plus") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) + parseFloat(this.state.input)
      });
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) + parseFloat(this.state.input)
      });
      this.setState({ operator: "" });
      this.setState({ check: "1" });
    } else if (this.state.operator === "subtract") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) - parseFloat(this.state.input)
      });
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) - parseFloat(this.state.input)
      });
      this.setState({ operator: "" });
      this.setState({ check: "1" });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) * parseFloat(this.state.input)
      });
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) * parseFloat(this.state.input)
      });
      this.setState({ operator: "" });
      this.setState({ check: "1" });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) / parseFloat(this.state.input)
      });
      this.setState({
        previousNumber:
          parseFloat(this.state.previousNumber) / parseFloat(this.state.input)
      });
      this.setState({ operator: "" });
      this.setState({ check: "1" });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="calc-wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.clearInput}>C</Button>
            <Button handleClick={this.reverse}>+/-</Button>
            <Button handleClick={this.percentage}>%</Button>
            <Button handleClick={this.power}>^2</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.subtract}>-</Button>
            <EqualsButton handleClick={this.evaluate}>=</EqualsButton>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
