import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Administration</h1>
        <p1>React, Redux and React Router in ES6 for ultra-responsive web apps.</p1>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;


