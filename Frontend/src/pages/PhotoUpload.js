import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from "./Modal";

function PhotoUpload() {

    const [modal,setModal] = useState(false);
    const [file,setFile] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [loading,setLoading] = useState(null);
    const [addlearn,setAL] = useState(false);


    // DB에 특정 개수가 쌓일 시 /maintainance로 이동 후
    // 모델이 학습하고 다 된다면 원래 페이지로 돌아온다는 코드

    useEffect(() => {
        axios.post('http://10.10.21.89:8000/check/')
        .then((res)=>{
            if (res.data === 0) {
                console.log('재학습 없음')
                setAL(false)
            }
            else if (res.data === 1) {
                setAL(true)
                if (addlearn){
                    window.location.href = "/maintainance"
                }
            }
        })
    },[addlearn])

    useEffect(()=>{
        goloading();
    },[loading])

    const goloading = () => {
        if(loading !== null){
            window.location.href = "/loading"
        }
    }


    // 이미지 파일이 아닌 것을 첨부할 시 실행되는 코드

    const uploadfile = (e) => {
        if (e.target.files[0] != null) {

            const file_extension = e.target.files[0].name.slice(-4).toLowerCase()
            const file_allow = ['.jpg','.png','jpeg','webp']

            if(!file_allow.includes(file_extension)){
                alert("이미지 파일만 첨부해주세요.")
            }   else{
                setFile(e.target.files[0])
            }
        }
    }


    // 이미지 파일을 첨부해 서버에 전송하는 코드

    const sendfile = () => {  
        const server = 'http://10.10.21.89:8000'
        const formData = new FormData();
        formData.append("files",file)
        axios.post(server+'/file/',formData,
        {headers:{'Content-Type': 'multipart/form-data'}})
        .then((res)=>{
            window.sessionStorage.setItem("filename",res.data.filename)
            setLoading(res.data.filename)
        })}


    // 이미지 이름이 너무 길다면 maxLength에서 자르고
    // 이후는 ...으로 나타내는 코드

    const truncateFileName = (fileName, maxLength) => {

        if (fileName.length <= maxLength) {
        return fileName;
        } else {
            return `${fileName.substring(0, maxLength)}...`;
        }
        
    };


    // 변수 file이 변경되면 setShowButton을 false로 반환 후 변경
    // 결과적으로 ${file.name ? 'hovered' : ''}`}과 같이
    // 클래스 이름을 붙였다 없애는 역할을 하는 코드

    useEffect(() => {
        setShowButton(!!file);
    }, [file]);


    return(
        <div className="container">
            <svg onClick={()=>{setModal(true)}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-question-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
            <div className="card">
                <div className={`hidden ${file.name ? 'hovered' : ''}`}></div>
                <div className={`content ${file.name ? 'hovered' : ''}`}>
                    <div className='recycling'>
                        <h2>recycling</h2>
                        <div className='secUpload'>
                            <div className='upload'>
                                <div className='uploadFile'>
                                    <label htmlFor="file">
                                    <div className="wrapper">
                                        <div className="speechbubble">
                                            <p>종이, 플라스틱, 유리, 캔,<br/> 스티로폼, 페트병만 넣어주세요</p>
                                            <span className="username">어느 불쌍한 개발자가..</span>
                                        </div>
                                    </div>
                                    <button className='photo'>
                                        사진 업로드
                                    </button>
                                    </label>
                                    <input className='file' type='file' onChange={(e)=>{uploadfile(e)}} accept=".jpg, .jpeg, .png, .webp"/>
                                </div>
                                <p>{truncateFileName(file.name || "", 16)}</p>
                            </div>
                            <button onClick={() => { sendfile(); }} className={`result ${showButton ? 'show' : ''}`}>결과 확인</button>
                        </div>
                    </div>
                </div>
                <img className={`${file.name ? 'hovered' : ''}`}  alt='trashCan' src="./images/wasteBasket.png"/>
            </div>
            <Modal setModal={setModal} modal={modal}></Modal>
        </div>
    )
}

export default PhotoUpload;
