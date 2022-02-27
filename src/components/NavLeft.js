import React from 'react'

import Menu from './Menu'
import PlaylistMenu from './PlaylistMenu'

export default function NavLeft() {

  const [list,setList] = React.useState(["Playlist N 1","Playlist N 2"])

  const listElements = list.map(thing=> <a href='/' key={thing.indexOf}>{thing}</a>)

  function AddPlaylist(){
    setList(prevState => [...prevState,`Playlist N ${prevState.length+1}`])
  }
  return (
    <div className='Nav-left'>
        <Menu function={AddPlaylist} />
        <PlaylistMenu listElements={listElements}/>
    </div>
  )
}
