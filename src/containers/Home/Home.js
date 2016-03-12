import React from 'react';
import { connect } from 'react-redux';

import Counter from '../../components/Counter/Counter';
import CountActionCreators from '../../actions/CounterActionCreators';

if (process.env.BROWSER) {
  require('./Home.scss');
}

class Home extends React.Component {
  render() {
    return (
      <div className="home-page">
        <p>You are at the home page!</p>

        <p>Increment/decrement counter example</p>
        <Counter {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.counter.count };
}

function mapDispatchToProps(dispatch) {
  return {
    onCounterIncrement: () => {
      dispatch(CountActionCreators.increment());
    },
    onCounterDecrement: () => {
      dispatch(CountActionCreators.decrement());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
