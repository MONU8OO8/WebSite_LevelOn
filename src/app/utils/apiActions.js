import { API_CONSTANTS, API_METHODS } from '../constants/api-constants';
import { fetchCall } from './ajax';

export const apiCall = (callback, payload, end_point_key) => {
  const url = `${API_CONSTANTS[end_point_key]}`;
  const method = API_METHODS.POST;
  return fetchCall(response => callback(response), url, method, payload);
};

export const apiCallPaginated = (callback, payload, end_point_key, pageCount) => {
  const url = `${API_CONSTANTS[end_point_key]}?page=${pageCount}`;
  const method = API_METHODS.POST;
  return fetchCall(response => callback(response), url, method, payload);
};

export const apiCallGet = (callback, payload, end_point_key) => {
  const url = `${API_CONSTANTS[end_point_key]}`;
  const method = API_METHODS.GET;
  return fetchCall(response => callback(response), url, method, payload);
};
