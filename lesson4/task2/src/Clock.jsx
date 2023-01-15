import React, { Component } from 'react';
import moment from 'moment';

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const formatterDate = (date) => moment(date).format('h:mm:ss A');

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      localTime: formatterDate(getTimeWithOffset(this.props.offset)),
    };

    // Do not use
    setInterval(
      () =>
        this.setState({
          localTime: formatterDate(getTimeWithOffset(this.props.offset)),
        }),
      1000
    );
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.location}</div>
        <div className="clock__time">{this.state.localTime}</div>
      </div>
    );
  }
}

export default Clock;
