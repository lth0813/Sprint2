
import React, { useState, useEffect } from 'react';
// import axios from 'axios';

function Loading() {

    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {

    //    const server = 'http://192.168.0.53:8000';

    //     axios.post(server + '/file/', {
    //       headers: {
    //         'Content-Type': 'multipart/form-data'
    //       }
    //     })
    //       .then(response => {
    //         const result = response.data.result;
    //         sessionStorage.setItem('result', result); 
    //         console.log('File uploaded successfully!');
    //       })
    //       .catch(error => {
    //         console.error('File upload failed:', error);
    //       });


      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
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
