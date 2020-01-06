const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.message.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
};


export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
};

export const updateNewMessageBodyCreator = (body) => {
    debugger;
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body,
    }
};

export default dialogsReducer