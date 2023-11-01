import { useState, useCallback, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import "./App.css";

function App() {
  const [length, setLength] = useState(0);
  const [allowNumbers, setAllowNumbers] = useState(false);
  const [allowUppercase, setAllowUppercase] = useState(false);
  const [allowCharacters, setAllowCharacters] = useState(false);
  const [password, setPassowrd] = useState("");

  const generatePassword = useCallback(() => {
    let generatedPassword = "";
    let allowableString = "abcdefghijklmnopqrstuvwxyz";

    if (allowUppercase) allowableString += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (allowNumbers) allowableString += "0123456789";
    if (setCharactersAllowed) allowableString += "!@#$%^&*()_+";

    for (i = 1; i < length; i++) {
      const index = Math.floor(Math.random() * generatedPassword.length + 1);
      generatedPassword += allowableString.charAt(index);
    }
    setPassowrd(generatedPassword);
  }, [length, allowUppercase, allowNumbers, allowCharacters]);

  useEffect(() => {
    generatePassword();
  }, [length, allowUppercase, allowNumbers, allowCharacters]);

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
      <div className="flex flex-col text-m text-white font-bold gap-x-1">
        <div className="flex justify-between items-center gap-x-1 py-2">
          <label htmlFor="length">Length: {length}</label>
          <input
            type="range"
            min={6}
            max={24}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name="length"
          />
        </div>
        <div className="flex justify-between items-center gap-x-1 py-2">
          <label htmlFor="uppercase">Uppercase: </label>
          <input
            type="checkbox"
            defaultChecked={allowUppercase}
            className="cursor-pointer"
            onChange={() => setAllowUppercase((current) => !current)}
            id="uppercaser"
          />
        </div>
        <div className="flex justify-between items-center gap-x-1 py-2">
          <label htmlFor="number">Numbers: </label>
          <input
            type="checkbox"
            defaultChecked={allowNumbers}
            className="cursor-pointer"
            onChange={() => setAllowNumbers((current) => !current)}
            id="number"
          />
        </div>
        <div className="flex justify-between items-center gap-x-1 py-2">
          <label htmlFor="characters">Characters: </label>
          <input
            type="checkbox"
            defaultChecked={allowCharacters}
            className="cursor-pointer"
            onChange={() => setAllowCharacters((current) => !current)}
            id="characters"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
