import React, { Component } from "react";
import "./styles.scss";

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentDidMount() {
    // Start the countdown when the component is mounted
    this.startCountdown();
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.interval);
  }

  startCountdown() {
    const targetDate = new Date(this.props.targetDate).getTime();

    this.interval = setInterval(() => {
      const currentDate = new Date().getTime();
      const timeLeft = targetDate - currentDate;

      if (timeLeft <= 0) {
        clearInterval(this.interval);
        // You can add a callback or other logic here when the countdown is complete
      } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        this.setState({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000); // Update every second
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div className="countdown-timer">
        <span>
          {days} <h6>days</h6>
        </span>
        <span>:</span>
        <span>
          {hours} <h6>hours</h6>
        </span>
        <span>:</span>
        <span>
          {minutes} <h6>minutes</h6>
        </span>
        <span>:</span>
        <span>
          {seconds} <h6>seconds</h6>
        </span>
      </div>
    );
  }
}

export default CountdownTimer;
