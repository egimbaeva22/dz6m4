import React, {useState} from 'react';

function GamesPage() {
    const games = [
        "https://i.pinimg.com/564x/71/9e/7b/719e7bc2ce0a93a109b6deea88579277.jpg",
        "https://i.pinimg.com/564x/fa/e6/6e/fae66eb64e603d6f2460c79a481ccf07.jpg",
        "https://i.pinimg.com/564x/81/d0/88/81d08871ba22be41c82018089e14bb5a.jpg",
        "https://i.pinimg.com/564x/5e/0c/ad/5e0cadb14716f0b93dd4dc05d161d8d6.jpg",
        "https://i.pinimg.com/564x/70/d4/b2/70d4b2c6ca38d01ee7013fd0c1839409.jpg"
    ]

    const [index, setIndex] = useState(0)

    const handleIncr = () => {
        if (index === games.length - 1) {
            setIndex(0)
            return
        }
        setIndex(index + 1)
    }
    const handleDecr = () => {
        if (index === 0) {
            setIndex(games.length - 1)
            return
        }
        setIndex(index - 1)
    }

    return (
        <div className="playerBlock">
            <div className="gamePosters">
                <button onClick={handleDecr}>-</button>
                <div>
                    <img className="gamePoster" src={games[index]} alt=""/>
                </div>
                <button onClick={handleIncr}>+</button>
            </div>
        </div>
    );
}

export default GamesPage;