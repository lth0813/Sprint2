import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const [file,setFile] = useState(null);


  const uploadfile = (e) => {
    setFile(e.target.files[0])
  }

  const sendfile = () => {  
    const formData = new FormData();
    formData.append("files",file)
    axios.post('http://10.10.21.89:8000/file/',formData,
      {headers:{'Content-Type': 'multipart/form-data'}}).then((response) => window.location.href='http://10.10.21.89:8000/loading/?file='+file['name'])   
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
