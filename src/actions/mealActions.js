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

export const createMeal = async(data) => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/meals`;
  
    try { 
        const response = await Api.post(url, {});
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

export const updateMeal = async(id, data) => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/meals/${id}`;
  
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

export const getMeal = async(id) => {
    const url = `http://localhost:8080/meals/${id}`;
    
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

export const removeIngredient = async(id, ingredient_id) => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/meals/${id}/remove`;
  
    try { 
        const response = await Api.post(url, {"ingredient_id": ingredient_id});
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

export const addIngredient = async(id, ingredient_id) => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/meals/${id}/add`;
  
    try { 
        const response = await Api.post(url, {"ingredient_id": ingredient_id});
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