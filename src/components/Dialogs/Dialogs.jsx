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


    let dialogsData = [
        {id: 1, name: 'Viko'},
        {id: 2, name: 'Daria'},
        {id: 3, name: 'Taras'},
        {id: 4, name: 'Liubomir'},
        {id: 5, name: 'Roman'},
        {id: 6, name: 'Sylwestr'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'U look great'},
        {id: 3, message: 'How are u?'},
        {id: 4, message: 'Yo1'},
        {id: 5, message: 'yo2'},
        {id: 6, message: 'Yo3'},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

            </div>
            <div className={s.messages}>
               <Message message={messagesData[0].message}/>
               <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs