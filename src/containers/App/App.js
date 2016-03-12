import React from 'react';
import Navigation from '../../components/Navigation/Navigation';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h1>Node + ReactJS Boilerplate</h1>
        <Navigation />

        <div className="children">
          {this.props.children}
        </div>
      </div>
    );
  }
}
export default App;
