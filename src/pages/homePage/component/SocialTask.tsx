import React from 'react';
import footBG from '../../../assets/footBG.svg'
import { Nav } from 'react-bootstrap';
import footBG4 from '../../../assets/footBG4.svg'
import footBG2 from '../../../assets/footBG2.svg'
import footBG3 from '../../../assets/footBG3.svg'
import { HomeAPI } from '../../../services/homeService';
import { useAppDispatch, useAppSelector } from '../../../hooks/store';
import { SocialEnum } from '../../../type';
import { getTaskUser } from '../../../redux/slice/connectSocial';
import { AppButton } from '../../../component/button';

const SocialTask: React.FC = () => {
  const { taskUser, loadingTaskUser } = useAppSelector((state) => state.social);
  const dispatch = useAppDispatch();
  const loginSocial = async () => {
    try {
      const rq = await HomeAPI.loginSocial({
        address: "huan15",
        typeSocial: SocialEnum.TWITTER,
      });
      if (rq?.success) {
        dispatch(getTaskUser("huan15"));
      }
    } catch (error) {
      console.log(error);
    }
  };
 

  return (
    <Nav className='relative'>
      <div className='absolute flex flex-col right-60 pt-12'>
      <img className='' src={footBG} alt="" />
      <img className='absolute ml-20 mt-5 ' src={footBG2} alt="" />
      <img className='absolute ml-24 mt-28' src={footBG3} alt="" />
      <img className='absolute ml-44 mt-36' src={footBG4} alt="" />
      </div>
      
    
    <div className="relative max-w-[1008px] mx-auto ">
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
            disabled={taskUser.twitterId?.length > 0}
            loading={loadingTaskUser}
            onClick={() => {
              loginSocial();
            }}
          >
            {taskUser.twitterId?.length > 0
              ? taskUser.twitterUsername
              : "Connect your X account"}
  </AppButton>
</div>
      </div>
    </div>
      <div className='flex justify-end items-center pt-6'>
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
     </div>   
    </Nav>
  );
};

export default SocialTask;