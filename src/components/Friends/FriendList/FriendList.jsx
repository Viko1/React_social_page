import React from 'react'
import s from './../Friends.module.css'




const FriendList = (props) => {

    return <div className={s.friendsView}>{props.friends}</div>
};



export default FriendList