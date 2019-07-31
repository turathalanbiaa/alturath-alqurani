import axios from 'axios';

const videoUrl = "http://quran.turathalanbiaa.com/api/video";
const moreVideoUrl = "http://quran.turathalanbiaa.com/api/video/more";
const searchUrl = "http://quran.turathalanbiaa.com/api/video/search";
const videoByCategory = "http://quran.turathalanbiaa.com/api/video/by-category";

export function fetchVideo(offset = 0)
{
    return getVideoAction(videoUrl , {offset : offset});
}

export function fetchMoreVideo(offset , categoryId){
    return getMoreVideoAction(moreVideoUrl , {offset : offset , categoryId : categoryId});
}


export function fetchVideoByCategory(offset = 0, categoryId)
{
    return getVideoAction(videoByCategory , {offset : offset , categoryId : categoryId})
}

export function searchForVideo(text)
{
    return getVideoAction(searchUrl , {text : text});
}

function getVideoAction(url , params = {})
{
    return function (dispatch)
    {
        let request = axios.get(url, {params: params});

        dispatch({type: 'VIDEO_FETCHING'});

        request.then((response) =>
        {
            dispatch({type: 'VIDEO_FETCHED', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'VIDEO_ERROR', payload: e})
        });
    }
}

function getMoreVideoAction(url , params = {})
{
    return function (dispatch)
    {
        let request = axios.get(url, {params: params});

        dispatch({type: 'MORE_VIDEO_FETCHING'});

        request.then((response) =>
        {
            dispatch({type: 'MORE_VIDEO_FETCHED', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'MORE_VIDEO_ERROR', payload: e})
        });
    }
}