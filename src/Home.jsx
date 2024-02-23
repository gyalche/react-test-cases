import React from 'react'
const Home = () => {
  const [data, setData] = React.useState("") 
  return (
    <div>
    <p>Test Click event with button</p>
    <button onClick={() => setData("update")}>update data</button>
    <h1>{data}</h1>
    </div>
  )
}

export default Home
