import React from 'react'

function GroupDetail(props) {
  return (
    <>
      <p>Name: {props.group.name}</p>
      <p>Year: {props.group.year}</p>
      <p>Album Count: {props.group.detail.albumCount}</p>

      
    </>
  )
}

export default GroupDetail