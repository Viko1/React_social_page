import dialogsReducer from "./dialogs-reduser";
import profileReducer from "./profile-reduser";
import friendsReducer from "./friends-reduser";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are u', likesCount: 12},
                {id: 2, message: "It's my firs post", likesCount: 10},
                {id: 3, message: 'How are u?', likesCount: 0},
                {id: 4, message: 'Yo1', likesCount: 1},
                {id: 5, message: 'yo2', likesCount: 1},
                {id: 6, message: 'Yo3', likesCount: 0},
            ],

            newPostText: 'viko-best.com'
        },

        dialogsPage: {
            message: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'U look great'},
                {id: 3, message: 'How are u?'},
                {id: 4, message: 'Yo1'},
                {id: 5, message: 'yo2'},
                {id: 6, message: 'Yo3'},
            ],
            dialogs: [
                {id: 1, name: 'Viko'},
                {id: 2, name: 'Daria'},
                {id: 3, name: 'Taras'},
                {id: 4, name: 'Liubomir'},
                {id: 5, name: 'Roman'},
                {id: 6, name: 'Sylwestr'},
            ],
            newMessageBody: ''

        },

        friendsPage: {
            friends: [
                {id: 1, friends: 'Daria'},
                {id: 2, friends: 'Taras'},
                {id: 3, friends: 'Liub'},
                {id: 4, friends: 'Roman'},
            ]


        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {   // {type; 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.profilePage, action);
        this._state.friendsPage = friendsReducer(this._state.profilePage, action);

        this._callSubscriber(this._state);

    }


};


export default store;
window.store = store;
// store - OOP


