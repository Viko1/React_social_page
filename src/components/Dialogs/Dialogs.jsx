import React from 'react'
import s from './Dialogs.module.css'

import {NavLink} from "react-router-dom";


const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
};

const Message = (props) => {

    return <div className={s.message}>{props.message}</div>
};


const Dialogs = (props) => {


    let dialogs = [
        {id: 1, name: 'Viko'},
        {id: 2, name: 'Daria'},
        {id: 3, name: 'Taras'},
        {id: 4, name: 'Liubomir'},
        {id: 5, name: 'Roman'},
        {id: 6, name: 'Sylwestr'},
    ];

    let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/> );

    let message = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'U look great'},
        {id: 3, message: 'How are u?'},
        {id: 4, message: 'Yo1'},
        {id: 5, message: 'yo2'},
        {id: 6, message: 'Yo3'},
    ];

    let messageElements = message.map( m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs