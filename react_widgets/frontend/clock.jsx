import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
    this.tick = this.tick.bind(this);
    // debugger
  }
  
  tick() {
    this.setState({ time: new Date() });
  }
  
  componentDidMount(props) {
    this.interval = setInterval(this.tick, 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {

    return (
      <div>
        <h1>Clock</h1>
        <div className="date-time">
          <div className="label">
            <p>Time:</p>
            <p>Date:</p>
          </div>
          <div className="time-date-string">
            <p>{this.state.time.toTimeString()}</p>
            <p>{this.state.time.toDateString()}</p>
          </div>
        </div>
      </div>
    );
    
    }
}

// const Clock = (props) => {
//   return(
//     <h1 id='header'>Clock App</h1>
//   );
// };

export default Clock;