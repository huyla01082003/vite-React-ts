import React from 'react';
import TaskCard from "./Taskcard";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import foot from '../../../assets/foot.svg'
import bongro from '../../../assets/bongro.svg'
import  heart  from '../../../assets/heart.svg';
import footBG from '../../../assets/footBG.svg'
import { Nav } from 'react-bootstrap';
import footBG4 from '../../../assets/footBG4.svg'
import footBG2 from '../../../assets/footBG2.svg'
import footBG3 from '../../../assets/footBG3.svg'
import { HomeAPI } from '../../../services/homeService';
import { useEffect, useState } from "react";
import useApi from '../../../hooks/useApi'
import { useAppDispatch } from '../../../hooks/store';
import { SocialEnum } from '../../../type';
import { getTaskUser } from '../../../redux/slice/connectSocial';
import { AppButton } from '../../../component/button';

const SocialTask: React.FC = () => {
  const [user, setUser] = useState("");
  const { callApi, data, loading } = useApi(HomeAPI.getUserByAddress);
  const {} = useApi(HomeAPI.createUser)
  useEffect(() => {
    const userData = {
      address: "huyl",
    }

    callApi(userData.address); 
  }, []); 

  useEffect(() => {
    if (!loading && data) {
      if (data.success) {
        setUser(data.msg.address)
      } else {
        console.log('Khong co user');
      }
    }
  }, [data, loading])
    
  
  
  const dispatch = useAppDispatch();
  const loginSocial = async () => {
    try {
      const rq = await HomeAPI.loginSocial({
        address: "huan15",
        typeSocial: SocialEnum.TWITTER,
      });
      if (rq?.success) {
        dispatch(getTaskUser("huan15"));
        setUser("huan15"); // Cập nhật trạng thái user
      }
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <Nav className='relative'>
      <div className='absolute flex flex-col right-0 pt-12'>
      <img className='' src={footBG} alt="" />
      <img className='absolute ml-32 mt-5 ' src={footBG2} alt="" />
      <img className='absolute ml-32 mt-28' src={footBG3} alt="" />
      <img className='absolute ml-64 mt-36' src={footBG4} alt="" />
      </div>
      
    
    <div className="container mx-auto pt-20 ">
      <div className='w-[1008px] h-[297px] '>
      <div className='text-center mb-6'>
        <h1 className="text-[40px] font-bold ">Social Tasks</h1>
        <p className="text-gray-600 ">Complete the Social Tasks to earn extra $Heart token</p>
      </div>
    
  <div className='w-[1008px] h-[196px] border-2 border-custom-pink rounded-[16px] p-[24px] gap-[16px] bg-white'>
  <div className="w[489px] h-[148px] gap-[24px]">
  <h3 className="text-xl font-semibold">Connect Your X Account</h3>
  <p className="text-gray-600 mt-[25px]">You need to connect your X account to join Social Task</p>
  <p className='text-blue-600 underline'>
    <a href="">Learn More</a>
  </p>
  <AppButton 
  className="w-[235px] h-[40px] p-[8px-32px-8px-32px] mt-[15px] text-white rounded-[100px] bg-custom-orange"
  onClick={() => {
    loginSocial();
  }}
  disabled={!!user}
>
  {!user ? 'Connect your X account' : user}
</AppButton>
</div>
      </div>
    </div>


     <div className='w-[1008px] h-[332px] flex flex-col gap-[16px] mt-[16px]'>


      <div className='flex justify-end items-center w-full h-screen'> 

      <div className="flex gap-[8px] w-[120px] h-[40px] ">
        <button className="w-[56px] h-[40px] border-custom-pink border-2 rounded-[24.85px] flex items-center justify-center p-[8px-16px-8px-16px]  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-custom-pink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H3m0 0l9-9m-9 9l9 9" />
          </svg>
        </button>

        <button className="border-custom-pink w-[56px] h-[40px] border-2 rounded-[24.85px] flex items-center justify-center p-[8px-16px-8px-16px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-custom-pink"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h12m0 0l-9 9m9-9l-9-9" />
          </svg>
        </button>

      </div>
      </div>

  <div className=" flex gap-[24px] mx-auto">
  <div className=' border-2 flex flex-col w-[320px] h-[276px] border-custom-pink rounded-[30px] overflow-hidden bg-white'>

  <TaskCard
  additionalIcons1={[
    <div className="relative" key="additional-icons">
      <div className="absolute flex flex-col ml-[190px]">
        <div className='flex'>
          <img src={bongro} alt="" />
          <img src={foot} alt="Foot" />
        </div>
        <div>
          <img className='ml-16' src={heart} alt="" />
        </div>
      </div>
    </div>
  ]}
  icon={
    <FaXTwitter className="text-white bg-black border rounded-full w-[62.54px] h-[60px] mt-[30px] ml-[30px]" />
  }
  title="Follow Tapos X"
  description="Follow Tapos X to earn Points"
  points={20}
  actionText= "follow"
  isUserConnected={!!user}
/>
</div>



    <div className='border-2 flex flex-c w-[320px] h-[276px] border-custom-pink rounded-[30px] overflow-hidden bg-white'>

  <TaskCard
     additionalIcons1={[ 
      <div className="relative">
        <div className="absolute top-0 right-0 flex flex-col ml-48">
          <div className='flex '>
            <img src={bongro} alt="" />
          <img src={foot} alt="Foot" />
          </div>         
              <div>
                 <img className='ml-16' src={heart} alt="" />
                </div>                           
        </div>
      </div>
    ]}

  icon={<FaXTwitter className="text-white bg-black border rounded-full w-[62.54px] h-[60px] mt-[30px] ml-[30px]" />}
  title="Follow Tapos X"
  description="Follow Tapos X to earn Points"
  points={20}
  actionText="Follow"
  isUserConnected={!!user}
  />
    </div>


    <div className='border-2 flex flex-c w-[320px] h-[276px] border-custom-pink rounded-[30px] overflow-hidden bg-white'>

  <TaskCard
     additionalIcons1={[ 
      <div className="relative">
        <div className="absolute top-0 right-0 flex flex-col ml-48">
          <div className='flex '>
            <img src={bongro} alt="" />
          <img src={foot} alt="Foot" />
          </div>         
              <div>
                 <img className='ml-16' src={heart} alt="" />
                </div>                           
        </div>
      </div>
    ]}
   
  icon={<FaDiscord className="text-white bg-black border rounded-full w-[62.54px] h-[60px] mt-[30px] ml-[30px]" />}
  title="Follow Tapos X"
  description="Follow Tapos X to earn Points"
  points={20}
  actionText="Follow"
  isUserConnected={!!user}
  />
    </div>
</div>
     </div>
    
    </div>
    </Nav>
  );
};

export default SocialTask;