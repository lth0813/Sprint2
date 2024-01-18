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

    // 1번째일 때 사다리

    //   setTimeout(() => {
    //     setIsMl1(true);
    //   }, 0);

    //   setTimeout(() => {
    //     setIsMd1(true);
    //   }, 1000);

    //   setTimeout(() => {
    //     setIsModal(true);
    //   }, 2000);

    // setTimeout(() => {
    //   setIsExplain(true);
    // }, 2240);




    // 2번째일 때 사다리

    // setTimeout(() => {
    //     setIsMl2(true);
    //     }, 0);

    // setTimeout(() => {
    //     setIsMd2(true);
    // }, 1000);

    //   setTimeout(() => {
    //      setIsModal(true);
    //   }, 2000);

    //  setTimeout(() => {
    //   setIsExplain(true);
    // }, 2240);




    // 3번째일 때 사다리

    // setTimeout(() => {
    //     setIsMl3(true);
    //     }, 500);

    // setTimeout(() => {
    //     setIsMd3(true);
    // }, 1000);

    // setTimeout(() => {
    //     setIsModal(true);
    // }, 2000);

    // setTimeout(() => {
    //   setIsExplain(true);
    // }, 2240);





    // 4번째일 때 사다리

    // setTimeout(() => {
    //     setIsMr1(true);
    //     }, 500);

    // setTimeout(() => {
    //     setIsMd4(true);
    // }, 1000);

    // setTimeout(() => {
    //   setIsModal(true);
    // }, 2000);

    // setTimeout(() => {
    //   setIsExplain(true);
    // }, 2240);





    // 5번째일 때 사다리

    // setTimeout(() => {
    //     setIsMr2(true);
    //     }, 0);

    // setTimeout(() => {
    //     setIsMd5(true);
    // }, 1000);

    // setTimeout(() => {
    //     setIsModal(true);
    // }, 2000);

    // setTimeout(() => {
    //   setIsExplain(true);
    // }, 2240);




    //     6번째일 때 사다리

      setTimeout(() => {
        setIsMr3(true);
      }, 0);

      setTimeout(() => {
        setIsMd6(true);
      }, 1000);

    setTimeout(() => {
        setIsModal(true);
    }, 2000);

    setTimeout(() => {
      setIsExplain(true);
    }, 2240);


    };


    // modal의 값이 바뀌는 조건은 1,2,3,4,5일 때는 순서에 맞는 쓰레기통으로 이동
    // 6번 이후는 무조건 6번 쓰레기통으로 이동
    // session 값에 저장된 걸 모달 안에 넣음
  
    return (
      <div className="ladder"> 
        <img
          src="./images/trash.png"
          className={
            // `${isMl1 ? 'ml1' : ''} ${isMd1 ? 'md1' : ''}`  
            // `${isMl2 ? 'ml2' : ''} ${isMd2 ? 'md2' : ''}`  
            // `${isMl3 ? 'ml3' : ''} ${isMd3 ? 'md3' : ''}`  
            // `${isMr1 ? 'mr1' : ''} ${isMd4 ? 'md4' : ''}`  
            // `${isMr2 ? 'mr2' : ''} ${isMd5 ? 'md5' : ''}`  
            `${isMr3 ? 'mr3' : ''} ${isMd6 ? 'md6' : ''}`        
          }
          id='miniTrash'
        />
        
        <div className='separateTrash'>
          <img src='./images/separateTrash1.png' className='separate1'/>
          <img src='./images/separateTrash2.png' className='separate2'/>
          <img src='./images/separateTrash3.png' className='separate3'/>
          <img src='./images/separateTrash4.png' className='separate4'/>
          <img src='./images/separateTrash5.png' className='separate5'/>
          <img src='./images/separateTrash6.png' className='separate6'/>      
        </div>   
        <div className='modalCover'>
          <div className={`${isModal ? 'modal' : ''}`} id='modal'>
            <p className={`${isExplain ? 'explain' : ''}`} id='explain'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eum! 
              fugiat et. Qui ullam voluptates provident laudantium!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eum! 
              fugiat et. Qui ullam voluptates provident laudantium!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eum! 
              fugiat et. Qui ullam voluptates provident laudantium!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, eum! 
              fugiat et. Qui ullam voluptates provident laudantium!
            </p>
            {/* <a href="/">확인</a> */}
          </div>
        </div>   
      </div>
    );

}

export default GhostLeg;