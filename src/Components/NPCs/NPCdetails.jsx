import React from 'react'
import Loading from '../loading';

const SmallDetailNPC = ({NPC}) => {
  if(!NPC){
    return <Loading/>
  }
  const {name, sub_type} = NPC;

  return (
    <>
      <p>Name: {name} SubType: {sub_type}</p>
    </>
  )
}

export default SmallDetailNPC;