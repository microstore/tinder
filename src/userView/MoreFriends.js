import React from 'react';
import "react-table/react-table.css"
import ReactTable from "react-table";
import AjaxService from '../services/AjaxService';
import CashService from '../services/CashService';
import Const from '../services/Constants';
import PicWrapper from "../building-blocks/PicWrapper";
import Info from "../building-blocks/Info";

class MoreFriends extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beanId: props.beanId,
      allFr: [],
      isPristine: CashService.isPristine()
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
      [Const.AUTH_HEADER_NAME]: authToken
    }

    let promise = AjaxService.doGet(Const.URLS.FAST_MATCH, headers)
    promise.then((data) => {
      if (!data?.data?.data?.results) {
        return;
      }
      CashService.persistToken(authToken);
      this.getPeopleNearby(data?.data?.data?.results);

    }).catch((e) => {
      console.log(authToken);
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

  like = (targetId) => {
    CashService.setPristine(false);
    this.setState({ isPristine: false })
    let promise = AjaxService.doGet(Const.URLS.LIKE + targetId, {});
    promise.then((data) => {
      window.alert('Check your tinder and start chatting with the new match. ');
    }).catch((e) => {
      console.log(e);
    })
  }

  render() {
    let LikeButton = (args) => {
      let { person } = args;
      console.log(person);
      if (!!person?.name && person.name.length > 0) {
        return (
          <div className="text-justify text-wrap">
            <button type="button" hidden={!this.state.isPristine} className="btn btn-success" onClick={() => this.like(person._id)}>Like</button>
          </div>
        )
      } else
        return (<label>The person might be too far from your location or you have 'disLiked' 
          the person before. Please, increase your search radius and try again.</label>)
    }

    let InfoWrapper = (args) => {
      let { person } = args;
      return (
        <div className="text-justify text-wrap">
          <Info person={person} />
          <LikeButton person={person} />
        </div>
      )
    }

    let Pic = args => <PicWrapper photos={args.photos} name={args.name} />

    let allFr = this.state.allFr;

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
        <br />
        Push 'Like' button of a person you like the most. You can have one match per day only, so choose wisely...
        <br />
        <div>
          <ReactTable className="-striped -highlight"
            data={persons}
            columns={present}
            sortable={false}
            defaultPageSize={persons.length}
            pageSize={persons.length}
            showPagination={false}
          />

        </div>
      </div>
    )
  }
}
export default MoreFriends;