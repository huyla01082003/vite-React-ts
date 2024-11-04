import { useState } from "react";

const gifts = ["CPU i9", "RAM 32G", "RGB keyboard"];

const RandomGift = () => {
  const [gift, setGift] = useState<string | undefined>(undefined);

  const handleRandomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);
    setGift(gifts[index]);
  };

  return (
    <div style={{ padding: 32 }}>
      <h1>{gift ? gift : "Chưa có phần thưởng"}</h1>
      <button onClick={handleRandomGift}>Lấy thưởng</button>
    </div>
  );
};

export default RandomGift;