import React from 'react';
import music from "../music/Lamp - Yume Utsutsu.mp3"
import music1 from "../music/Mac DeMarco - Chamber of Reflection.mp3"
import music2 from "../music/Буерак - Культ тела.mp3"
import music3 from "../music/Christmas Kids - Roar.mp3"
import music4 from "../music/Rammstein - Klavier.mp3"
function MusicPage() {
    return (
        <div className="playerBlock">
            <h1>Music</h1>
            <div className="music">
                <audio controls>
                    <source src={music} type="audio/mpeg" />
                    Ваш браузер не поддерживает воспроизведение аудио.
                </audio>
                <audio controls>
                    <source src={music1} type="audio/mpeg" />
                    Ваш браузер не поддерживает воспроизведение аудио.
                </audio>
                <audio controls>
                    <source src={music2} type="audio/mpeg" />
                    Ваш браузер не поддерживает воспроизведение аудио.
                </audio>
                <audio controls>
                    <source src={music3} type="audio/mpeg" />
                    Ваш браузер не поддерживает воспроизведение аудио.
                </audio>
                <audio controls>
                    <source src={music4} type="audio/mpeg" />
                    Ваш браузер не поддерживает воспроизведение аудио.
                </audio>
            </div>
        </div>
    );
}

export default MusicPage;