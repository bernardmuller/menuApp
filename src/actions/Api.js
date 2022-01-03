import axios from 'axios';

export class Api {
  constructor() {}

  static setAuthorization(token) {
    axios.defaults.headers.common.authorization = token;
  }

  static async doRequest(url, params) {
    const data = params.body;
    delete params.body;

    const response = await axios({
      url,
      data,
      ...params,
    });

    return response.data;
  }

  static get(url, params = {}) {
    return this.doRequest(url, {
      ...params,
      method: 'GET',
    });
  }

  static post(url, data, params = {}) {
    return this.doRequest(url, {
      ...params,
      method: 'POST',
      body: data,
    });
  }

  static put(url, data, params = {}) {
    return this.doRequest(url, {
      ...params,
      method: 'PUT',
      body: data,
    });
  }

  static delete(url, params = {}) {
    return this.doRequest(url, {
      ...params,
      method: 'DELETE',
    });
  }
}


