import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );

    let messageElements = props.state.message.map( m => <Message message={m.message}/> );

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
                <div>
                <div>
                    <textarea ref={ newMessageElement }></textarea>
                </div>
                <button onClick={ addMessage }>Add post</button>
            </div>

            </div>

        </div>
    )
}

export default Dialogs