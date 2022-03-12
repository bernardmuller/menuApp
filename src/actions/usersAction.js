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

export const getUser = async(id) => {
    const url = `http://localhost:8080/users/${id}`;

    try { 
        const response = await Api.get(url);
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

export const updateUser = async(id, data) => {
    const url = `http://localhost:8080/users/${id}`;
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