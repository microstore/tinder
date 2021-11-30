import React from 'react';
import CashService from '../services/CashService';
import RenderForm from '../building-blocks/RenderForm';
import { withRouter } from 'react-router-dom';

class PhoneToken extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      token: ''
    };
  }

  handleChange = event => {
    this.state.phone = event.target.value;
  };

  handleChangeToken = event => {
    this.state.token = event.target.value;
  };

  doAuth = function (authToken, phone) {
    CashService.setToken(authToken);
    CashService.setPhone(authToken);
    this.props.history.push('/more-pals') 
  }

  handleSubmit = event => {
    event.preventDefault();

    let phone = this.state.token;
    let authToken = this.state.token

      this.doAuth(authToken, phone)

  }

  render() {
    const optns = {
      handleSubmit: this.handleSubmit,
      fields: [
        { name: 'X-token', label: 'X-token', placeholder: 'auth token..', noCash: true, onChange: this.handleChangeToken }
      ]
    }

    return (
      <div autoComplete="new-password">
        <RenderForm autoComplete="new-password" options={optns} />
      </div >
    )
  }
}
export default withRouter(PhoneToken);
