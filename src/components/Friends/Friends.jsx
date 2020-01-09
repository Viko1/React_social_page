import React from 'react'
import s from './Friends.module.css'
import FriendList from './FriendList/FriendList'
import DialogItem from "../Dialogs/Dialogs";



const Friends = (props) => {

    let state = props.store.getState().dialogsPage;

    let friendsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/> )


    return (
        <div>
            <div>
                { friendsElements }
            </div>
        </div>
    )

 };



export default Friends