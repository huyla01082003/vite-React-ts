// Testmemo.tsx
import React from 'react';

interface TestmemoProps {
    count: number; // Đảm bảo rằng thuộc tính count được khai báo là number
}

const Testmemo: React.FC<TestmemoProps> = ({ count }) => {
    return (
        <div>
            <p>Count from Testmemo: {count}</p>
        </div>
    );
};

export default React.memo(Testmemo);