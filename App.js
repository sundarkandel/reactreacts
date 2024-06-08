import React from "react";
import ReactDOM from "react-dom/client";
 
// React Element/JSX

const title = (
<h1 id= "heading" > 
This is React written in JSX 
</h1>
);


//React Functional Components

const HeadingComponent =() => (
  <h1 className = "heading"> React Functional Component</h1>
);


// Component Composition- Neating more than one componenets in one.

const HeadingComponent2 = () => (
  <div id ="container"> 
  <HeadingComponent />
  <h1 className="headingg"> Composition Component </h1>
  </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);

