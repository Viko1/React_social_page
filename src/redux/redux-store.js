import {combineReducers, createStore} from "redux";
import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import friendsReducer from "./friends-reduser";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
})

let store = createStore(reducers);

export default store;