
import axios from 'axios';

export const getDataFromRemote = async  () => {

    // if (!Boolean(restRequest.url)) {
    //     console.error(`Received ${restRequest.url} which is invalid for a endpoint url`)
    // }

    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response.data
}

