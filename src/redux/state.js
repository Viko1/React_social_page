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
            ]
        },

        friendsPage: {
            friends: [
                {id: 1, friend: 'Daria'},
                {id: 1, friend: 'Taras'},
                {id: 1, friend: 'Liub'},
                {id: 1, friend: 'Roman'},
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;

            this._callSubscriber(this._state);
        }
    }


}

export const addPostActionCreator = () => {
    return{
        type: 'ADD-POST'
    }
};

export const updateNewPostActionCreator = (text) => {
    return{
        type: 'UPDATE-NEW-POST-TEXT', newText: text,
    }
};



export default store;
window.store = store;
// store - OOP