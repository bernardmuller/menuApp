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

export const createMenu = async() => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/menus`;

    try { 
        const response = await Api.post(url);
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

export const updateMenu = async(id, data) => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/menus/${id}`;
    console.log(data)
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
  
export const getMenus = async() => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/menus`;
    
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

export const getMenu = async(id) => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/menus/${id}`;
    
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

export const deleteMenu = async(id) => {
    const url = `https://munchies-api-5fqmkwna4q-nw.a.run.app/menus/${id}`;
    
    try {
        const response = await Api.delete(url);
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