import { useRef, useState } from "react";

function App() {
  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];

  const passwordLength = 15;

  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);

  function randomPassword() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.random() * characters.length;
      password += characters[Math.floor(randomIndex)];
    }
    return password;
  }

  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  const generatePasswords = () => {
    setFirstPassword(randomPassword());
    setSecondPassword(randomPassword());
    setCopyStatus("Passwords generated");
  };

  const copyToClipboard = (inputRef, label) => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      setCopyStatus(`${label} copied to clipboard`);
    }
  };

  return (
    <main role="main" aria-label="Password Generator">
      <section className="container" aria-labelledby="heading">
        <h1 id="heading">
          Generate a <br /> <span>random password</span>
        </h1>
        <p>Never use an insecure password again.</p>
        <button onClick={generatePasswords} aria-label="Generate two random passwords">
          Generate passwords
        </button>
      </section>
      <div className="inputs-container" role="group" aria-label="Generated passwords">
        <label htmlFor="password-1" className="sr-only">Password 1</label>
        <input
          id="password-1"
          type="text"
          readOnly
          value={firstPassword}
          ref={firstInputRef}
          onClick={() => copyToClipboard(firstInputRef, "Password 1")}
          aria-label="Password 1 — click to copy"
        />
        <label htmlFor="password-2" className="sr-only">Password 2</label>
        <input
          id="password-2"
          type="text"
          readOnly
          value={secondPassword}
          ref={secondInputRef}
          onClick={() => copyToClipboard(secondInputRef, "Password 2")}
          aria-label="Password 2 — click to copy"
        />
      </div>
      <div aria-live="polite" className="sr-only">
        {copyStatus}
      </div>
    </main>
  );
}

export default App;
