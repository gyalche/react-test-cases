import React, { useState } from 'react'

const About = () => {
  const [data, setData] = useState('')
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>Welcome to about page</p>
      <button onClick={()=>setData("data")}>update</button>
      <p>{data}</p>
    </div>
  )
}

export default About