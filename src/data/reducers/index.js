import {combineReducers} from 'redux';
import book_reducer from "./book_reducer";
import book_category_reducer from "./book_category_reducer";
import audio_reducer from "./audio_reducer";
import audio_category_reducer from "./audio_category_reducer";
import video_category_reducer from "./video_category_reducer";
import video_reducer from "./video_reducer";
import subscribe_reducer from "./subscribe_reducer";
import links_reducer from "./links_reducer";

export default combineReducers({
    books : book_reducer ,
    book_category : book_category_reducer ,
    audio_category : audio_category_reducer,
    audio : audio_reducer,
    video_category : video_category_reducer,
    video : video_reducer,
    subscribe : subscribe_reducer,
    links : links_reducer
});