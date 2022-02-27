import {
    Environment,
    resolveResponse,
    resolveRejected,
} from 'common';

import {
    Api
} from 'actions';

import {
    DataStore
} from 'common/dataStore';

export const updateIngredient = async(id, data) => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/ingredients/${id}`;
  
    try { 
        const response = await Api.put(url, data);
        return response;
        //   return resolveResponse(response);
    } catch (ex) {
        let ret = resolveRejected(ex);
        if (ex && ex.response && ex.response.status === 401) {
            ret.message = 'Something went wrong';
        };
        return ex;
    };
};

export const getMeals = async() => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/meals`;
    
    try {
        const response = await Api.get(url);
        // return resolveResponse(response);
        return response
    } catch (ex) {
        let ret = resolveRejected(ex);
        if (ex && ex.response && ex.response.status === 401) {
            ret.message = 'Something went wrong';
        };
        return ret;
    };
};

export const getIngredients = async() => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/ingredients`;
    
    try {
        const response = await Api.get(url);
        // return resolveResponse(response);
        return response
    } catch (ex) {
        let ret = resolveRejected(ex);
        if (ex && ex.response && ex.response.status === 401) {
            ret.message = 'Something went wrong';
        };
        return ret;
    };
};
