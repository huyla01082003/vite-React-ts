import React, { useEffect, useState } from 'react';

const tabs = ['posts', 'comments', 'albums'];

interface Post {
    id: number;
    title?: string;
    name?: string;
}

function Test() {
    const [title, setTitle] = useState<string>('');
    const [posts, setPosts] = useState<Post[]>([]);
    const [type, setType] = useState<string>('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => {
                setPosts(data);
            });
    }, [type]);

    return (
        <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            className="bg-black text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:bg-green-500 active:bg-green-600"
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <ul className="list-disc pl-4">
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
    );
}

export default Test;