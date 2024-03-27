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
    {/* <input type="text" id="input1" />
    <input type="text" id="input2" /> */}
    <div role="hello_world"></div>

    <button>click me</button>
    <button>click me</button>

<select>
  <option value="">1</option>
  <option value="">2</option>
  <option value="">3</option>
</select>


      <label htmlFor='user-name'>username</label>
      <input type="text" id="user-name" defaultValue="dawa" />

      <label htmlFor='user-check'>username</label>
      <input type="checkbox" id="user-check" defaultValue="dawa" defaultChecked={true} />

      <label htmlFor='user-check1'>username</label>
      <input type="checkbox" id="user-check1" defaultValue="dawa" defaultChecked={true} />

<input type="text" placeholder="enter user name" />
<input type="text" placeholder="enter user name" />
<input type="text" placeholder="enter user name" />
<input type="text" placeholder="enter user name" />

<button>submit</button>

<p className="checking">HELLOW WORLD DON</p>

    </div>
  )
}

export default Home
