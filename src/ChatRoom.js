import {useEffect, useState} from "react";
import {createConnection} from "./chat";
import GeneralPage from "./pages/GeneralPage";
import FilmsPage from "./pages/FilmsPage";
import MusicPage from "./pages/MusicPage";
import GamesPage from "./pages/GamesPage";

function ChatRoom({roomId}){
    const [serverUrl, setServerUrl] = useState('https://localhost123')

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId)
        connection.connect()
        return () => {
            connection.disconnect()
        }
    }, [roomId, serverUrl]);

    const renderCategory = (roomId) => {
        switch (roomId) {
            case "общий":
                return <GeneralPage/>
            case "фильм":
                return <FilmsPage/>
            case "музыка":
                return <MusicPage/>
            case "игры":
                return <GamesPage/>
        }
    }

    return(
        <>
            <label>
                server Url:{''}
                <input
                    className="url"
                    value={serverUrl}
                    onChange={(e) => setServerUrl(e.target.value)}
                />
            </label>
            <h1>welcome to the {roomId} room!</h1>
            <div className="categoriesBlock">
                {renderCategory(roomId)}
            </div>
        </>
    )
}

export default ChatRoom