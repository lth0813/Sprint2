import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [file,setFile] = useState(null);


  const uploadfile = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  }

  const sendfile = () => {  
    const filename = "1.jpg";
    const server = 'http://192.168.0.53:8000'
    const formData = new FormData();
    formData.append("files",file,filename)
    axios.post(server+'/file/',formData,
      {headers:{'Content-Type': 'multipart/form-data'}})
      .then((response) => alert("저장완료"))
  }




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input className='file' type='file' onChange={(e)=>{uploadfile(e)}}></input>
        <button onClick={()=>{sendfile()}}>클릭</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
