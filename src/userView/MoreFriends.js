import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import AjaxService from '../services/AjaxService';
import CashService from '../services/CashService';
import Const from '../services/Constants';

import PicWrapper from "../building-blocks/PicWrapper";
import BtnLink from "../building-blocks/BtnLink";
import Info from "../building-blocks/Info";
import FriendRequests from './FriendRequests';

class MoreFriends extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beanId: props.beanId,
      allFr: []
    };
    this.friendRequestPicIds = "";
    this.isMountedOk = true;
  }

  componentDidMount() {
    this.getFriendRequests();
    this.isMountedOk = true;
  }

  getFriendRequests = () => {
    let authToken = CashService.getToken();

    let headers = {
      [Const.AUTH_HEADER_NAME] : authToken
    }

    let promise = AjaxService.doGet(Const.URLS.FAST_MATCH, headers)
    promise.then((data) => {
      if (!data?.data?.data?.results) {
        return;
      }
      CashService.persistToken(authToken);
      this.getPeopleNearby(data?.data?.data?.results);

    }).catch((e) => {
      window.alert('The provided token: ' + authToken
      + ' is invalid.');
      console.log(e);
    })
  }

  getPeopleNearby = (frRequests) => {
    let promise = AjaxService.doGet(Const.URLS.NEW_FRIENDS, {})
    promise.then((data) => {
      let peopleNear = data?.data?.results;
      this.process(frRequests, peopleNear);
    }).catch((e) => {
      console.log(e);
    })
  }

  process(frRequests, usersNearby) {
    let result = [];
    frRequests.forEach(frReq => {

      let found = usersNearby.find(oneUser => {

        let pic = oneUser.photos.find(pic => {
          return pic.id === frReq.user.photos[0].id;
        });

        return !!pic
      });

      if (!!found) {
        result.push(found)
      } else {
        frReq.photos = frReq.user.photos
        frReq.name = '';
        result.push(frReq)
      }

    });
    this.setState({ allFr: result });
  }

  isLiked = (photos) => {
    for (let index = 0; index < photos.length; index++) {
      const pic = photos[index];
      if (this.friendRequestPicIds.indexOf(pic.id) != -1) {
        return true
      }
    }
    return false;
  }

  render() {
    let InfoWrapper = (args) => {
      let { person } = args;
      return (
        <div className="text-justify text-wrap">
          <Info person={person} />
        </div>
      )
    }

    let Pic = args => <PicWrapper photos={args.photos} name={args.name} />

    let allFr = this.state.allFr;
    console.log(allFr);
    let persons = allFr.map(one => {

      let obj = {
        info: (<InfoWrapper person={one} />),
        image: (<Pic photos={one.photos} name={one.name} />)
      }
      return { ...obj };
    });

    let present = [
      {
        columns: [
          {
            Header: "Photos",
            accessor: "image"
          },
          {
            Header: "Info",
            accessor: "info"
          }
        ]
      }
    ]

    return (
      <div>
        <div>
          <ReactTable className="-striped -highlight"
            data={persons}
            columns={present}
            sortable={false}
            defaultPageSize={persons.length}
            pageSize={persons.length}
            showPagination={false}
          />
          <br />
        </div>
      </div>
    )
  }
}
export default MoreFriends;