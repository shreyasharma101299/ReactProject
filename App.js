import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  {
    id: "heading",
    xyz: "abc",
  },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am Child 1"),
    React.createElement("h2", {}, "I am Child 2"),
  ])
);
const Title = () => <h1>Title of Functional Component</h1>;
const FunctionalComponent = () => (
  <div>
    <Title />
    <h1>Welcome to functional component</h1>
  </div>
);

const jsxElement = <h1 className="heading">Welcome Hello World</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FunctionalComponent />);
