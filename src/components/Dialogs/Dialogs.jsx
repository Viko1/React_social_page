import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reduser";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;


    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );
    let messageElements = state.message.map( m => <Message message={m.message}/> );
    let newMessageBody = state.newMessageBody;


    let onMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                <div>
                    <div><textarea value={newMessageBody}
                                   placeholder='Enter your message'
                                   onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={ onMessageClick }>Add post</button></div>

                </div>

            </div>

            </div>

        </div>
    )
}

export default Dialogs