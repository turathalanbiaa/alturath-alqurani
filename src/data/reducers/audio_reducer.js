let initialState = {
    loading : false ,
    audio : [] ,
    error : false,
    loadingMore: false,
    loadingMoreError: false,
    newCount: null
};

export default (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'AUDIO_FETCHING':
            return {...state , loading : true , audio : [] , newCount : 0 , error : false};
        case 'AUDIO_FETCHED':
            return {...state , audio:action.payload , error : false , loading : false};
        case 'AUDIO_ERROR':
            return {...state , error : true , loading : false , audio : []};

        case 'MORE_AUDIO_FETCHING':
            return {...state, loadingMore: true, error: false};

        case 'MORE_AUDIO_FETCHED':
            return {
                ...state,
                audio: state.audio.concat(action.payload),
                loadingMore : false ,
                loadingMoreError: false,
                newCount: action.payload.length
            };

        case 'MORE_AUDIO_ERROR':
            return {...state, loadingMoreError: true, loadingMore: false};

        default : return state;
    }
}