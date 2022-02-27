import React from 'react'
import CardFriend from './CardFriend'

export default function NavRight() {
  return (
    <div className='Nav-right'>
        <div className='Nav-right--header'>
            <p className='Nav-right--title'>Friend Activity</p>
            <img className='Nav-right---img' src={require(`../images/add-user.png`)} alt=''/>
        </div>

        <div className='friends-cards'>
            <CardFriend 
                imgUrl="pdp.jpg"
                name="john Doe"
                song="Kamehameha - Dada"
                playlist="Rap Maroc 2022"
            />
            <CardFriend 
                imgUrl="img2.jpg"
                name="Pinky Winky"
                song="Life Letters - Never gets Used To People"
                playlist="Random songs"
            />
            <CardFriend 
                imgUrl="img3.jpg"
                name="Sonic Saga fan"
                song="Chemicals - Cardinal"
                playlist="Hype Hit"
            />
        </div>
    </div>
  )
}
