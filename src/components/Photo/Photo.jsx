import React from 'react';
import s from './Photo.module.css'
import Photos from './Photos/Photos';
const Photo = (props) =>{
   
    let PhotoItem = props.state.photo.map (p => <Photos img = {p.img} id={p.id} />) 

    return(
        <div className = {s.photo}>
            {PhotoItem}

    </div>
    
    )
}
export default Photo;