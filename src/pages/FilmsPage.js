import React, {useState} from 'react';

function FilmsPage() {
    const films = [
        "https://i.pinimg.com/564x/da/d0/2f/dad02f47f25004fb81d90eac7089d9e5.jpg",
        "https://i.pinimg.com/564x/e1/5e/c3/e15ec3eb21e1acce29ec299aae2e0798.jpg",
        "https://i.pinimg.com/564x/16/2f/64/162f642676036ecd342479084f0cbced.jpg",
        "https://i.pinimg.com/564x/7c/81/e6/7c81e69f92e59e9b18ab05de74a89e7a.jpg",
        "https://i.pinimg.com/564x/e4/07/de/e407ded39672b47f74369c10c3001451.jpg"
    ]

    const [index, setIndex] = useState(0)

    const handleIncr = () => {
        if (index === films.length - 1) {
            setIndex(0)
            return
        }
        setIndex(index + 1)
    }
    const handleDecr = () => {
        if (index === 0) {
            setIndex(films.length - 1)
            return
        }
        setIndex(index - 1)
    }
    return (
        <div className="playerBlock">
            <div className="gamePosters">
                <button onClick={handleDecr}>-</button>
                <div>
                    <img className="gamePoster" src={films[index]} alt=""/>
                </div>
                <button onClick={handleIncr}>+</button>
            </div>
        </div>
    );
}

export default FilmsPage;