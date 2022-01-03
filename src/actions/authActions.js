// import axios from 'axios';

import {
  // Environment,
  resolveResponse,
  resolveRejected,
  // ApiEndpoints,
} from 'common';

// import {
//   getReq,
//   patchReq,
//   postReq,
// } from 'common/dataStore';

import {
  Api
} from 'actions';


export const login = async( email, password ) => {
    
    try {

      if (!email) {

          return {
          ok: false,
          message: 'Please provide a valid email',
          data: null,
          };
      }

      if (!password) {

          return {
          ok: false,
          message: 'Please provide a valid password',
          data: null,
          };
      }

      const ret = await Api.post(`http://localhost:8080/login`, {email, password})
        
      return resolveResponse(ret);

    } catch (ex) {

      let ret = resolveRejected(ex);

      if (ex && ex.response && ex.response.status === 401) {

          ret.message = 'Invalid username or password';

      }
      
      return ret;

    }

}


export const setPassword = async ( 
  firstname,
  lastname,
  gender,
  birthday,
  email,
  device_fingerprint,
  password,
  cca2,
  callingcode,
  phone,
  guid
  ) => {

    try {

      if (!firstname) {

        return {
          ok: false,
          message: 'Please provide your first name',
          data: null,
        };

      };

      if (!lastname) {

        return {
          ok: false,
          message: 'Please provide your last name',
          data: null,
        };

      };

      if (!email) {

        return {
          ok: false,
          message: 'Please provide a valid email',
          data: null,
        };

      };

      if (!password) {

        return {
          ok: false,
          message: 'Please provide a valid password',
          data: null,
        };

      };

      if (!phone) {

        return {
          ok: false,
          message: 'Please provide a valid phone number',
          data: null,
        };

      };

      if (!cca2) {

        return {
          ok: false,
          message: 'Please provide a valid cca2',
          data: null,
        };

      };
      if (!callingcode) {

        return {
          ok: false,
          message: 'Please provide a valid calling code',
          data: null,
        };

      };
      
      const ret = await Api.post(``, 
      {
        firstname,
        lastname,
        email,
        password,
        device_fingerprint,
        phone,
        cca2,
        callingcode,
        birthday,
        gender,
        guid
      })

      return resolveResponse(ret);

    } catch (err) {

      return resolveRejected(err);

    }

}

 
export const verifyEmail = async( email, device_fingerprint) => {
  
  try {

    if (!email) {

      return {
        ok: false,
        message: 'Please provide a valid email',
        data: null,
      };
    }

    if (!device_fingerprint) {

      return {
        ok: false,
        message: 'The token provided is not valid',
        data: null,
      };
      
    }

    const ret = await Api.post(``, { email, device_fingerprint });

    return resolveResponse(ret);

  } catch (err) {

    return resolveRejected(err);
    
  }
}


export const register = async( email, password) => {
  
  try {

    if (!email) {

      return {
        ok: false,
        message: 'Please provide a valid email check',
        data: null,
      };
    }

    if (!password) {

      return {
        ok: false,
        message: 'Please provide a password',
        data: null,
      };
      
    }

    let ret = await Api.post
    (`http://localhost:8080/register`, 
      { 
        email, 
        password
      }
    );

    return resolveResponse(ret);

  } catch (err) {

    return resolveRejected(err);
    
  }
}


export const submitCode = async( email, device_fingerprint, code, type ) => {
  
  try {

    if (!email) {

      return {
        ok: false,
        message: 'Please provide a valid email',
        data: null,
      };
    }

    if (!device_fingerprint) {

      return {
        ok: false,
        message: 'The token provided is not valid',
        data: null,
      };

    }

    if (!code) {

      return {
        ok: false,
        message: 'Please provide a valid 4 digit code',
        data: null,
      };

    }

    const ret = await Api.post(
      ``, 
      { 
        email, 
        device_fingerprint, 
        code, 
        type 
      });

    return resolveResponse(ret);

  } catch (err) {

    return resolveRejected(err);
    
  }
}


export const resetPassword = async( userData ) => {
  
  try {

    if (!userData.email) {

      return {
        ok: false,
        message: 'Please provide a valid email',
        data: null,
      };
    }

    if (!userData.device_fingerprint) {

      return {
        ok: false,
        message: 'The token provided is not valid',
        data: null,
      };

    }

    if (!userData.code) {

      return {
        ok: false,
        message: 'Please provide a valid 4 digit code',
        data: null,
      };

    }

    if (!userData.guid) {

      return {
        ok: false,
        message: 'No valid guid found',
        data: null,
      };

    }

    if (!userData.password) {

      return {
        ok: false,
        message: 'Please provide a valid password',
        data: null,
      };

    }

    return await Api.post(``, { userData });

  } catch (err) {

    console.log(`error : ${err}`);
    
  }
}