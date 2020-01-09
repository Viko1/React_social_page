const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi how are u', likesCount: 12},
        {id: 2, message: "It's my firs post", likesCount: 10},
        {id: 3, message: 'How are u?', likesCount: 0},
        {id: 4, message: 'Yo1', likesCount: 1},
        {id: 5, message: 'yo2', likesCount: 1},
        {id: 6, message: 'Yo3', likesCount: 0},
    ],

    newPostText: 'viko-best.com'
};


const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
};


export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
};

export const updateNewPostActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text,
    }
};


export default profileReducer;