var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  getInitialState: function () {
    return {count: 0};
  },
  handleSetCountdown: function (seconds) { // maintain state, and interact with CountdownForm component
    this.setState({
      count: seconds
    });
  },
  // when the child calls onSetCountdown from CountdownForm.jsx, it will call handleSetCountdown in the parent function because we define them.
  render: function () {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});

module.exports = Countdown;
