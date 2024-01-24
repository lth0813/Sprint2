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
            width: '800px',
            height: '800px',
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
            borderRadius: '20px'
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
            <div>
                <div className="reuseComment">
                    <p>
                        안녕하세요. 가정에서 버려지는 쓰레기가 새로운 에너지가 될 수 있도록 노력하는 리유즈입니다. <br/><br/>

                        우리는 일상생활 속에서 분리수거를 자연스럽게 하고 있지만  과연 올바른 방법으로 하고 있는 지 확신하기 어렵습니다. <br/><br/>

                        저희가 개발한 스마트 쓰레기통은 <br/><br/>

                            ❝ 종이, 플라스틱, 유리병, 캔, 스티로폼, 페트병 ❞이라는 6가지 품목으로 적절하게 분리수거합니다. <br/><br/>



                        - 분리수거와 에너지가 관련이 있나요?<br/>

                        폐기물 에너지는 신재생 에너지의 하나입니다.<br/>

                        통상적으로 폐기물 재활용은 '수거 - 선별 - 재활용'이라는 과정을 거칩니다. 
                        선별 과정에서 쓰레기가 섞이거나 오염되어 일반쓰레기로 버려지는 경우가 많습니다. 저희 리유즈는 제대로된 분리수거를 통해 이러한 폐기물이 실제 재활용되는 데에 도움이 되고자 합니다.<br/><br/>

                    
                        - 분리수거의 정확도는 얼마나 되나요?<br/>

                        스마트 쓰레기통은 검증 데이터에서 약 90% 정확도를 보여주고 있습니다.<br/>

                        총 사용된 데이터: 18,000(훈련 데이터: 11,520, 검증 데이터: 2,880, 테스트 데이터: 3,600)<br/>

                        훈련한 결과값의 평균: loss: 0.0085 - accuracy: 0.9974 - val_loss: 0.5314 - val_accuracy: 0.8980<br/>

                        또한 추가되는 데이터를 꾸준히 업데이트하여 더 높은 정확도를 갖출 수 있도록 노력하고 있습니다.<br/>
                    </p>
                </div>
                <ConfusionMatrix
                    sideBar= {true}
                    labels= {labelsArray}
                    data= {dataArray}>
                </ConfusionMatrix>
            </div>
        </ReactModal>
    )
}
export default Modal;