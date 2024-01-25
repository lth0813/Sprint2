import ReactModal from "react-modal";
import { ConfusionMatrix } from "react-confusion-matrix";
import "../css/Modal.css"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Modal(props) {
    const [vl, setVl] = useState(false);
    const [va, setVa] = useState(false);
    const [cm, setCm] = useState(false);

    useEffect(() => {
        console.log('Modal initializing..')
        axios.post('http://10.10.21.89:8000/modelspec/')
        .then((res)=>{
            setVl(res.data.vl)
            setVa(res.data.va)
            setCm(res.data.cm) 
            console.log('Initializing complete!!')   
            })
    },[])

    // ConfusionMatrix 표 안의 값을 넣는 코드

    const labelsArray = ["Paper", "Plastic", "Glass", "Can", "Styrofoam", "Pl Bottle"];

      

    const ModalStyle = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: '10'
        },
        content: {
            position: 'absolute',
            width: '660px',
            height: '700px',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            padding: '0.5%',
            zIndex: '15',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    };

    return(
        <ReactModal style={ModalStyle} isOpen={props.modal} onRequestClose={() => props.setModal(false)}  ariaHideApp={false}>
            <div className="flex">
                <div className="chart">
                    <ConfusionMatrix
                        sideBar= {true}
                        labels= {labelsArray}
                        data= {cm}
                        >
                    </ConfusionMatrix>
                    <div className="data">
                        <h1>18,000개의 데이터</h1>
                        <p className="chartResult">
                            정확도: {va}<br/> 손실: {vl}
                        </p>
                    </div>
                </div>
            </div>
        </ReactModal>
    )
}
export default Modal;