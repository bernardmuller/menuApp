export function resolveResponse(res) {

    if (!res) {

        return {
        ok: false,
        message: 'Invalid response',
        data: null,
        }
    }

    let ok = res.status >= 200 && res.status < 300;

    return {
        ok: ok,
        message: (res.data && res.data.message) || '',
        data: (res.data && res.data.data) || res.data || res || {}
    }
}
  

export function resolveRejected(res) {
  
    let err;
  
    if (
      res.response
      && res.response.data
      && res.response.data.message
    ) {
      err = res.response.data.message;
    }
  
    // Logger.error(res);
  
    return {
      ok: false,
      message: err || 'Unfortunately a technical error occurred',
      data: res.response && res.response.data,
    };

};
