import axios from 'axios';

const booksUrl = "http://quran.turathalanbiaa.com/api/books";
const moreBookUrl = "http://quran.turathalanbiaa.com/api/books/more";
const searchUrl = "http://quran.turathalanbiaa.com/api/books/search";
const booksByCategory = "http://quran.turathalanbiaa.com/api/books/by-category";

export function fetchBooks(offset = 0)
{
    return getBooksAction(booksUrl , {offset : offset});
}

export function fetchMoreBooks(offset , categoryId){
    return getMoreBookAction(moreBookUrl , {offset : offset , categoryId : categoryId});
}

export function fetchBooksByCategory(offset = 0, categoryId)
{
    return getBooksAction(booksByCategory , {offset : offset , categoryId : categoryId})
}

export function searchForBook(text)
{
    return getBooksAction(searchUrl , {text : text});
}

function getBooksAction(url , params = {})
{
    return function (dispatch)
    {
        let request = axios.get(url, {params: params});

        dispatch({type: 'BOOKS_FETCHING'});

        request.then((response) =>
        {
            dispatch({type: 'BOOKS_FETCHED', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'BOOKS_ERROR', payload: e})
        });
    }
}

function getMoreBookAction(url , params = {})
{
    return function (dispatch)
    {
        let request = axios.get(url, {params: params});

        dispatch({type: 'MORE_BOOKS_FETCHING'});

        request.then((response) =>
        {
            dispatch({type: 'MORE_BOOKS_FETCHED', payload: response.data});
        }).catch((e) =>
        {
            dispatch({type: 'MORE_BOOKS_ERROR', payload: e})
        });
    }
}