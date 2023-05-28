import {API_URL} from "./index";


export const REDIRECT_URL = 'http://localhost:3001/oauth2';
export const VK_AUTH_URL = API_URL + `/oauth2/authorize/vk?redirect_uri=${REDIRECT_URL}`;
export const GOOGLE_AUTH_URL = API_URL + `/oauth2/authorize/google?redirect_uri=${REDIRECT_URL}`;
export const YANDEX_AUTH_URL = API_URL + `/oauth2/authorize/yandex?redirect_uri=${REDIRECT_URL}`;
