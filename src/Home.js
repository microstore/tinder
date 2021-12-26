import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ssss from './building-blocks/ssss.jpg'

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
        <h2>Welcome to #hackTinder</h2>
  
        <Link to="/phone-token">Here</Link> you can check out your Tinder likes and match freely. <p />
        To do that, follow the steps:<p />
        - Use Chrome or Firefox browser. Warning: It does not work on smartphones! You have to use a computer!<p />
        - open a new browser tab and log into <a href="https://tinder.com/" target="_blank">tinder.com</a><p />
        - it is advisory to increase your search radius, in order to see more matches <p />
        - Hit F12 on your keyboard. Debug window will be visualized, much like the one shown in the image below:<p />

        <img src={ssss} />
        <p />
        - 1. go to 'Network' tab <p />
        - 2. go to 'Fetch/XHR' sub-tab <p />
        - 3. wait until 'updates?locale=en' is shown, click on it <p />
        - 4. go to 'Headers' <p />
        - 5. find 'x-auth-token' and copy it by mouse right click <p />
        - 6. click <Link to="/phone-token">  here</Link> and paste the 'x-auth-token' in the white box... <p />
        - that's it. Enjoy! <p />
      </div >
    )
  }
}

export default Home;
