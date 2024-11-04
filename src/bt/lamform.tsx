import { useState } from "react";

const Lamform = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handaleSubmit = () => {
    console.log({
      name,
      email,
    });
  };

  return (
    <div style={{ padding: 32 }}>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <input value={email} onChange={(e) => setEmail(e.target.value)} />

      <button onClick={handaleSubmit}>Click</button>
    </div>
  );
}
export default Lamform;
