import React, { PropTypes } from 'react';

const propTypes = {
  count: PropTypes.number.isRequired,
  onCounterIncrement: PropTypes.func.isRequired,
  onCounterDecrement: PropTypes.func.isRequired
};

class Counter extends React.Component {
  render() {
    return (
      <div className="counter">
        {this.props.count}
        <br />
        <button onClick={this.props.onCounterIncrement}>+</button>
        <button onClick={this.props.onCounterDecrement}>-</button>
      </div>
    );
  }
}
Counter.propTypes = propTypes;

export default Counter;
