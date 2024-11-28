import React from 'react';
const SocialTask: React.FC = () => {
  const tasks = [
    { id: 1, title: 'Follow Tapos X', points: '+20', icon: '🔗' },
    { id: 2, title: 'Retweet post on X', points: '+10', icon: '🔄' },
    { id: 3, title: 'Join VibrantX Discord', points: '+15', icon: '💬' },
  ];

  return (
    <div className="p-10 bg-white shadow-md rounded-lg">
      <div className='text-center mb-6'>
        <h1 className="text-3xl font-bold">Social Tasks</h1>
        <p className="text-gray-600">Complete the Social Tasks to earn extra $Heart token</p>
      </div>
      <div className="mb-6 p-4 border rounded-lg bg-gray-50">
        <h3 className="text-xl font-semibold">Connect Your X account</h3>
        <p className="text-gray-600 mb-2">You need to connect your X account to join Social Task</p>
        <p className='text-blue-600 underline' > <a href="">Learn More</a></p>
        <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
          Connect your X account
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {tasks.map(task => (
          <div key={task.id} className="flex flex-col items-start p-4 bg-gray-100 rounded-lg shadow-sm transition-transform transform hover:scale-105">
            <span className="text-3xl mb-2">{task.icon}</span>
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-gray-600">{task.points}</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Follow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialTask;