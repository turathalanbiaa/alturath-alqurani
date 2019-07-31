import axios from 'axios';

const booksCategoryUrl = "http://quran.turathalanbiaa.com/api/books-library-categories";
const audioCategoryUrl = "http://quran.turathalanbiaa.com/api/audio-categories";
const videoCategoryUrl = "http://quran.turathalanbiaa.com/api/video-categories";

export function fetchBooksLibraryCategories()
{

    return function (dispatch)
    {

        let request = axios.get(booksCategoryUrl);

        dispatch({type: 'BOOK_CATEGORY_FETCHING'});

        request.then((response) =>
        {
            dispatch({type: 'BOOK_CATEGORY_FETCHED', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'BOOK_CATEGORY_ERROR', payload: e})
        });

    }

}

export function fetchAudioCategories()
{

    return function (dispatch)
    {

        let request = axios.get(audioCategoryUrl);

        dispatch({type: 'AUDIO_CATEGORY_FETCHING'});

        request.then((response) =>
        {
            dispatch({type: 'AUDIO_CATEGORY_FETCHED', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'AUDIO_CATEGORY_ERROR', payload: e})
        });

    }

}

export function fetchVideoCategories()
{

    return function (dispatch)
    {

        let request = axios.get(videoCategoryUrl);

        dispatch({type: 'VIDEO_CATEGORY_FETCHING'});

        request.then((response) =>
        {
            dispatch({type: 'VIDEO_CATEGORY_FETCHED', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'VIDEO_CATEGORY_ERROR', payload: e})
        });

    }

}
