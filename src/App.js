import {useState, useEffect} from "react";
import ChatRoom from "./ChatRoom";
import "./App.css"


export default function App() {
    const [roomId, setRoomId] = useState("general")
    const [show, setShow] = useState(false)
    return (
        <div className="body">
            <div>
                <label>
                    Комната: {''}
                    <select className="dropdown" value={roomId} onChange={e => setRoomId(e.target.value)}>
                        <option value='общий'>Общий</option>
                        <option value='фильм'>Фильмы</option>
                        <option value='музыка'>Музыка</option>
                        <option value='игры'>Игры</option>
                    </select>
                </label>
                <button onClick={() => setShow(!show)} className="closeBtn">
                    {show ? 'close chat' : 'open chat'}
                </button>
            </div>
            {show && <hr/>}
            {show && <ChatRoom roomId={roomId}/>}
        </div>
    )
}