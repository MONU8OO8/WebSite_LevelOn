
const BASE_URL = 'http://34.237.150.37:3003/api/auth'

export const API_CONSTANTS = {
    SIGNUP: `${BASE_URL}/sign-up`,
    SEND_OTP: `${BASE_URL}/generate-otp`,
    SET_PASSWORD: `${BASE_URL}/set-password`,
    LOGIN: `${BASE_URL}/set-password`,
    LOGOUT: `${BASE_URL}/logout`,
}

export const API_METHODS = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
    UPDATE: "UPDATE",
    PUT: "PUT",
  };       
  