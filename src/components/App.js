import React, { Component } from "react";
import JumbotronFluid from "./elements/JumbotronFluid";
import PuppyListContainer from "../containers/PuppyListContainer";
import AddPuppyContainer from "../containers/AddPuppyContainer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <JumbotronFluid
          heading="Pug Life"
          lead="Our puppies may come from the streets, but they are full of love"
        />

        <PuppyListContainer />
        <br />
        <AddPuppyContainer />
      </div>
    );
  }
}

export default App;
