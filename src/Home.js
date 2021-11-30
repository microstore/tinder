import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div >
        <h1>Welcome</h1>
        {/* <Link to="/phone"> phon7777</Link>
        <p/> */}
        <Link to="/phone-token">  Login Tinder with x-token</Link>
      </div >
    )
  }
}

export default Home;
