import { useState } from "react";
import Testmemo from './testmemo'; // Đảm bảo đường dẫn đúng

function App() {
    const [count, setCount] = useState<number>(0);
    const [count2, setCount2] = useState<number>(0);

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    };
    
    const increase2 = () => {
        setCount2(prevCount2 => prevCount2 + 1);
    };

    return (
        <div>
            <Testmemo count={count} />
            <h1>{count}</h1>
            <h1>{count2}</h1>
            <button onClick={increase}>Click 1</button>
            <button onClick={increase2}>Click 2</button>
        </div>
    );
}

export default App;