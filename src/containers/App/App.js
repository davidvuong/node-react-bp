import React from 'react';
import Navigation from '../../components/Navigation/Navigation';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation />

        <div className="container">
          <h1>Node + ReactJS Boilerplate</h1>
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default App;
