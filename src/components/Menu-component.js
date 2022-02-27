import React from 'react'
 import { Link } from 'react-router-dom';

export default function MenuComponent(props) {
   const path = props.path
  return (
    
    <Link to={path} className='MenuComponent' onClick={props.handleClick}>
        <img className='Menu--img' src={require(`../images/${props.itemImgUrl}`)} alt='IMG MESSING' />
        <p  className='Menu--title'>{props.itemName}</p>
        
    </Link>
  )
}
