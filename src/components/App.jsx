import React from "react";
import Login from "../components/Login";
var isLoged = false;

// this is the way to condition ckeck a simple ways.....
// function checkCondition() {
//   if (isLoged === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

//  now we check condition in other ways(turnery operator) in online
function App() {
  return (
    <div className="container">{isLoged ? <h1>Hello</h1> : <Login />} </div>
  );
}

export default App;
