var React = require('react');

var CountdownForm = React.createClass({
  onSubmit: function (e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value; // String Seconds

    console.log('input count', $('input').length);

    if (strSeconds.match(/^[0-9]*$/)) { // .match expects regular expression [0-9]* can show up as many time as user like
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(strSeconds, 10)); // call parent function // 10 is the base
    }
  },
  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
