import axios from 'axios';

let subscribeUrl = "http://quran.turathalanbiaa.com/api/subscribe";

export function subscribe(email)
{
    return function (dispatch)
    {
        let request = axios.get(subscribeUrl, {params: {email : email}});

        dispatch({type: 'SUBSCRIBE_START'});

        request.then((response) =>
        {
            dispatch({type: 'SUBSCRIBE_END', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'SUBSCRIBE_ERROR', payload: e})
        });
    }
}