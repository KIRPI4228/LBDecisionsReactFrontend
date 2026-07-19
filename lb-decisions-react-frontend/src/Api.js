import axios from "axios"

const url = "http://localhost:4444";

export default class Api {

    static calculateVentedBox = async (parameters) => {
        return await this.#post(`${url}/calc`, parameters);
    }

    static getParamtersList = async () => {
        return await this.#get(`${url}/parameters-list`);
    }

    static #post = async (url, body, headers) => {
        return await this.#sendRequest(axios.post, url, body, headers);
    }

    static #get = async (url, body, headers) => {
        return await this.#sendRequest(axios.get, url, body, headers);
    }
    
    static #sendRequest = async (method, url, body, headers) => {
        return await method(url, body, headers);
    }
}