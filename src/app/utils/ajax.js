import axios from 'axios';
import { API_METHODS } from '../constants/api-constants';

export const fetchCall = (callback, url, method, payload) =>
    new Promise(() => {
        let options = {};
        const token = localStorage.getItem('token');
        console.log(token);
        
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        };

        if (method === API_METHODS.GET) {
            options = {
                method,
                headers,
                url,
            };
        } else {
            options = {
                method,
                data: payload,
                headers,
                url,
            };
        }

        axios(options)
            .then((response) => {
                callback(response);
            })
            .catch((error) => {
                //Network error
                if (error.toJSON().message === 'Network Error') {
                    callback({ data: { success: false, message: 'No Internet Connection' } });
                }
                if (error.response) {
                    // Request made and server responded
                    callback(error.response);
                } else if (error.request) {
                    // The request was made but no response was received
                    callback(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    callback(error.message);
                }
            });
    });

export const uploadFiles = (callback, url, method, formData) =>
    new Promise(() => {
        const ajax = new XMLHttpRequest();

        // ajax.upload.addEventListener('progress', progressHandler, false);
        ajax.upload.addEventListener('progress', callback, false);
        // ajax.addEventListener('load', callback, false);
        ajax.addEventListener('error', callback, false);
        ajax.addEventListener('abort', callback, false);

        ajax.onreadystatechange = function () {
            if (ajax.readyState === 4) {
                callback(JSON.parse(ajax.response));
            }
        };

        ajax.open(method, url); // http://www.developphp.com/video/JavaScript/File-Upload-Progress-Bar-Meter-Tutorial-Ajax-PHP
        // use file_upload_parser.php from above url

        // ajax.setRequestHeader(
        //   'auth_token'
        // );

        ajax.send(formData);
    }); 