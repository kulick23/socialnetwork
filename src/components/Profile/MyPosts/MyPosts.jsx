import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = () => {
return (
  <div>
 mypost
      <div>
        newpost
      </div>
    <div>
<textarea></textarea>
<button>Add</button>
<button>Remove</button>
</div>

<div className={s.posts}>
  <Post message = 'Hi, how are you?' likes = '12' img = "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg"/>
  <Post message = "It's my first post" likes = '6' img = "https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"/>
  
      </div>
    </div>
)
}
export default MyPosts

