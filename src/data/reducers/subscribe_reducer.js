let initialState = {
    loading: false,
    success: false,
    error: false
};

export default (state = initialState, action) =>
{
    switch (action.type)
    {
        case 'SUBSCRIBE_START':
            return {...state, loading: true, success: false, error: false};
        case 'SUBSCRIBE_END':
            return {...state, success: true, error: false, loading: false};
        case 'SUBSCRIBE_ERROR':
            return {...state, error: true, loading: false, success: false};

        default :
            return state;
    }
}