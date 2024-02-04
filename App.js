import React from "react";
import ReactDOM from "react-dom/client";

// React element i.e React.createElement => this is basically a object => when we render this element on to dom it becomes an HTML

// The following line is creating react element
const heading = React.createElement("h1", { id: "heading" }, "Namaste react");
// console.log("react heading ==>", heading);

// using JSX

const jsxHeading = <h1 id="heading">Namaste react by using JSX</h1>;

// console.log("jsx heading ==>", jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
