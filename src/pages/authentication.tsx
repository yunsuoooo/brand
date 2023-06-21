import {
  useRef,
  useState,
  useCallback,
  KeyboardEvent,
  ChangeEvent,
} from "react";

const CODE_LENGTH = 6;

const numberRegex = /^[0-9]+$/;

const initAuthCode = new Array(CODE_LENGTH).fill("");

const Authentication = () => {
  const [code, setCode] = useState<string[] | number[]>(initAuthCode);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputKeyDown = useCallback(
    (
      e: KeyboardEvent<HTMLInputElement>,
      index: number,
      currentCode: string[] | number[]
    ) => {
      const key = e.key.toLowerCase();
      const isBackspace = key === "backspace";

      if (isBackspace) {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }

        const newCode = currentCode.slice();
        newCode[index] = "";

        setCode(newCode);
      }
    },
    [setCode]
  );

  const handleInputChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      index: number,
      currentCode: string[] | number[]
    ) => {
      const value = e.currentTarget.value;

      if (!value) return;

      const newCode = currentCode.slice();
      let nextInputIndex = 0;

      value
        .split("")
        .filter((v) => numberRegex.test(v))
        .forEach((v, order) => {
          if (index + order > CODE_LENGTH - 1) return;

          newCode[index + order] = v;
          nextInputIndex = index + order + 1;
        });

      setCode(newCode);

      inputRefs.current[
        nextInputIndex > CODE_LENGTH - 1 ? CODE_LENGTH - 1 : nextInputIndex
      ]?.focus();
    },
    [setCode]
  );

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
              value={code[index]}
              onChange={(e) => handleInputChange(e, index, code)}
              onKeyDown={(e) => handleInputKeyDown(e, index, code)}
              required
            />
          ))}
        </div>
      </div>

      <div className="pt-12">
        <p className="text-sm">
          * After entering the 6-digit code, verification is requested
          automatically.
        </p>
      </div>
    </div>
  );
};

export default Authentication;
