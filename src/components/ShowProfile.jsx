import React from 'react'

function ShowProfile({ data }) {
  console.log(data);
  return (
    <>
    <div className="avatar">
        <img src={data.imgUrl} alt={data.name}/>
    </div>
    <h1>Junimo collection</h1>
    </>
  )
}

export default ShowProfile