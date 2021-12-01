import React from 'react';
import Const from '../services/Constants';

//this singleton applies settings at startup:
class AppSettingsService extends React.Component {
  constructor(props) {
    super(props);

    this.textColors = [
      { "name": 'Gray', "class": 'text-muted' },
      { "name": 'White', "class": 'text-white' },
      { "name": 'Dark', "class": 'text-dark' },
      { "name": 'Black', "class": 'text-body' }
    ]

    this.bgColors = [
      { "name": 'Gray', "class": 'bg-secondary' },
      { "name": 'Dark', "class": 'bg-dark' },
      { "name": 'Light', "class": 'bg-light' }
    ]

    this.updatePollInterval = Const.UPDATE_POLL_INTERVAL;
    this.isToShowPhotos = true;
    this.applyDesignSettings();
  }

  applyDesignSettings = () => {
    this.applyClass(document.body, this.textColors, 'text-white');
    this.applyClass(document.body, this.bgColors, 'bg-dark');
  }

  persistSetting = () => {
  }

  getSetting = () => {
  }

  applyClass = (element, colors, selectedColor) => {
    colors.forEach(color => {
      element.classList.remove(color.class);
    });

    element.classList.add(selectedColor);
  }

  getInputStyleClasses = () => {
    return "form-control " + (this.getSetting("textColor") || " ") +
      " " + (this.getSetting("bgColor") || "");
  }
}
export default new AppSettingsService();
