import React, { useState, useEffect } from 'react';

function GhostLeg() {

  const [isModal, setIsModal] = useState(false);
  const [isExplain, setIsExplain] = useState(false);

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

  useEffect(() => {
    trasheMove();
  }, []);

  const trasheMove = () => {

    const resultValue = sessionStorage.getItem('result')


    // 1번째일 때 사다리

    if (resultValue === 1) {
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

  // if (resultValue === 2) {

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

  // }



  // 3번째일 때 사다리

  if (resultValue === 3) {

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

  if (resultValue === 4) {

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

  if (resultValue === 5) {

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

  if (resultValue === 6) {

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


  // modal의 값이 바뀌는 조건은 1,2,3,4,5일 때는 순서에 맞는 쓰레기통으로 이동
  // 6번 이후는 무조건 6번 쓰레기통으로 이동
  // session 값에 저장된 걸 모달 안에 넣음

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
          <h2>비닐</h2>
        </div>
        <div className='trashName'>
          <img src='./images/separateTrash2.png' alt='trash2' className='separate2'/>
          <h2>플라스틱</h2>
        </div>
        <div className='trashName'>
          <img src='./images/separateTrash3.png' alt='trash3' className='separate3'/>
          <h2>캔</h2>
        </div>
        <div className='trashName'>
          <img src='./images/separateTrash4.png' alt='trash4' className='separate4'/>
          <h2>유리</h2>
        </div>
        <div className='trashName'>
          <img src='./images/separateTrash5.png' alt='trash5' className='separate5'/>
          <h2>금속</h2>
        </div>
        <div className='trashName'>
          <img src='./images/separateTrash6.png' alt='trash6' className='separate6'/>  
          <h2>기타</h2>
        </div>    
      </div>   
      <div className='modalCover'>
        <div className={`${isModal ? 'modal' : ''}`} id='modal'>
          <h1 className={`${isExplain ? 'explain' : ''}`} id='explain'>
            플라스틱입니다
          </h1>
          <a href="/" className={`${isExplain ? 'explain' : ''}`}>홈페이지 이동</a>
        </div>
      </div>   
    </div>
  );

}

export default GhostLeg;