import React from 'react';

function PhotoUpload() {

    return(
        <div className='container'>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="40" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="40" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
            <div className="card">
                <div className="hidden"></div>
                <div className="content">
                    <h2>recycling</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eum! 
                        fugiat et. Qui ullam voluptates provident laudantium!
                    </p>
                    <a href="/loading">사진 업로드</a>
                </div>
                <img src="./images/wasteBasket.png"/>
            </div>
        </div>
    )
}

export default PhotoUpload;