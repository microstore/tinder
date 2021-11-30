let ipAdress = 'https://bender-app.herokuapp.com/';

const Const = {
  URLS: {
    BASE_URL: ipAdress,
    USER: ipAdress + 'user/',
    NEW_FRIENDS: ipAdress + 'new-friends',
    FAST_MATCH: ipAdress + 'fast-match',

    //// storage api:
    STORAGE: ipAdress + 'storage/',
    STORAGE_TOKEN: ipAdress + 'storage/token/',
    STORAGE_BOOKMARKS: ipAdress + ' ',
    STORAGE_SETTINGS: ipAdress + ' '
  },

  LOCAL_CASH_VAR_NAME: '__TnDr__',
  AUTH_HEADER_NAME: 'X-Auth-Token',
  PHONE_HEADER_NAME: 'phone-number',
  VERSION: '1.45'
}

export default Const;
