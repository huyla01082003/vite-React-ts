import React, { useEffect, useRef, useState } from "react";

const App: React.FC = () => {
    const [count, setCount] = useState<number>(60);
    const timeID = useRef<number | undefined>(undefined);
    const prevCount = useRef<number | undefined>(undefined);
    const h1Ref = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        prevCount.current = count;
    }, [count]);

    useEffect(() => {
        console.log(h1Ref.current);
    }, []);

    const handleStart = () => {
        if (timeID.current) return; // Prevent multiple intervals
        timeID.current = window.setInterval(() => {
            setCount(prevCount => {
                if (prevCount <= 0) {
                    clearInterval(timeID.current!);
                    timeID.current = undefined; // Clear reference
                    return 0;
                }
                return prevCount - 1;
            });
        }, 1000);
        console.log('Start ->', timeID.current);
    };

    const handleStop = () => {
        if (timeID.current) {
            clearInterval(timeID.current);
            timeID.current = undefined; // Clear reference
        }
        console.log('Stop ->', timeID.current);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 ref={h1Ref} className="text-5xl font-bold text-blue-600">{count}</h1>
            <div className="mt-4">
                <button
                    onClick={handleStart}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                >
                    Start
                </button>
                <button
                    onClick={handleStop}
                    className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                    Stop
                </button>
            </div>
        </div>
    );
};

export default App;