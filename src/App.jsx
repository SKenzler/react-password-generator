import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowSymbols, setAllowSymbols] = useState(false);
  const [allowCharacters, setAllowCharacters] = useState(false);
  const [password, setPassowrd] = useState("");

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500">
      <h1 className="text-2xl font-semibold text-white text-center uppercase my-3">
        Random Password
      </h1>
      <h1 className="text-5xl font-bold text-white text-center uppercase my-3">
        Generator
      </h1>
      <p className=" text-white text-center p-1 rounded-lg">
        Simply copy your generated password to clipboard
      </p>
      <div className="flex shadow rounded-lg overflow-hidden my-2 mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
        />
        <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          <FaCopy />
        </button>
      </div>
    </div>
  );
}

export default App;
