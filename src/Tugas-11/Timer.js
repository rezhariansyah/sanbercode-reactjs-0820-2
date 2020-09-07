import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 100,
      date: new Date(),
      show: true,
    };
  }
  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start });
    }
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date(),
    });

    if (this.state.time === 0) {
      clearInterval(this.timerID);
      this.setState({
        show: false,
      });
    }
  }

  render() {
    return (
      <>
        {this.state.show ? (
          <div style={{ textAlign: "center" }}>
            <h1>
              {this.state.date.toLocaleTimeString()}
              <span style={{ paddingLeft: 100 }}>
                hitung mundur : {this.state.time}
              </span>
            </h1>
          </div>
        ) : null}
      </>
    );
  }
}
