import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Modal from './Modal';


function App() {
  const [modal,setModal] = useState(false);
  const [file,setFile] = useState(null);


  const uploadfile = (e) => {
    console.log(e.target.files[0])
    setFile(e.target.files[0])
  }

  const sendfile = () => {  
    const server = 'http://192.168.0.53:8000'
    const formData = new FormData();
    formData.append("files",file)
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
        <button onClick={()=>{setModal(true)}}>모달</button>
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
      <Modal setModal={setModal} modal={modal}></Modal>
    </div>
  );
}

export default App;
