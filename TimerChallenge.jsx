import { useState, useRef } from 'react';

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef(null);
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        setTimerStarted(true);
        setTimerExpired(false); // Reset any previous expiration
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            setTimerStarted(false); // Automatically stop when expired
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(false); // Reset timer state
        setTimerExpired(false); // Optional: reset "You Lost!" message
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You Lost!</p>}
            <p className="challenge-time">
                {targetTime} Second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button onClick={timerStarted ? handleStop : handleStart}>
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? 'Time is Running...' : 'Timer Inactive'}
            </p>
        </section>
    );
}
