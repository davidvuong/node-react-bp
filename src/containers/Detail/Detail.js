import React from 'react';
import { connect } from 'react-redux';

import Counter from '../../components/Counter/Counter';
import CounterActionCreators from '../../actions/CounterActionCreators';

import ColoredSquare from '../../components/ColoredSquare/ColoredSquare';
import ColoredSquareActionCreators from '../../actions/ColoredSquareActionCreators';

if (process.env.BROWSER) {
  require('./Detail.scss');
}

class Detail extends React.Component {
  render() {
    return (
      <div className="detail-page">
        <p>You are at the detail page!</p>
        <p>There are 2 presentational components in this container</p>

        <p>HTTP requests to NodeJS server example</p>
        <ColoredSquare
          color={this.props.color}
          status={this.props.status}
          onRetrieveColor={this.props.onRetrieveColor}
        />

        <p>The same counter component example</p>
        <Counter
          count={this.props.count}
          onCounterIncrement={this.props.onCounterIncrement}
          onCounterDecrement={this.props.onCounterDecrement}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
    color: state.coloredSquare.color,
    status: state.coloredSquare.status
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onCounterIncrement: () => {
      dispatch(CounterActionCreators.increment());
    },
    onCounterDecrement: () => {
      dispatch(CounterActionCreators.decrement());
    },
    onRetrieveColor: () => {
      dispatch(ColoredSquareActionCreators.fetchColor());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
