let initialState = {
    loading : false ,
    links : [] ,
    error : false
};

export default (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'LINK_FETCHING':
            return {...state , loading : true , links : [] , error : false};
        case 'LINK_FETCHED':
            return {...state , links:action.payload , error : false , loading : false};
        case 'LINK_ERROR':
            return {...state , error : true , loading : false , links : []};

        default : return state;
    }
}