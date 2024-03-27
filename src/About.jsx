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
      <div data-testid="div-testid">Testing with test id</div>
      <div data-testid="id-test">Testing with test id1</div>
      <div data-testid="id-test">Testing with test id2</div>

      <input type="text" defaultValue={"dawadon"} />
      <textarea name="" id="" cols="30" rows="10" defaultValue={"dawaisdon"}></textarea>
      <input type="radio" defaultValue={"dawadon"} />
    </div>
  )
}

export default About