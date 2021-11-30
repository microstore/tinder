import React from 'react';
import "react-table/react-table.css"


class FriendRequests extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allFr: [],
      hits: [],
      isLoading: false,
      error: null,
    };
    this.isMountedOk = true;
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  getFriendRequests = () => {
 
  }

  render() {
    

    return (
      <div>
  
      </div>
    )
  }
}
export default FriendRequests;