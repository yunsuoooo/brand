import { useState, KeyboardEvent, useEffect, useRef } from "react";

const numberRegex = /^[0-9]+$/;
const initAuthCode = new Array(6).fill("");

const Authentication = () => {
  const [code, setCode] = useState<string[] | number[]>(initAuthCode);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {}, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const key = e.key.toLowerCase();
    const isBackspace = key === "backspace";
    const arrowKey = key === "arrowleft" || key === "arrowright";
    console.log(e.ctrlKey, key);
    if (e.ctrlKey && key === "v") {
      console.log("paste");
    }

    if (!numberRegex.test(key) && !isBackspace && !arrowKey) {
      // only pass number, backspace
      e.preventDefault();
      return;
    }

    if (arrowKey) return;

    const prevCode = code.slice();
    const isExistInputValue = numberRegex.test(e.currentTarget.value);

    if (isBackspace) {
      if (isExistInputValue) {
        prevCode[index] = "";
        setCode(prevCode);
      }
      4123;
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
      return;
    }

    console.log(inputRefs.current[index].selectionStart);
    prevCode[index] = key;
    setCode(prevCode);

    if (index < code.length - 1) {
      inputRefs.current[index + 1].focus();
    }
    if (index === code.length - 1) {
      // inputRefs.current[index].focus;
    }
  };

  const requestCheckVerifyCode = (code: number[]) => {};

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-12 bg-slate-950 text-white">
      <div className="flex flex-col items-center p-8 bg-zinc-800 rounded-2xl">
        <p className="pb-4 text-xl text-center">Enter the 6-digit code.</p>
        <div className="flex gap-3">
          {initAuthCode.map((_, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              className="bg-zinc-800 p-2 w-10 h-14 rounded text-3xl text-center border border-zinc-500"
              type="text"
              pattern="[0-9]+"
              maxLength={1}
              value={code[index]}
              onChange={() => {}}
              onKeyDown={(e) => handleKeyDown(e, index)}
              required
            />
          ))}
        </div>
      </div>

      <div className="pt-12">
        {Object.values(code).map((number, index) => (
          <span key={"code-" + index}>{number}</span>
        ))}
        <p className="text-sm">
          * After entering the 6-digit code, verification is requested
          automatically.
        </p>
      </div>
    </div>
  );
};

export default Authentication;
