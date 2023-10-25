/*
*
*<div id = "grandparents">
*     <div id ="parent"
*        <h1> i am H1 tag</h1>
*         <h2>I am H@ tag</h2>    
*     </div>     
*       <div id ="parent2"
*        <h1> i am H1 tag</h1>
*         <h2>I am H@ tag</h2>    
*     </div>    // HOW DO CREATE THE NESTED ELEMENT IN REACT
*  </div>
*
*/

const grandparent = 
React.createElement("div",{id :" grandparent"} , 
[React.createElement("div", {id: "parent"} ,
[React.createElement("h1",{} ,"I am H1 tag"), React.createElement("h2",{} ,"I am H2 tag") ]
), React.createElement("div", {id: "parent2"} ,
[React.createElement("h1",{} ,"I am H1 tag"), React.createElement("h2",{} ,"I am H2 tag") ]
)]
);
console.log(grandparent);

// const heading = React.createElement("h1",{id : "heading"}, "Hello World From React");

// console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(grandparent);