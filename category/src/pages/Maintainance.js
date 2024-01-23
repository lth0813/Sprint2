
import React, { useState, useEffect } from 'react';

function Maintainance() {

    const [dots, setDots] = useState('');

    useEffect(() => {
      const intervalId = setInterval(() => {
        setDots(prevDots => {
          switch (prevDots) {
            case '':
              return ' .';
            case ' .':
              return ' . .';
            case ' . .':
              return '.';
            default:
              return '';
          }
        });
      }, 1400);

      return () => clearInterval(intervalId);
    }, []);

    return(
        <div className="loading">
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
            </div>
            <div className="noise"></div>
            <h2 className='maintainance'>점검중{dots}</h2>
        </div>
    )
}

export default Maintainance;
