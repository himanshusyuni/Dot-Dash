import { useEffect, useState } from "react";
import Dot from "./Dot";

function Game() {
    const [dotPos, setDotPos] = useState({ x: 500, y: 300 });
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(15);
    const colors = ["bg-blue-500", "bg-red-500", "bg-green-500", "bg-yellow-500", "bg-purple-500", "bg-sky-500"];
    
    const colorIndex = timeLeft % colors.length;
    const dotColorClass = colors[colorIndex];
    const generateRandomPosition = () => {
        const x = Math.floor(Math.random() * (window.innerWidth - 250)) +100;
        const y = Math.floor(Math.random() * (window.innerHeight - 250))+100;
        return { x, y };
    };

    const handleDotClick = () => {
        if (timeLeft > 0) { 
            setScore(score + 1);
            setDotPos(generateRandomPosition());
        }
    };
    const handlePlayAgain= ()=>{
        setScore(0);
        setDotPos(generateRandomPosition());
        setTimeLeft(15);
    }
    useEffect(() => {
        if (timeLeft > 0) {
            const interval = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
                setDotPos(generateRandomPosition());
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [timeLeft]);

    return (
        <>
            <p className="text-red-700 absolute right-20 z-30 text-xl mt-2">Your Score : {score}</p>
            <p className="text-red-700 absolute left-20 z-30 text-xl mt-2">Time Left : {timeLeft} s</p>
            <div className="bg-slate-900 h-[82%] w-[90%] ml-[5%] absolute border-4 border-white">
                {timeLeft > 0 && (
                    <div
                    className={`size-10 rounded-full absolute ${dotColorClass}  z-0 active:bg-white`}
                    style={{
                        top: dotPos.y,
                        left: dotPos.x,
                    }}
                    onClick={handleDotClick}
                >
                </div>
                )}
                {timeLeft==0 && (
                    <div className=" absolute text-green-800  top-[30%] left-[35%] text-2xl font-bold rounded-lg p-5 items-center">
                    <p className="text-6xl text-red-800">Game Over!!</p>
                    <p className="text-center"> Your Score : {score}</p>
                    <button className="bg-green-700 rounded-lg text-white p-3 m-5 ml-[30%]" onClick={handlePlayAgain}>Play Again</button>
                    </div>
                )}
            </div>
        </>
    );
}

export default Game;
