import {
  DataStore,  
} from 'common/dataStore';
export class Api {
  constructor () {

  }

  static setHeaders = (headers = {}) => {
    const user = DataStore.get('LOGGED_IN_USER');

    if (user.token) {
      headers['authorization'] = `Bearer ${user.token}`;
    };
    
    headers['Content-Type'] = 'application/json';

    return headers;
  };

  static sendRequest = async(url, params) => {
    const headers = this.setHeaders();

    const data = params.body;
    delete params.body;

    const response = await fetch(url, {
      headers: {...headers},
      body: JSON.stringify(data),
      ...params
    })
    .then(response => response.json())
    .catch(err => {
        console.log("Request Error: " + err);
    });

    return response;
  };

  static get = (url) => {
    return this.sendRequest(url, {
      method: 'GET',
    });
  };

  static post = (url, data, options = {}) => {
    return this.sendRequest(url, {
      method: 'POST',
      body: data,
      ...options
    });
  };

  static put = (url, data) => {
    return this.sendRequest(url, {
      method: 'PUT',
      body: data,
    });
  };

  static delete = (url, data = {}, options = {}) => {
    return this.sendRequest(url, {
      method: 'DELETE',
      ...options,
      body: data
    });
  };
};