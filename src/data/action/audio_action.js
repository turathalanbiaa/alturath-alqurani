import axios from 'axios';

const audioUrl = "http://quran.turathalanbiaa.com/api/audio";
const moreAudioUrl = "http://quran.turathalanbiaa.com/api/audio/more";
const searchUrl = "http://quran.turathalanbiaa.com/api/audio/search";
const audioByCategory = "http://quran.turathalanbiaa.com/api/audio/by-category";

export function fetchAudio(offset = 0)
{
    return getAudioAction(audioUrl , {offset : offset});
}


export function fetchMoreAudio(offset , categoryId){
    return getMoreAudioAction(moreAudioUrl , {offset : offset , categoryId : categoryId});
}


export function fetchAudioByCategory(offset = 0, categoryId)
{
    return getAudioAction(audioByCategory , {offset : offset , categoryId : categoryId})
}

export function searchForAudio(text)
{
    return getAudioAction(searchUrl , {text : text});
}

function getAudioAction(url , params = {})
{
    return function (dispatch)
    {
        let request = axios.get(url, {params: params});

        dispatch({type: 'AUDIO_FETCHING'});

        request.then((response) =>
        {
            dispatch({type: 'AUDIO_FETCHED', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'AUDIO_ERROR', payload: e})
        });
    }
}

function getMoreAudioAction(url , params = {})
{
    return function (dispatch)
    {
        let request = axios.get(url, {params: params});

        dispatch({type: 'MORE_AUDIO_FETCHING'});

        request.then((response) =>
        {
            dispatch({type: 'MORE_AUDIO_FETCHED', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'MORE_AUDIO_ERROR', payload: e})
        });
    }
}