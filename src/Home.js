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
        <h2>Welcome to #hack-tinder</h2>
        {/* <Link to="/phone"> phon7777</Link>
        <p/> */}   
          <Link to="/phone-token">  See your Tinder likes using x-token:</Link><p/> 
        Here you can check out your Tinder likes. To do that, follow the steps:<p/> 
        - Use Chrome or Firefox browser<p/> 
        - go to TINDER.COM and Login<p/> 
        - Hit F12 on your keyboard. Debug window will be visualized, much like the one shown in the image below:<p/> 

        <br/> 
        <img src={ssss} />
        <p/> 
        - go to Network tab <p/> 
        - go to Fetch/XHR sub-tab <p/> 
        - wait until 'updates?locale=en' is shown, click on it <p/>
        - go to headers <p/> 
        - find x-auth-token and copy it <p/> 
        - click  <Link to="/phone-token">  here</Link> and paste it in the white box... <p/> 
        - that's it. Enjoy! <p/> 
      </div >
    )
  }
}

export default Home;
