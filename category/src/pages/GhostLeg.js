import React, { useState, useEffect } from 'react';

function GhostLeg() {

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

      handleMove();
    }, []);
  
    const handleMove = () => {

    // 1번째일 때 사다리

    //   setTimeout(() => {
    //     setIsMl1(true);
    //   }, 0);

    //   setTimeout(() => {
    //     setIsMd1(true);
    //   }, 1000);




    // 2번째일 때 사다리

    // setTimeout(() => {
    //     setIsMl2(true);
    //     }, 0);

    // setTimeout(() => {
    //     setIsMd2(true);
    // }, 1000);



    // 3번째일 때 사다리

    // setTimeout(() => {
    //     setIsMl3(true);
    //     }, 0);

    // setTimeout(() => {
    //     setIsMd3(true);
    // }, 1000);




    // 4번째일 때 사다리

    setTimeout(() => {
        setIsMr1(true);
        }, 0);

    setTimeout(() => {
        setIsMd4(true);
    }, 1000);





    // 5번째일 때 사다리

    // setTimeout(() => {
    //     setIsMr2(true);
    //     }, 0);

    // setTimeout(() => {
    //     setIsMd5(true);
    // }, 1000);





    //     6번째일 때 사다리

    //   setTimeout(() => {
    //     setIsMr3(true);
    //   }, 0);

    //   setTimeout(() => {
    //     setIsMd6(true);
    //   }, 1000);

    };
  
    return (
      <div className="ladder">
        <img
          src="./images/img.png"
          className={
            // `${isMl1 ? 'ml1' : ''} ${isMd1 ? 'md1' : ''}`  
            // `${isMl2 ? 'ml2' : ''} ${isMd2 ? 'md2' : ''}`  
            // `${isMl3 ? 'ml3' : ''} ${isMd3 ? 'md3' : ''}`  
            `${isMr1 ? 'mr1' : ''} ${isMd4 ? 'md4' : ''}`  
            // `${isMr2 ? 'mr2' : ''} ${isMd5 ? 'md5' : ''}`  
            // `${isMr3 ? 'mr3' : ''} ${isMd6 ? 'md6' : ''}`        
        }
        />
      </div>
    );

}

export default GhostLeg;