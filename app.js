import react from "react";
import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./Heading";

// React Element => reactElement = JS Obeject => HTML Element
// const heading = React.createElement("h1",
// {id: "heading"},
// "Namste React");

//JSX => babel transpilles it to React.createElement =>(transpilled before it reaches the JS)
// JSX => React.createElement => ReactElement - JS Object => HTMLElement(render) 
const heading = () =>(
<h1 className="head" tabIndex = "5">
    Namste React using JSX
    </h1>
    );

    // React Components

    const HeadingComponent = () => (
        <div id="container">
    <h1 className="heading">Namste React Functional Components</h1>
    </div>
    );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
//Akshay is here will be replaced not append