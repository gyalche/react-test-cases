import React from 'react'
const Home = () => {
  const [data, setData] = React.useState("") 
  return (
    <div>
    {/* <p>Test Click event button</p>
    <button onClick={() => setData("update")}>update data</button>
    <h1>{data}</h1> */}
    <h1>HELLOW KATHMANDU</h1>
    <button>click me1</button>
    <button>click me2</button>
    <label htmlFor="input1">username</label>
    <label htmlFor="input2">userage</label>
    <input type="text" id="input1" />
    <input type="text" id="input2" />
<div role="hello_world"></div>

    </div>
  )
}

export default Home
