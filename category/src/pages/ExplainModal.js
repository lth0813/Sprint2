import axios from "axios";
import ReactModal from "react-modal";

const reSendResult = () => {
    const server = 'http://localhost:8000'
    const checkedRadio = document.querySelector('input[name=result]:checked');

    if (!checkedRadio) {
        alert('분류를 체크해주세요');
        return;
    }


    axios.post(server+'/result/',{
      filename : window.sessionStorage.getItem('filename'),
      result : document.querySelector('input[name=result]:checked').value
    },
    {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
    .then(alert("응답해주셔서 감사합니다.")).then(window.location.href='http://localhost:3000')
}

function ExplainModal (props) {
    const ExplainModalStyle = {
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
            width: '600px',
            height: '600px',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
            border: '1px solid #ccc',
            borderRadius: '3px',
            outline: 'none',
            zIndex: '15',
            borderRadius: '20px',
            display: 'flex',
            aligniItems: 'center',
            justifyContent: 'center',
        },
    }
    return(
        <ReactModal style={ExplainModalStyle} isOpen={props.explainModal}>
            <div className="group">
                <h2>그럼 어떤 분류인가요?</h2>
                <div className="radioGrop">
                    <div className="radio1">
                        <input className="input" type="radio" name="result" id="rb1" value={1}/>
                        <label className="label two" htmlFor="rb1">종이</label>
                        <input className="input" type="radio" name="result" id="rb2" value={2}/>
                        <label className="label four" htmlFor="rb2">플라스틱</label>
                        <input className="input" type="radio" name="result" id="rb3" value={3}/>
                        <label className="label three" htmlFor="rb3">유리병</label>
                    </div>
                    <div className="radio2">
                        <input className="input" type="radio" name="result" id="rb4" value={4}/>
                        <label className="label one" htmlFor="rb4">캔</label>
                        <input className="input" type="radio" name="result" id="rb5" value={5}/>
                        <label className="label four" htmlFor="rb5">스티로폼</label>
                        <input className="input" type="radio" name="result" id="rb6" value={6}/>
                        <label className="label three" htmlFor="rb6">페트병</label>
                    </div>
                </div>
                <button className="change" onClick={()=>{reSendResult()}} type="sum">제출</button>
            </div>
        </ReactModal>
    )
}
export default ExplainModal;