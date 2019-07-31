import axios from 'axios';

const linksUrl = "http://quran.turathalanbiaa.com/api/links";


export function fetchLinks(offset = 0)
{
    return getLinksAction(linksUrl , {offset : offset});
}

function getLinksAction(url , params = {})
{
    return function (dispatch)
    {
        let request = axios.get(url, {params: params});

        dispatch({type: 'LINK_FETCHING'});

        request.then((response) =>
        {
            dispatch({type: 'LINK_FETCHED', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'LINK_ERROR', payload: e})
        });
    }
}