let initialState = {
    loading: false,
    books: [],
    error: false,
    loadingMore: false,
    loadingMoreError: false,
    newCount: null
};

export default (state = initialState, action) =>
{
    switch (action.type)
    {
        case 'BOOKS_FETCHING':
            return {...state, loading: true, books: [], newCount: 0, error: false};
        case 'BOOKS_FETCHED':
            return {...state, books: action.payload, error: false, loading: false};
        case 'BOOKS_ERROR':
            return {...state, error: true, loading: false, books: []};

        case 'MORE_BOOKS_FETCHING':
            return {...state, loadingMore: true, error: false};
        case 'MORE_BOOKS_FETCHED':
            return {
                ...state,
                books: state.books.concat(action.payload),
                loadingMore: false,
                loadingMoreError: false,
                newCount: action.payload.length
            };
        case 'MORE_BOOKS_ERROR':
            return {...state, loadingMoreError: true, loadingMore: false};

        default :
            return state;
    }
}