import React from 'react'

export default function CardFriend(props) {
  return (
    <div className='CardFriend'>
        <div className='card-img'>
            <img className='card--img' src={require(`../images/${props.imgUrl}`)} alt='user pic missing'/>
        </div>
        <div className='card-infos'> 
            <div className='status'>
                <p className='card--name'>{props.name}</p>
                <img className='card--icon' src={require(`../images/song-icon.png`)} alt=''/>
            </div>
            <p className='card--song'>{props.song}</p>
            <p className='card--playlist'>{props.playlist}</p>
        </div>
    </div>
  )
}
