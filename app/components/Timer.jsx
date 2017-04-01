var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  handleStatusChange: function (newTimerStatus) {
    this.setState({timerStatus: newTimerStatus});
  },
  componentDidUpdate: function (prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    clearInterval(this.timer);
  },
  handleStart: function () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
    }, 1000);
  },
  render: function () {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;


// componentDidUpdate: function (prevProps, prevState) { // this function gets called after either props or states get updated.
//   if (this.state.timerStatus !== prevState.timerStatus) {
//     switch (this.state.timerStatus) {
//       case 'started':
//         this.startTimer();
//         break;
//       case 'stopped': // reset the clock
//         this.setState({count: 0});
//       case 'paused':
//         clearInterval(this.timer); // clear the timer
//         this.timer = undefined;
//         break;
//     }
//   }
// },
// componentWillUnmount: function () {
//   clearInterval(this.timer); // stop the interval
//   this.timer = undefined; // clear up the timer
// },
// startTimer: function () {
//   this.timer = setInterval(() => {
//     var newCount = this.state.count + 1;
//     this.setState({
//       count: newCount >= 0 ? newCount : 0
//     });
//     if (newCount === 0) {
//       this.setState({timerStatus: 'stopped'}); // cancel the interval when it reaches zero and show countdownform again.
//     }
//   }, 1000);
// },
// handleSetTimer: function (seconds) { // maintain state, and interact with CountdownForm component
//   this.setState({
//     count: seconds,
//     timerStatus: 'started'
//   });
// },
// handleStatusChange: function (newStatus) {
//   this.setState({timerStatus: newStatus});
// },





// var renderControlArea = () => {
//   if (timerStatus !== 'stopped') {
//     return <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>;
//   } else {
//     return <CountdownForm onSetCountdown={this.handleSetTimer}/>;
//   }
// };
