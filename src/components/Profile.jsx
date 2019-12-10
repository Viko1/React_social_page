import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return (
    <div className={s.content}>
              <div>
                  <img src='https://dbijapkm3o6fj.cloudfront.net/resources/20611,1004,1,6,4,0,960,330/-3842-/20161013141806/image-gallery.jpeg'/>
              </div>
              <div className={s.ava}>
                  <img src='https://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg'/>
                  ava + description
              </div>
              <div className={s.item}>
                  My posts
              </div>
              <div className={s.item}>
                  new post
              </div>
              <div className={s.item}>
                  post 1
              </div>
              <div className={s.item}>
                  post 2
              </div>
          </div> )
}

export default Profile;