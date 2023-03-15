import "./styles.css";
import React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <HOCCounter cmp={Counter} color="red" />
      <HOCCounter cmp={Counter} color="blue" />
      <HOCCounter cmp={Counter} color="green" />
    </div>
  );
}

function HOCCounter(props) {
  return (
    <h2 style={{ background: props.color }}>
      {" "}
      <props.cmp />{" "}
    </h2>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={(e) => setCount(count + 1)}> Increment </button>
    </div>
  );
}
