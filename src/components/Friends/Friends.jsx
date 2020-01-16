import React from 'react'

import FriendList from './FriendList/FriendList'


const Friends = (props) => {

    debugger;
    let friendsView = props.friendsPage.map(f => <FriendList friend = {f.friend}/>);


    return (
        <div>
            <div>

                { friendsView }

            </div>
        </div>
    )

 };



export default Friends