import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

export const readEvents = () => async dispatch =>{
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch( {type: READ_EVENTS, response}) //Reducerに対して送られる
}

export const postEvent = values => async dispatch =>{
    console.log(values)
    const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`,values)
    console.log(response)
    dispatch( {type: CREATE_EVENT, response}) //Reducerに対して送られる
}

