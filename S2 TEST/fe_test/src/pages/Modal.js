import ReactModal from "react-modal";
import {ConfusionMatrix} from "react-confusion-matrix";
import "../css/Modal.css"


function Modal(props) {
    const dataArray = [
        [467, 18, 4, 6, 4, 2],
        [6, 376, 10, 10, 6, 7],
        [9, 19, 432, 21, 0, 21],
        [3, 18, 14, 417, 0, 10],
        [7, 11, 0, 1, 482, 1],
        [6, 16, 31, 8, 1, 436]];
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
    const paragraphStyle = {
        fontSize: "16px",
        lineHeight: "1.6",
        color: "#333",
        marginBottom: "15px",
      };

    return(
        <ReactModal style={ModalStyle} isOpen={props.modal} onRequestClose={() => props.setModal(false)}  ariaHideApp={false}>
            <div className="flex">
                <div className="chart">
                    <ConfusionMatrix
                        sideBar= {true}
                        labels= {labelsArray}
                        data= {dataArray}
                        >
                    </ConfusionMatrix>
                    <div className="data">
                        <h1>18,000개의 데이터</h1>
                        <p className="chartResult">
                            정확도: 0.8980<br/> 손실: 0.5314
                        </p>
                    </div>
                </div>
            </div>
        </ReactModal>
    )
}
export default Modal;