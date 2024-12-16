import React, { useState } from 'react';
import { useAppDispatch } from '../../../hooks/store';
import { setOpenModal } from '../../../redux/slice/Modal';
import { AppButton } from '../../../component/button/AppButton';

const ReferralCampaign: React.FC = () => {
  const [referralCode, setReferralCode] = useState('');

  
  const invitedFriends = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    walletAddress: `0xd4e...${index}7b8ec56${index}7e7`,
    heartPoints: '9,153,223',
  }));

  const dispatch = useAppDispatch();
  const onOpenModal =() =>{
    dispatch(setOpenModal({isOpenModal: true}))
  }


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferralCode(e.target.value);
  };

  const handleSubmit = () => {
    // Handle referral code submission logic here
    console.log('Referral Code Submitted:', referralCode);
  };

  return (
    <div className=" container mx-auto h-[1649px] flex flex-col gap-[60px] pt-[80px] flex-grow">

      <div className='text-center'>
      <h1 className="text-3xl font-bold text-center mb-6 text-[40px]">Referral Campaign</h1>
      <p className="text-center text-gray-600 mb-4">Share your referral link to earn extra points</p>
        </div>
        
        <div className="flex h-[200px] border rounded-lg border-custom-pink justify-between p-[24px] bg-white">

          <div className='w-[400px] h-[152px] '>
          <h3 className="text-xl font-semibold">Connect Your X account</h3>
        <p className="text-gray-600 pt-[15px] pb-[1px]">You need to connect your X account to join Social Task</p>
        <p className='text-blue-600 underline pb-[15px]' > <a href="">Learn More</a></p>
      
          
  <div className='flex items-center w-[400px] h-[48px] rounded-[100px] border border-custom-button p-[4px] '>

  <input
      type="text"
      value={referralCode}
      onChange={handleInputChange}

      placeholder="Enter referral code"
      className="w-[292px] h-[40px] p-[8px-12px-8px-12px]  rounded-[100px] pl-2" 
  />
  <button
      onClick={handleSubmit}
      className=" bg-custom-buttonGo text-white rounded-[100px] w-[100px] h-[40px] "  
  >
      Go
  </button>
</div>
          </div>
        

<div >
 <AppButton   onClick={onOpenModal} className="  bg-custom-orange w-[199px] h-[48px] border-[0.8px] rounded-[100px] mt-[105px] text-white ">
    Invite Your Friends
  </AppButton>
</div>  
    </div>  


      <div className='w-[1008px] h-[872px] ] '>
      <h1 className='text-[24px] font-medium pb-[16px]'>Ivited friends</h1>

      <div className='w-[1008px] h-[828px] bg-white border border-custom-pink rounded-[12px]'>
        

      <table className="w-[1008px] h-[764px] ">
        <thead className='border-custom-pink border-b rounded-[12px]'>
          <tr  >
            <th className=" "></th>
            <th className=" ">Wallet Address</th>
            <th className=" px-4 py-2">HEART</th>
          </tr>
        </thead>
        <tbody>
          {invitedFriends.map(friend => (
            <tr key={friend.id } className= 'border-b border-custom-pink'>
              <td className=" px-4 py-2 text-center">{friend.id}</td>
              <td className=" px-4 py-2 text-center">{friend.walletAddress}</td>
              <td className=" px-4 py-2 text-center">{friend.heartPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-end items-center gap-[12px] w-[1008px] h-[64px] pr-5">
         
         <p className='flex-grow text-left text-[14px] p-5'>Page 1 of 10</p>


        <button className="text-center bg-white border border-custom-pink w-[83px] h-[36px] rounded-[8px]  ">
          Previous
        </button>
        <button className="text-center bg-white border border-custom-pink  w-[83px] h-[36px] rounded-[8px]  ">
          Next
        </button>
      </div>
      
      </div>
      
    </div>
      </div>
  );
};

export default ReferralCampaign;