import axios from "axios"

const url = "http://45.150.64.134:4444";

export default class Api {

    static calculateVentedBox = (parameters) => {
        return this.#post(`${url}/calc`, parameters);
    }

    static #post = (url, body, headers) => {
        return this.#sendRequest(axios.post, url, body, headers);
    }

    static #get = (url, body, headers) => {
        return this.#sendRequest(axios.get, url, body, headers);
    }
    
    static #sendRequest = (method, url, body, headers) => {
        return method(url, body, headers);
    }
}