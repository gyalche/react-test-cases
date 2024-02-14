import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = useState("")

  return (
    <div className="App">
      <p>First React test case</p>
      <input type="text" placeholder="enter user name" name="username" value={data} onChange={(e) => setData(e.target.value)} />
      <br />
      <img title="ai generated img" src='https://media.istockphoto.com/id/637696304/photo/patan.jpg?s=612x612&w=0&k=20&c=-53aSTGBGoOOqX5aoC3Hs1jhZ527v3Id_xOawHHVPpg=' />
    </div>
  );
}

export default App;
