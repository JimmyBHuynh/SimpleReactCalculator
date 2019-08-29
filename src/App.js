import React, { Component } from "react";
import "./App.css";
import { Button } from "./components/Button";
import Input from "./components/Input";

class App extends Component {
  operators = {
    "+": function(a, b) {
      return a + b;
    },
    "*": function(a, b) {
      return a * b;
    },
    "/": function(a, b) {
      return a / b;
    },
    "-": function(a, b) {
      return a - b;
    }
  };
  constructor(props) {
    super(props);

    this.state = {
      input: "", //What is use to show on screen
      previousNumber: "", //save previous number
      operator: "", //check which operator has been pushed
      check: "", //check if the same operator has already been pushed so it doesn't read it multiple times.
      message: ""
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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
    this.calculation("+");
  };

  subtract = () => {
    this.calculation("-");
  };

  multiply = () => {
    this.calculation("*");
  };

  divide = () => {
    this.calculation("/");
  };

  calculation(name) {
    if (this.state.input === "" || this.state.check === "1") {
    } else if (this.state.operator === name) {
      this.setState({
        input: this.operators[name](
          parseFloat(this.state.previousNumber),
          parseFloat(this.state.input)
        )
      });
      this.setState({
        previousNumber: this.operators[name](
          parseFloat(this.state.previousNumber),
          parseFloat(this.state.input)
        )
      });
      this.setState({ check: "1" });
    } else if (this.state.operator !== "") {
      this.evaluate();
      this.setState({ operator: name });
      this.setState({ check: "1" });
    } else {
      this.setState({ previousNumber: this.state.input });
      this.setState({ input: "" });
      this.setState({ operator: name });
    }
  }

  evaluate = () => {
    if (this.state.operator === "") {
    } else if (true) {
      this.setState({
        input: this.operators[this.state.operator](
          parseFloat(this.state.previousNumber),
          parseFloat(this.state.input)
        )
      });
      this.setState({
        previousNumber: this.operators[this.state.operator](
          parseFloat(this.state.previousNumber),
          parseFloat(this.state.input)
        )
      });
      this.setState({ operator: "" });
      this.setState({ check: "2" });
    }
  };
  //Keypress Listener
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleEnter(key) {
    if (key === "+") {
      document.getElementById("+").click();
    } else if (key === "-") {
      document.getElementById("-").click();
    } else if (key === "/") {
      document.getElementById("/").click();
    } else if (key === "*") {
      document.getElementById("*").click();
    } else if (key === ".") {
      this.addDecimal(key);
    } else if (key === "^") {
      this.power(key);
    } else if (key === "%") {
      this.percentage(key);
    } else if (key === "Enter") {
      this.evaluate(key);
    } else if (!isNaN(key)) {
      this.addToInput(key);
    }
  }
  handleKeyPress(event) {
    const key = event.key;
    this.handleEnter(key);
  }
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
            <Button handleClick={this.subtract}>-</Button>
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
            <Button handleClick={this.addToInput}>0</Button>

            <Button handleClick={this.power}>^2</Button>
            <Button handleClick={this.evaluate}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
