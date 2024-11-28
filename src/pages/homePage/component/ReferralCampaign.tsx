import React, { useState } from 'react';

const ReferralCampaign: React.FC = () => {
  const [referralCode, setReferralCode] = useState('');
  
  const invitedFriends = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    walletAddress: `0xd4e...${index}7b8ec56${index}7e7`,
    heartPoints: '9,153,223',
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReferralCode(e.target.value);
  };

  const handleSubmit = () => {
    // Handle referral code submission logic here
    console.log('Referral Code Submitted:', referralCode);
  };

  return (
    <div className="p-10 bg-white shadow-md rounded-lg">
        <div className='text-center'>
      <h1 className="text-3xl font-bold text-center mb-6">Referral Campaign</h1>
      <p className="text-center text-gray-600 mb-4">Share your referral link to earn extra points</p>
        </div>
        
        <div className="mb-6 p-4 border rounded-lg bg-gray-50">
        <h3 className="text-xl font-semibold">Connect Your X account</h3>
        <p className="text-gray-600 mb-2">You need to connect your X account to join Social Task</p>
        <p className='text-blue-600 underline' > <a href="">Learn More</a></p>

        <div className="flex items-center justify-between mb-8">
  <div className="flex items-center">
    <input
      type="text"
      value={referralCode}
      onChange={handleInputChange}
      placeholder="Enter referral code"
      className="border border-gray-300 rounded-l-lg px-20 py-2 w-1/9"
    />
    <button 
      onClick={handleSubmit}
      className="bg-blue-500 text-white rounded-r-lg px-4 py-2 hover:bg-blue-600 transition"
    >
      Go
    </button>
  </div>
  <button className="bg-orange-600 text-white px-10 py-2 rounded-2xl hover:bg-orange-700 transition ">
    Invite Your Friends
  </button>
</div>
      </div>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">#</th>
            <th className="border px-4 py-2">Wallet Address</th>
            <th className="border px-4 py-2">HEART</th>
          </tr>
        </thead>
        <tbody>
          {invitedFriends.map(friend => (
            <tr key={friend.id} className="border-b hover:bg-gray-50">
              <td className="border px-4 py-2 text-center">{friend.id}</td>
              <td className="border px-4 py-2">{friend.walletAddress}</td>
              <td className="border px-4 py-2 text-center">{friend.heartPoints}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-6">
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition">
          Previous
        </button>
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition">
          Next
        </button>
      </div>
    </div>
  );
};

export default ReferralCampaign;