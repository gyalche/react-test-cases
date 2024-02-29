import React, { useState } from 'react'
import { otherMethodTest } from './helper'

const About = () => {
  const [data, setData] = useState('')
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>Welcome to about page</p>
      <button onClick={()=>setData("data")} data-testid="btn1">update</button>
      <button onClick={otherMethodTest}>print</button>
      <p>{data}</p>
    </div>
  )
}

export default About