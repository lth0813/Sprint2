import React, { useState, useEffect } from 'react';
import ExplainModal from './ExplainModal';
import axios from 'axios';

function GhostLeg() {

  const [isModal, setIsModal] = useState(false);
  const [isExplain, setIsExplain] = useState(false);
  const [explainModal, setExplainModal] = useState(false);

  const [isMl1, setIsMl1] = useState(false);
  const [isMl2, setIsMl2] = useState(false);
  const [isMl3, setIsMl3] = useState(false);
  const [isMr1, setIsMr1] = useState(false);
  const [isMr2, setIsMr2] = useState(false);
  const [isMr3, setIsMr3] = useState(false);
  const [isMd1, setIsMd1] = useState(false);
  const [isMd2, setIsMd2] = useState(false);
  const [isMd3, setIsMd3] = useState(false);
  const [isMd4, setIsMd4] = useState(false);
  const [isMd5, setIsMd5] = useState(false);
  const [isMd6, setIsMd6] = useState(false);
  
  const[classification, setClass] = useState(false);

  const findclass = () => {
    const answer = sessionStorage.getItem('result')
    if (answer === '0') {
      setClass('종이') 
    }
    if (answer === '1') {
      setClass('플라스틱')
    }
    if (answer === '2') {
      setClass('유리병')
    }
    if (answer === '3') {
      setClass('캔')
    }
    if (answer === '4') {
      setClass('스티로폼')
    }
    if (answer === '5') {
      setClass('페트병')
    }
  }

  useEffect(() => {
    findclass();
  }, []);

  useEffect(() => {
    trasheMove();
  }, []);

  const trasheMove = () => {

    const resultValue = sessionStorage.getItem('result')


    // 1번째일 때 사다리

    if (resultValue === "0") {
      setTimeout(() => {
        setIsMl1(true);
      }, 1600);
  
      setTimeout(() => {
        setIsMd1(true);
      }, 2300);
  
      setTimeout(() => {
        setIsModal(true);
      }, 3300);
  
      setTimeout(() => {
        setIsExplain(true);
      }, 3540);
    }


  // 2번째일 때 사다리

  if (resultValue === "1") {

    setTimeout(() => {
        setIsMl2(true);
        }, 1600);

    setTimeout(() => {
        setIsMd2(true);
    }, 2300);

      setTimeout(() => {
          setIsModal(true);
      }, 3300);

      setTimeout(() => {
      setIsExplain(true);
    }, 3540);

  }



  // 3번째일 때 사다리

  if (resultValue === "2") {

    setTimeout(() => {
        setIsMl3(true);
        }, 1600);

    setTimeout(() => {
        setIsMd3(true);
    }, 2300);

    setTimeout(() => {
        setIsModal(true);
    }, 3300);

    setTimeout(() => {
      setIsExplain(true);
    }, 3540);

  }



  // 4번째일 때 사다리

  if (resultValue === "3") {

    setTimeout(() => {
        setIsMr1(true);
        }, 1600);

    setTimeout(() => {
        setIsMd4(true);
    }, 2300);

    setTimeout(() => {
      setIsModal(true);
    }, 3300);

    setTimeout(() => {
      setIsExplain(true);
    }, 3540);

  }



  // 5번째일 때 사다리

  if (resultValue === "4") {

    setTimeout(() => {
        setIsMr2(true);
        }, 1600);

    setTimeout(() => {
        setIsMd5(true);
    }, 2300);

    setTimeout(() => {
        setIsModal(true);
    }, 3300);

    setTimeout(() => {
      setIsExplain(true);
    }, 3540);

  }



  //     6번째일 때 사다리

  if (resultValue === "5") {

      setTimeout(() => {
        setIsMr3(true);
      }, 1600);

      setTimeout(() => {
        setIsMd6(true);
      }, 2300);

    setTimeout(() => {
        setIsModal(true);
    }, 3300);

    setTimeout(() => {
      setIsExplain(true);
    }, 3540);

    }

  };

  
  const sendResult = () => {
    const server = 'http://10.10.21.89:8000'
      axios.post(server+'/result/',{
        filename : window.sessionStorage.getItem('filename'),
        result : window.sessionStorage.getItem('result')
      },
      {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
      .then((response) => alert(response.data))
  }


  return (
    <div className="ladder"> 
      <img
        alt='catTrash'
        src="./images/trash.png"
        className={
          `${isModal ? 'modal' : ''}
          ${isMl1 ? 'ml1' : ''} ${isMd1 ? 'md1' : ''} 
          ${isMl2 ? 'ml2' : ''} ${isMd2 ? 'md2' : ''} 
          ${isMl3 ? 'ml3' : ''} ${isMd3 ? 'md3' : ''}
          ${isMr1 ? 'mr1' : ''} ${isMd4 ? 'md4' : ''}  
          ${isMr2 ? 'mr2' : ''} ${isMd5 ? 'md5' : ''} 
          ${isMr3 ? 'mr3' : ''} ${isMd6 ? 'md6' : ''}`        
        }
        id='miniTrash'
      />     
      <div className={`separateTrash ${isModal ? 'modal' : ''}`}>
        <div className='trashName'>
          <img src='./images/separateTrash1.png' alt='trash1' className='separate1'/>
          <h2>종이</h2>
        </div>
        <div className='trashName'>
          <img src='./images/separateTrash2.png' alt='trash2' className='separate2'/>
          <h2>플라스틱</h2>
        </div>
        <div className='trashName'>
          <img src='./images/separateTrash3.png' alt='trash3' className='separate3'/>
          <h2>유리병</h2>
        </div>
        <div className='trashName'>
          <img src='./images/separateTrash4.png' alt='trash4' className='separate4'/>
          <h2>캔</h2>
        </div>
        <div className='trashName'>
          <img src='./images/separateTrash5.png' alt='trash5' className='separate5'/>
          <h2>스티로폼</h2>
        </div>
        <div className='trashName'>
          <img src='./images/separateTrash6.png' alt='trash6' className='separate6'/>  
          <h2>페트병</h2>
        </div>    
      </div>   
      <div className='modalCover'>
        <div className={`${isModal ? 'modal' : ''}`} id='modal'>
          <h1 className={`${isExplain ? 'explain' : ''}`} id='explain'>
            {classification}<br/> 맞습니까?
          </h1>
          <div className='YesOrNo'>
            <a href="/" onClick={()=>{sendResult()}} className={`${isExplain ? 'explain' : ''}`}>예</a>
            <a onClick={()=>{setExplainModal(true)}} className={`${isExplain ? 'explain' : ''}`}>아니요</a>
          </div>
        </div>
      </div>   
      <ExplainModal explainModal={explainModal} setExplainModal={setExplainModal}/>
    </div>
  );

}

export default GhostLeg;