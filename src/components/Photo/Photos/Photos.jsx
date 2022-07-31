import React from 'react';
import s from './Photos.module.css'

const Photos = (props) => {
    return (
        <div>
        <div className={s.item}> <img src = {props.img}/> </div>
    <button>Like</button>
        <button>Remove</button>
        </div>
    )
    }
export default Photos

