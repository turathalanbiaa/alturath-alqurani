let initialState = {
    loading : false ,
    categories : [] ,
    error : false
};

export default (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'AUDIO_CATEGORY_FETCHING':
            return {...state , categories : [] , loading : true};
        case 'AUDIO_CATEGORY_FETCHED':
            return {...state , categories:action.payload , loading : false};
        case 'AUDIO_CATEGORY_ERROR':
            return {...state , error : true , categories : [] , loading : false};

        default : return state;
    }
}