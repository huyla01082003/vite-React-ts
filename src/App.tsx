import React, { useState } from 'react';
import Lamform from './bt/lamform';
import RandomGift from './bt/randomGift';
import TwoWayBinding from './bt/two-wayBinding';
import TodoList from './bt/tudoList';
import MountedUnmounted from './bt/mounted-unmounted';

function App() {
  const [activeComponent, setActiveComponent] = useState('Lamform');

  const handleComponentChange = (componentName: string) => {
    setActiveComponent(componentName);
  };

  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => handleComponentChange('Lamform')}>Bài 1</button>
      <button onClick={() => handleComponentChange('MountedUnmounted')}>Bài 2</button>
      <button onClick={() => handleComponentChange('RandomGift')}>Bài 3</button>
      <button onClick={() => handleComponentChange('TodoList')}>Bài 4</button>
      <button onClick={() => handleComponentChange('TwoWayBinding')}>Bài 5</button>

      {activeComponent === 'Lamform' && <Lamform />}
      {activeComponent === 'MountedUnmounted' && <MountedUnmounted />}
      {activeComponent === 'RandomGift' && <RandomGift />}
      {activeComponent === 'TodoList' && <TodoList />}
      {activeComponent === 'TwoWayBinding' && <TwoWayBinding />}
    </div>
  );
}

export default App;