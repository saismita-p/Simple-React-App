import React from "react";
import ReactDOM from "react-dom/client";

const divParent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I m H1 tag"),
    React.createElement("h2", {}, "I m H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I m H1 tag"),
    React.createElement("h2", {}, "I m H2 tag"),
  ]),
]); //JSX is needed to make it simple
const heading = React.createElement("h1", {}, "Hello World from React!");
console.log(heading);
//JSX => Babel transpiles JSX code to React.createElement => React.createElement - JS Object => HTML(Render)
// JSX is not React, JSX is separate than React. The attributes should be in camel case

//React Element
const jsxHeading = (
  <h1 className="head" tabIndex="5">
    Namaste React 🎈
  </h1>
);
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divParent);
root.render(jsxHeading);

// React Component - Class based & Functional Components
// React Functional Component => Any function which returns some piece of JSX code or react element

//React Functional Component
const HeadingComponent = () => (
  <h1 className="head" tabIndex="5">
    {" "}
    Namaste React 🎈
  </h1>
);

//React Element inside using {}
const title = <span> Title: </span>;

//component composition
const TitleComponent = () => (
  <div id="container">
    <HeadingComponent /> <h1> {title} Start With React Now 🚀 </h1>
  </div>
);

root.render(<TitleComponent />);
