import React from "react";
import Quoute from "./containers/Quoute";

class App extends React.Component{
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="App">
        <Quoute />
      </div>
    );
  }
}

export default App;
