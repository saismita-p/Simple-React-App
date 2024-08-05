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
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(divParent);
