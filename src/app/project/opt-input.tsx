import {
  useRef,
  useState,
  useCallback,
  KeyboardEvent,
  ChangeEvent,
} from "react";

const CODE_LENGTH = 6;

const numberRegex = /^[0-9]+$/;

const initAuthCodes = new Array(CODE_LENGTH).fill("");

const OPTInput = () => {
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [codes, setCode] = useState<(string | number)[]>(initAuthCodes);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputKeyDown = useCallback(
    (
      e: KeyboardEvent<HTMLInputElement>,
      index: number,
      currentCode: (string | number)[]
    ) => {
      const key = e.key.toLowerCase();
      const isBackspace = key === "backspace";

      if (isBackspace) {
        if (index > 0) {
          inputRefs.current[index - 1].focus();
        }

        const newCodes = currentCode.slice();
        newCodes[index] = "";

        setCode(newCodes);
      }
    },
    [setCode]
  );

  const checkCodeAndVerify = useCallback(
    (
      codes: (string | number)[],
      afterCheckCallback: (code: string) => void
    ) => {
      if (codes.some((v) => !v)) return;

      afterCheckCallback(codes.join(""));
    },
    []
  );

  const requestCheckVerifyCode = useCallback((code: string) => {
    setIsVerifying(true);

    setTimeout(() => {
      console.log(code);
      setIsVerifying(false);
    }, 3000);
  }, []);

  const handleInputChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      index: number,
      currentCode: (string | number)[]
    ) => {
      const value = e.currentTarget.value;
      if (!value) return;

      const splittedValue = value.split("").filter((v) => numberRegex.test(v));
      if (!splittedValue.length) return;

      const newCodes = currentCode.slice();
      let nextInputIndex = 0;

      splittedValue.forEach((v, order) => {
        if (index + order > CODE_LENGTH - 1) return;

        newCodes[index + order] = v;
        nextInputIndex = index + order + 1;
      });

      setCode(newCodes);

      if (inputRefs.current) {
        inputRefs.current[
          nextInputIndex > CODE_LENGTH - 1 ? CODE_LENGTH - 1 : nextInputIndex
        ]?.focus();
      }

      checkCodeAndVerify(newCodes, requestCheckVerifyCode);
    },
    [checkCodeAndVerify, requestCheckVerifyCode]
  );

  return (
    <div className="flex flex-col justify-center items-center p-12 text-white">
      <div className="flex flex-col items-center p-8 bg-zinc-800 rounded-2xl">
        <p className="pb-4 text-xl text-center">
          {isVerifying ? "Verifying Code..." : "Enter the 6-digit code."}
        </p>
        <div className="flex gap-3">
          {initAuthCodes.map((_, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) inputRefs.current[index] = el;
              }}
              className="bg-zinc-800 p-2 w-10 h-14 rounded text-3xl text-center border border-zinc-500 disabled:text-zinc-500"
              type="text"
              pattern="[0-9]+"
              value={codes[index]}
              onChange={(e) => handleInputChange(e, index, codes)}
              onKeyDown={(e) => handleInputKeyDown(e, index, codes)}
              disabled={isVerifying}
              required
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OPTInput;
