
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Loading() {


    
    // fileName세션

    const navigate = useNavigate();

    useEffect(() => {

        const fileName = sessionStorage.getItem('filename');
        console.log("3")
        if (!fileName) {
    
        console.log("1")
          alert("사진을 업로드 해주세요");

    
        }
        console.log("2")
        navigate('/');

      }, [navigate]);







    const [fadeOut, setFadeOut] = useState(false);
    const [answer, setAnswer] = useState(false);

    useEffect(() => {

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
    
    if (answer) {
        setAnswer(false);
        setFadeOut(true);
        }
    
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
