import { CodeBlockContentType } from "../../model/post-types";

export default function CodeBlock({
  code,
  language,
  fileName,
  lineNumbers,
}: CodeBlockContentType) {
  return (
    <div className="my-8">
      {fileName && (
        <div className="rounded-t-lg bg-gray-800 px-4 py-2 text-sm text-gray-300">
          {fileName}
        </div>
      )}
      <pre className="relative overflow-x-auto rounded-b-lg bg-gray-900 p-4">
        {lineNumbers && (
          <div className="absolute left-0 top-0 w-12 select-none border-r border-gray-700 bg-gray-800 px-2 py-4 text-right text-sm text-gray-400">
            {Array.from({ length: code.split("\n").length }, (_, i) => (
              <div key={i + 1}>{i + 1}</div>
            ))}
          </div>
        )}
        <code className={`block ${lineNumbers ? "pl-12" : ""}`}>{code}</code>
      </pre>
    </div>
  );
}
