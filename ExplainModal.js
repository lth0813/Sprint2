import axios from "axios";
import ReactModal from "react-modal";

const reSendResult = () => {
    const server = 'http://192.168.0.53:8000'
    axios.post(server+'/result/',{
      filename : "어쩌구" ,
      result : document.querySelector('input[name=result]:checked').value
    },
    {headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
    .then((response) => alert(response.data))
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
            width: '400px',
            height: '600px',
            transform: 'translate(-50%, -50%)',
            top: '50%',
            left: '50%',
            border: '1px solid #ccc',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '3px',
            outline: 'none',
            padding: '0.5%',
            zIndex: '15',
            borderRadius: '20px'
        },
    }
    return(
        <ReactModal style={ExplainModalStyle} isOpen={props.explainModal}>
            <div style={{height:"550px",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"space-between"}}>
                <h2>결과가 다른가요?</h2>
                <div style={{height:"300px",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
                    <label><input type="radio" name="result" value={1}/> 비닐</label>
                    <label><input type="radio" name="result" value={2}/> 플라스틱</label>
                    <label><input type="radio" name="result" value={3}/> 캔</label>
                    <label><input type="radio" name="result" value={4}/> 유리</label>
                    <label><input type="radio" name="result" value={5}/> 금속</label>
                    <label><input type="radio" name="result" value={6}/> 기타</label>
                </div>
                <button onClick={()=>{reSendResult()}}>제출</button>

            </div>
        </ReactModal>
    )
}
export default ExplainModal;