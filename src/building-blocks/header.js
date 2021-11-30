import React from "react";
import { NavLink } from "react-router-dom";
import { withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beanId: props.beanId,
      showUser: false,
      isVisible: false,
      isVisibleMoreFriendsTab: false,
      msgMatches: []
    };
    this.initialTitle = document.title;
  }

  changeState = (obj) => {
    this.setState(obj);
  }

  addMsgMatch = () => {
 
  }

  findInMsgMatches = () => {
    return -1;
  }

  removeMsgMatch = () => {

  }

  showMoreFriendsRefreshButton = () => {
    this.setState({ isVisibleMoreFriendsTab: true });
  }

  hideMoreFriendsRefreshButton = () => {
    this.setState({ isVisibleMoreFriendsTab: false });
  }

  changeButtonVisibility = (obj) => {
    this.setState(obj);
  }


  toggleFlashTabTitle = () => {

  }

  startFlashTabTitle = () => {
 
  }

  stopFlashTabTitle = () => {
   
  }

  getUserData = (match) => {
    let clBack = (match) => {
      this.props.history.push({
        pathname: '/friend',
        state: { args: match }
      })
    }
  }

  updateFromBackend = () => {

  }

  render() {

    let Btn = (props) => (
      <div>
        <NavLink exact activeClassName="active" to={props.to}>
          <button type="button" className="btn btn-primary">
            {props.label}
          </button>
        </NavLink>
      </div>
    )
    return (
      <nav>
        <div className="text-center">
          <div className="btn-group">
          {/* {!this.state.isVisible ? <Btn to="/more-pals" label="👋uuui" /> : null}
            {!this.state.isVisible ? <Btn to="/pal-requests" label="👋i" /> : null} */}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);