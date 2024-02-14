import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("")

  return (
    <div className="App">
      <p>Test Click event with button</p>
      <button onClick={() => setData("update")}>update data</button>
      <h1>{data}</h1>
    </div>
  );
}

export default App;
