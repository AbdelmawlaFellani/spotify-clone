import React from 'react'
import MenuComponent from './Menu-component'


export default function Menu(props) {
  return (
    <div className='Menu-container'>
        
        <MenuComponent 
            itemImgUrl= "home-empty.png"
            itemName= "Home"
            path='../pages/Home'
        />
        <MenuComponent 
            itemImgUrl= "search-empty.png"
            itemName= "Search"
            path='../pages/Search'
        />
        <MenuComponent 
            itemImgUrl= "biblio-empty.png"
            itemName= "Your Library"
            path='../pages/Library'
        />
        <div className="add-label">
        <MenuComponent 
            itemImgUrl= "add.png"
            itemName= "Create Playlist"
            handleClick={props.function}
        />
        <MenuComponent 
            itemImgUrl= "like.png"
            itemName= "Liked Songs"
        />
        <MenuComponent 
            itemImgUrl= "episode.png"
            itemName= "Your Episodes"
        />
        </div>
    </div>
  )
}
