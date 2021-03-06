import React from 'react';

import Const from '../services/Constants';
import SelectPollInterval from './SelectPollInterval';
import AppSettingsService from './AppSettingsService';
import SelectTextColor from './SelectTextColor';
import SelectBackgroundColor from './SelectBackgroundColor';
import Checkbox from './Checkbox';

class AppSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: AppSettingsService.getInputStyleClasses(),
      isToShowPhotos: AppSettingsService.isToShowPhotos
    };
  }

  onSelectPollInterval = (val) => {
    this.setState({
      pollInterval: val
    })
  }

  triggerRender = () => {
    this.setState({
      styles: AppSettingsService.getInputStyleClasses()
    })
  }

  toggleShowPicsCheckbox = (event) => {
    AppSettingsService.isToShowPhotos = event.target.checked;
    this.setState({
      isToShowPhotos: AppSettingsService.isToShowPhotos
    })
  }

  render() {
    return (
      <div>
        <span className="float-right"> ver: {Const.VERSION}</span>
        <p />
        <SelectPollInterval styles={this.state.styles} onSelectPollInterval={this.onSelectPollInterval} />
        <SelectBackgroundColor styles={this.state.styles} triggerRender={this.triggerRender} />
        <SelectTextColor styles={this.state.styles} triggerRender={this.triggerRender} />
        <Checkbox label="show photos" condition={this.state.isToShowPhotos} changeHandler={this.toggleShowPicsCheckbox} />
      </div>
    )
  }
}
export default AppSettings;