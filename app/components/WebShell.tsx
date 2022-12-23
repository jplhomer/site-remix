import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";

export function WebShell({ children }: { children: React.ReactNode }) {
  const MAX_SHELLS = 5;
  const [height, setHeight] = useState<string | number>(0);
  const [focusedIndex, setFocusedIndex] = useState<number | boolean>(false);
  const [mostRecentFocusedIndex, setMostRecentFocusedIndex] =
    useState<number>(0);
  const [shellCount, setShellCount] = useState(1);

  const toggleVisibility = useCallback(() => {
    setFocusedIndex(height === 0 ? mostRecentFocusedIndex : false);
    setHeight((height) => (height === 0 ? "50%" : 0));
  }, [height, mostRecentFocusedIndex]);

  useWebShellKeyboardShortcuts({ toggleVisibility });

  return (
    <div className="flex flex-col h-full">
      <div
        className="h-full overflow-y-hidden flex-1"
        onClick={() => setFocusedIndex(false)}
      >
        <div className="h-full overflow-auto">{children}</div>
      </div>
      <div
        className="overflow-hidden bg-black transition-all duration-500 ease-in-out flex flex-col flex-nowrap"
        style={{ height }}
      >
        <div className="border border-gray-600 bg-gray-100 p-2 flex items-center justify-between">
          <span>Shell</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                if (shellCount >= MAX_SHELLS) return;
                setShellCount(shellCount + 1);
                setFocusedIndex(shellCount);
              }}
            >
              Split
            </button>
            <button onClick={toggleVisibility}>Close</button>
          </div>
        </div>
        <div
          className="grid min-h-full"
          style={{
            gridTemplateColumns:
              shellCount > 1 ? `repeat(${shellCount}, minmax(0px, 100%)` : "",
            gridTemplateRows: "repeat(1, 100%)",
          }}
        >
          {Array.from({ length: shellCount }).map((_, shellIndex) => (
            <Shell
              key={shellIndex}
              isFocused={focusedIndex === shellIndex}
              onFocus={() => {
                setFocusedIndex(shellIndex);
                setMostRecentFocusedIndex(shellIndex);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function useWebShellKeyboardShortcuts({
  toggleVisibility,
}: {
  toggleVisibility: () => void;
}) {
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "`":
          toggleVisibility();
          break;
      }
    },
    [toggleVisibility]
  );

  useEffect(() => {
    // TODO: Only add event listener when shell is focused/visible
    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
}

type Output = {
  text: string;
  type: "prompt" | "output";
};

function Shell({
  isFocused,
  onFocus,
}: {
  isFocused: boolean;
  onFocus: () => void;
}) {
  const [prompt, setPrompt] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [commands, setCommands] = useState<string[]>([]);
  const [commandsIndex, setCommandsIndex] = useState(0);
  const [outputs, setOutputs] = useState<Output[]>([]);

  const attemptToRunCommand = useCallback(
    (command: string) => {
      const [commandName, ...args] = command.split(" ");

      switch (commandName.trim()) {
        case "":
          break;
        case "clear":
          setOutputs([]);
          break;
        case "echo":
          setOutputs((outputs) => [
            ...outputs,
            { text: args.join(" "), type: "output" },
          ]);
          break;
        default:
          setOutputs((outputs) => [
            ...outputs,
            { text: `Command not found: ${commandName}`, type: "output" },
          ]);
      }
    },
    [setOutputs]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Enter":
          setOutputs((outputs) => [
            ...outputs,
            { text: prompt, type: "prompt" },
          ]);
          setCommands((commands) => [...commands, prompt]);
          setPrompt("");
          setCursorPosition(0);
          setCommandsIndex((i) => i + 1);
          attemptToRunCommand(prompt);
          break;

        case "Backspace":
          const deleteAll = e.metaKey;
          const deleteWord = e.altKey;

          let newPrompt = prompt;
          if (deleteAll) {
            newPrompt = "";
          } else if (deleteWord) {
            newPrompt = prompt.replace(/\s*[\w\d:/._-]+\s*$/, "");
          } else {
            newPrompt = prompt.slice(0, -1);
          }

          setPrompt(newPrompt);
          setCursorPosition(newPrompt.length);
          break;

        case "ArrowLeft":
          setCursorPosition((cursorPosition) =>
            Math.max(0, cursorPosition - 1)
          );
          break;
        case "ArrowRight":
          setCursorPosition((cursorPosition) =>
            Math.min(cursorPosition + 1, prompt.length)
          );
        case "ArrowUp":
          // If we're at the first command, do nothing
          if (commandsIndex === 0) {
            return;
          }

          // If we're at the last command, save the current prompt
          if (commandsIndex === commands.length) {
            setCommands((commands) => [...commands, prompt]);
          }

          setCommandsIndex((commandsIndex) => commandsIndex - 1);
          setPrompt(commands[commandsIndex - 1]);
          break;
        case "ArrowDown":
          // If we're at the last command, do nothing
          if (commandsIndex + 1 >= commands.length) {
            return;
          }

          setCommandsIndex((i) => i + 1);
          setPrompt(() => commands[commandsIndex + 1]);
          break;

        case "Meta":
        case "Control":
        case "Shift":
        case "Alt":
        case "CapsLock":
        case "Tab":
        case "Escape":
          return;
        default:
          if (e.metaKey) {
            switch (e.key) {
              case "v":
                navigator.clipboard.readText().then((text) => {
                  setPrompt((prompt) => prompt + text);
                  setCursorPosition(
                    (cursorPosition) => cursorPosition + text.length
                  );
                });
                break;
            }

            return;
          }

          if (e.ctrlKey) {
            switch (e.key) {
              case "`":
                return;
            }
          }

          setPrompt((prompt) => prompt + e.key);
          setCursorPosition((cursorPosition) => cursorPosition + 1);
      }
    },
    [attemptToRunCommand, commands, commandsIndex, prompt]
  );

  useEffect(() => {
    if (!isFocused) return;

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isFocused, onKeyDown]);

  return (
    <div
      role="textbox"
      onClick={onFocus}
      className={clsx(
        "h-full overflow-scroll p-4 bg-slate-700 text-white font-mono min-h-full",
        !isFocused && "opacity-75"
      )}
    >
      <p>I am a shell</p>
      <div className="space-y-4">
        {outputs.map((output, index) => (
          <p
            className={clsx(output.type === "output" && "text-zinc-300")}
            key={index}
          >
            {output.type === "prompt" && <PromptPrefix />}
            <span>{output.text}</span>
          </p>
        ))}
        <div>
          <PromptPrefix />
          {prompt.split("").map((letter, index) => (
            <Letter
              key={index}
              letter={letter}
              hasActiveCursor={index === cursorPosition}
              isFocused={isFocused}
            />
          ))}
          {cursorPosition === prompt.length && <Cursor isFocused={isFocused} />}
        </div>
      </div>
    </div>
  );
}

function Cursor({
  children,
  isFocused,
}: {
  children?: React.ReactNode;
  isFocused?: boolean;
}) {
  const SPEED = 500;
  const [isVisible, setIsVisible] = useState(!isFocused);

  useEffect(() => {
    if (!isFocused) return;
    const timer = setInterval(() => {
      setIsVisible((isVisible) => !isVisible);
    }, SPEED);

    return () => clearInterval(timer);
  }, [isFocused, setIsVisible]);

  const className = clsx(
    "border border-white",
    isVisible && isFocused && "bg-white"
  );

  return <span className={className}>{children ?? " "}</span>;
}

function Letter({
  letter,
  hasActiveCursor,
  isFocused,
}: {
  letter: any;
  hasActiveCursor: any;
  isFocused: boolean;
}) {
  return hasActiveCursor ? (
    <Cursor isFocused={isFocused}>{letter}</Cursor>
  ) : (
    letter
  );
}

function PromptPrefix() {
  return <span className="font-bold">(jplhomer.org) $ </span>;
}
