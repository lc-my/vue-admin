import axios from 'axios';
import qs from 'qs'

let base = 'http://127.0.0.1:8089';
export const requestLogin = params => {
    return axios.post(`${base}/login`, stringify(params)).then(res => res.data);
};

const stringify = params =>{
    return qs.stringify(params);
};

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.post(`${base}/user/edit`, stringify(params)); };

export const addUser = params => { return axios.post(`${base}/user/add`, stringify(params)); };