let initialState = {
    loading : false ,
    video : [] ,
    error : false,
    loadingMore: false,
    loadingMoreError: false,
    newCount: null
};

export default (state = initialState, action) =>
{
    switch(action.type)
    {
        case 'VIDEO_FETCHING':
            return {...state , loading : true , video : [] , error : false};
        case 'VIDEO_FETCHED':
            return {...state , video:action.payload , newCount : 0 , error : false , loading : false};
        case 'VIDEO_ERROR':
            return {...state , error : true , loading : false , video : []};

        case 'MORE_VIDEO_FETCHING':
            return {...state, loadingMore: true, error: false};
        case 'MORE_VIDEO_FETCHED':
            return {
                ...state,
                video: state.video.concat(action.payload),
                loadingMore : false ,
                loadingMoreError: false,
                newCount: action.payload.length
            };
        case 'MORE_VIDEO_ERROR':
            return {...state, loadingMoreError: true, loadingMore: false};


        default : return state;
    }
}