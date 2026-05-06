import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src={props.img} alt='Profile Picture'></img>
        <h1>{props.user}</h1>
        <p>{props.bio}</p>
        <button>View Profile</button>
      </div>
    </div>
  )
}

export default Card
