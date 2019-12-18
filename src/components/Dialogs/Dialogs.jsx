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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Viko" id="1"/>
                <DialogItem name="Daria" id="2"/>
                <DialogItem name="Taras" id="3"/>
                <DialogItem name="Liubomir" id="4"/>
                <DialogItem name="Roman" id="5"/>
                <DialogItem name="Sylwestr" id="6"/>
            </div>
            <div className={s.messages}>
               <Message message="Hi"/>
               <Message message="U look great"/>
               <Message message="How are u?"/>
            </div>
        </div>
    )
}

export default Dialogs