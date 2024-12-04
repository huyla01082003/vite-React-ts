import React from 'react';
import TaskCard from "./Taskcard";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import foot from '../../../assets/foot.svg'
import bongro from '../../../assets/bongro.svg'
import  heart  from '../../../assets/heart.svg';

const SocialTask: React.FC = () => {
 
  return (
    <div className="container mx-auto pt-20 ">
      <div className='text-center mb-6'>
        <h1 className="text-3xl font-bold font-Roboto">Social Tasks</h1>
        <p className="text-gray-600">Complete the Social Tasks to earn extra $Heart token</p>
      </div>

      <div className="mb-6 p-4 border-2 border-orange-300 rounded-2xl">
  <h3 className="text-xl font-semibold">Connect Your X Account</h3>
  <p className="text-gray-600 mb-2">You need to connect your X account to join Social Task</p>
  <p className='text-blue-600 underline'>
    <a href="">Learn More</a>
  </p>
  <button className="mt-4 px-6 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition">
    Connect your X account
  </button>
</div>

      <div className="flex justify-end space-x-4 p-6">
        <button className="flex items-center justify-center w-16 h-10 rounded-full border border-orange-300 bg-white hover:bg-pink-100 transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m0 0l9-9m-9 9l9 9" />
          </svg>
        </button>

        <button className="flex items-center justify-center w-16 h-10 rounded-full border border-orange-300 bg-white hover:bg-pink-100 transition duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-orange-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h12m0 0l-9 9m9-9l-9-9" />
          </svg>
        </button>

      </div>

  <div className=" flex space-x-8 container mx-auto ">
  <TaskCard
    icon={<FaXTwitter className="text-white bg-black boder rounded-full w-16 h-16" />}
    title="Follow Tapos X"
    description="Follow Tapos X to earn Points"
    points={20}
    actionText="Follow"
    additionalIcons={[ 
      <img src={heart}/>,
      <img src={bongro} />,
      <img src={foot} />,
      
    ]}
    
  />
  <TaskCard
    icon={<FaXTwitter className="text-white bg-black boder rounded-full w-16 h-16" />}
    title="Retweet post on X"
    description="Retweet Tapos post on X to earn Points"
    points={20}
    actionText="Follow"
    additionalIcons={[
      <img src={heart}/>,
      <img src={bongro} />,
      <img src={foot} />,
     ]}
  />
  <TaskCard
    icon={<FaDiscord className="text-white bg-black boder rounded-full w-16 h-16" />}
    title="Join VibrantX Discord"
    description="Retweet a daily tweet to earn HEART"
    points={20}
    actionText="Follow"
    additionalIcons={[
      <img src={heart}/>,
      <img src={bongro} />,
      <img src={foot} />,
     ]}
  />
</div>
    
    </div>
  );
};

export default SocialTask;