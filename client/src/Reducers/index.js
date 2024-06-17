import { combineReducers } from 'redux'
import authReducer from './auth';
import currentUserReducers from './currentUser';
import chanelReducers from './chanel';
import videoReducer from './Video';
import watchLaterReducer from './watchLater';
import likedVideoReducer from './likedVideo';
import historyReducer from './history';
import commentReducer from './comments'
export default combineReducers({
    authReducer,
    currentUserReducers,
    chanelReducers,
    videoReducer,
    watchLaterReducer,
    likedVideoReducer,
    historyReducer,
    commentReducer
});