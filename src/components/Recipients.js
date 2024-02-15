import React, { useState, useContext, useEffect } from "react";
import { AppState } from "../App";
import { ethers } from "ethers";

const Recipients = () => {
  const App = useContext(AppState);

  const [recipientAddress, setRecipientAddress] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [num, setNum] = useState(0);

  const addRecipient = async () => {
    try {
      const tx = await App.paypalContract.addRecipient(
        recipientAddress,
        recipientName
      );
      await tx.wait();
      setMessage("Recipient Saved Sucessfully!");
      setRecipientAddress("");
      setRecipientName("");
    } catch (error) {
      setError(error.message);
    }

    let nextnum = num + 1;
    setNum(nextnum);
  };

  return (
    <div className="flex flex-col items-center justify-center py-3 px-4 text-white">
      <input
        onChange={(e) => setRecipientAddress(e.target.value)}
        value={recipientAddress}
        className="w-3/4 p-3 bg-black border-2 border-blue-900 border-opacity-60 bg-opacity-70 outline-none rounded-lg"
        placeholder="Paste Recipient Address"
      />

      <input
        onChange={(e) => setRecipientName(e.target.value)}
        value={recipientName}
        className="mt-2 w-3/4 p-3 bg-black border-2 border-blue-900 border-opacity-60 bg-opacity-70 outline-none rounded-lg"
        placeholder="Paste Recipient Name"
      />

      <div
        onClick={addRecipient}
        className="flex mt-4 w-3/4 cursor-pointer justify-center items-center p-2 bg-green-700 bg-opacity-70 border-2 border-blue-900 border-opacity-80 text-xl font-medium rounded-lg"
      >
        Add Recipient
      </div>

      <p className="text-red-600 text-lg mt-2 px-3">{error}</p>
      <p className="text-green-600 text-lg mt-2 px-1">{message}</p>
    </div>
  );
};

export default Recipients;
