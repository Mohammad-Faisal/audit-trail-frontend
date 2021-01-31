
import axios from 'axios';
import BaseRequest from "./BaseRequest";


const RequestMethod = {
    Get: 'GET',
    Post: 'POST',
    Put: 'PUT',
    Delete: 'DELETE',
    Options: 'OPTIONS',
    Head: 'HEAD',
    Patch: 'PATCH'
}

export class HttpUtility {
    static postData = async (endpoint :string ,reqData:BaseRequest) => {

        const axiosRequest = {
            ...reqData.data,
            //method: RequestMethod.Post,
            //url: endpoint,
            headers: {
                'Access-Control-Allow-Origin': '*',
                ...reqData.headers
            }
        }
        try{
            const response  = await axios.post(endpoint , axiosRequest);
            return response.data
        }catch (e) {
            console.log('error is ' , e);
        }

    }

    static getData = async (endpoint :string ) => {
        const response = await axios.post(endpoint);
        return response.data
    }


    static _delay(duration = 250) {
        return new Promise((resolve) => setTimeout(resolve, duration))
    }
}

export const getDataFromRemote = async  () => {


    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response.data

}

