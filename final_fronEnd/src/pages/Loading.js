
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Loading() {

    const [fadeOut, setFadeOut] = useState(false);
    const [answer, setAnswer] = useState(false);


    // 세션에 filename이 없을 경우 alert을 띄우고
    // "/"로 돌아가게 만드는 코드

    const navigate = useNavigate();

    useEffect(() => {

        const fileName = sessionStorage.getItem('filename');
        if (!fileName) {
            setTimeout(() => {
                alert("사진을 업로드 해주세요");
                navigate('/');  
            },0)
        }   

    }, [navigate]);



    useEffect(() => {


        // filename을 확인 후 서버에서 result를 받고
        // 그 깂을 세션에 저장

        const server = 'http://10.10.21.89:8000';
        const filename = sessionStorage.getItem('filename')

        if (filename) {
        axios.post(server+'/predict/',
        {filename :filename},{headers:{'Content-Type': 'application/x-www-form-urlencoded'}}
        ).then(res => {
            const result = res.data.result;
            sessionStorage.setItem('result', result); 
            setAnswer(true);
            console.log(res);
            })
            .catch(error => {
            console.error('failed_to_get_result', error);
            });}
    }, []);


    // 바로 위 코드에서 result 값을 세션으로 받아야
    // setAnswer가 true가 되기 때문에
    // true가 된 후 fadeOut이 실행되고 그것이 끝나면
    // navigateToGhostleg을 실행하는 코드
        
    if (answer) {
        setAnswer(false);
        setFadeOut(true);
    }

    // onAnimationEnd가 되면 "/ghostleg"로 이동하는 코드
    
    const navigateToGhostleg = () => {
        window.location.href = "/ghostleg";
    }

    return(
        <div className={`loading ${fadeOut ? 'fadeOut' : ''}`} onAnimationEnd={navigateToGhostleg}>
            <div className="scene">
                <div className="objects">
                    <img className="trash" alt='catTrash' src='./images/trash.png'/>
                </div>
                <div className="wizard">
                    <div className="body"></div>
                    <div className="right-arm">
                        <div className="right-hand"></div>
                    </div>
                    <div className="left-arm">
                        <div className="left-hand"></div>
                    </div>
                    <div className="head">
                        <div className="beard"></div>
                        <div className="face">
                            <div className="adds"></div>
                        </div>
                        <div className="hat">
                            <div className="hat-of-the-hat"></div>
                            <div className="four-point-star --first"></div>
                            <div className="four-point-star --second"></div>
                            <div className="four-point-star --third"></div>
                        </div>
                    </div>
                </div>
                <div className="noise"></div>
            </div>
        </div>
    )
}

export default Loading;
