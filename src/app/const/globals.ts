export const API_REST_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN_NAME = 'token';
export const OAUTH2_REDIRECT_URI = 'http://localhost:4200/redirect'

// AUTHORIZE URL PROVIDERS FROM THE API REST
export const GOOGLE_AUTH_URL = API_REST_BASE_URL + '/oauth2/authorize/google?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const FACEBOOK_AUTH_URL = API_REST_BASE_URL + '/oauth2/authorize/facebook?redirect_uri=' + OAUTH2_REDIRECT_URI;
export const TWITTER_AUTH_URL = API_REST_BASE_URL + '/oauth2/authorize/github?redirect_uri=' + OAUTH2_REDIRECT_URI;
