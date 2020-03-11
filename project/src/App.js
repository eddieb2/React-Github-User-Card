import React, { Component } from "react";
import axios from "axios";
import Card from "./Components/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/eddieb2")
      .then(res => {
        console.log("response:", res);
        this.setState({
          userData: res.data
        });
        console.log(this.state);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div>
        <Card userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
