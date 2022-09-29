import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
const MyPosts = (props) => {
 
let NewPost = props.posts.map (post =>  <Post message = {post.message} likes = {post.like} img =  {post.img} name = {post.name}/>)
let NewPostElement = React.createRef()

let addPost = () =>{
  let text = NewPostElement.current.value
  props.addPost(text)

}
let addPostChange = () =>{
  let text = NewPostElement.current.value
 props.updateNewPostText(text)
}
return (
  <div className ={s.postblock}>
 mypost
      <div>
        newpost
      </div>
    <div>
      <div>
<textarea onChange={addPostChange} ref={NewPostElement} value = {props.newPostText}/>
</div>
<button onClick={addPost}>Add</button>
<button>Remove</button>
</div>

<div className={s.posts}>
  {NewPost}
      </div>
    </div>
)
}
export default MyPosts

