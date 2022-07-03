import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) => {
 
let NewPost = props.posts.map (post =>  <Post message = {post.message} likes = {post.like} img =  {post.img} name = {post.name}/>)
return (
  <div className ={s.postblock}>
 mypost
      <div>
        newpost
      </div>
    <div>
      <div>
<textarea></textarea>
</div>
<button onClick={() => {alert('rgrgr')}}>Add</button>
<button>Remove</button>
</div>

<div className={s.posts}>
  {NewPost}
      </div>
    </div>
)
}
export default MyPosts

