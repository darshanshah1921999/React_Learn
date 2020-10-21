import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    // console.log(this.state.time);
  }
  componentDidMount() {
    let id = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        <h1>Timer</h1>
        <h2>It is {this.state.time.toLocaleTimeString()} </h2>
      </div>
    );
  }
  componentWillUnmount() {
    clearInterval(this.id);
  }
}
