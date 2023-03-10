import clsx from "clsx";
import React, { useCallback, useEffect, useMemo, useState } from "react";

export function WebShell({ children }: { children: React.ReactNode }) {
  const MAX_PANELS = 5;
  const [height, setHeight] = useState<string | number>(0);
  const [focusedIndex, setFocusedIndex] = useState<number | boolean>(false);
  const [mostRecentFocusedIndex, setMostRecentFocusedIndex] =
    useState<number>(0);
  const [panelIds, setPanelIds] = useState<string[]>([createPanelId()]);

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
        <div className="border border-gray-600 bg-gray-100 dark:bg-gray-800 p-2 flex items-center justify-between">
          <span>Shell</span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => {
                if (panelIds.length >= MAX_PANELS) return;
                setPanelIds((panelIds) => [...panelIds, createPanelId()]);
                setFocusedIndex(panelIds.length);
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
              panelIds.length > 1
                ? `repeat(${panelIds.length}, minmax(0px, 100%)`
                : "",
            gridTemplateRows: "repeat(1, 100%)",
          }}
        >
          {panelIds.map((id, index) => (
            <ShellPanel
              id={id}
              key={id}
              isFocused={focusedIndex === index}
              panelCount={panelIds.length}
              onFocus={() => {
                setFocusedIndex(index);
                setMostRecentFocusedIndex(index);
              }}
              onClose={() => {
                setPanelIds((panelIds) =>
                  panelIds.filter((panelId) => panelId !== id)
                );
                setFocusedIndex(Math.max(0, (focusedIndex as number) - 1));
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function createPanelId() {
  return crypto.randomUUID();
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
    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);
}

function ShellPanel({
  isFocused,
  onFocus,
  onClose,
  panelCount = 1,
  id,
}: {
  isFocused: boolean;
  onFocus: () => void;
  onClose: () => void;
  panelCount: number;
  id: string;
}) {
  return (
    <div className="flex flex-col" role="tabpanel" onClick={onFocus}>
      {panelCount > 1 && (
        <div
          className={clsx(
            "flex items-center justify-between p-2 text-sm",
            isFocused
              ? "bg-gray-200 dark:bg-gray-800"
              : "bg-gray-300 dark:bg-gray-700"
          )}
        >
          <span>jplhomer</span>
          <button onClick={onClose}>Close</button>
        </div>
      )}
      <Shell isFocused={isFocused} />;
    </div>
  );
}

type Output = {
  text: string;
  type: "prompt" | "output";
};

type Flag = {
  name: string;
  description?: string;
  char?: string;
  type: "boolean" | "string";
};

type Command = {
  name: string;
  description: string;
  showInAutomplete?: boolean;
  handle: CommandHandler;
  commands?: Command[];
  flags?: Flag[];
};

type RegisteredCommand = Command & {
  fullName: string;
  commands?: RegisteredCommand[];
};

type CommandHandler = ({
  flags,
  args,
  print,
  clear,
}: {
  /**
   * The arguments passed to the command.
   */
  args: string[];
  /**
   * The flags passed to the command.
   */
  flags: Record<string, string | boolean>;
  /**
   * Prints the given text to the output.
   */
  print: (text: string) => void;
  /**
   * Clears the shell.
   */
  clear: () => void;
}) => void;

const registeredCommands = registerCommands([
  {
    name: "clear",
    description: "Clears the terminal",
    showInAutomplete: false,
    handle({ clear }) {
      clear();
    },
  },
  {
    name: "echo",
    description: "Prints the given text",
    showInAutomplete: false,
    handle({ args, print }) {
      print(args.join(" "));
    },
  },
  {
    name: "time",
    description: "Prints the current time",
    handle({ print }) {
      print("It's bad-bitch-o-clock");
    },
  },
  {
    name: "treats",
    description: "Gives you a treat",
    handle({ print, flags }) {
      if (flags.type) {
        print(`Here is a ${flags.type} treat`);
        return;
      }

      if (flags.all) {
        print("Here is ALL the treats");
      } else {
        print("OK here is a treat");
      }
    },
    flags: [
      {
        name: "all",
        description: "You get all the things",
        type: "boolean",
      },
      {
        name: "type",
        description: "The type of treat",
        type: "string",
      },
    ],
    commands: [
      {
        name: "cookie",
        description: "You want a cookie?",
        handle({ print }) {
          print("Fine here is a cookie");
        },
      },
      {
        name: "pizza",
        description: "Wow",
        handle({ print }) {
          print("Whatever");
        },
      },
    ],
  },
]);

function registerCommands(commands: Command[]): RegisteredCommand[] {
  function addFullName(
    command: Command,
    parentName?: string
  ): RegisteredCommand {
    const fullName = parentName
      ? parentName + " " + command.name
      : command.name;
    const registeredCommand: RegisteredCommand = {
      ...command,
      fullName,
      commands: command.commands?.map((subcommand) =>
        addFullName(subcommand, fullName)
      ),
    };

    return registeredCommand;
  }

  return commands.map((command) => addFullName(command));
}

function Shell({ isFocused }: { isFocused: boolean }) {
  const [input, setInput] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [commandHistoryIndex, setCommandHistoryIndex] = useState(0);
  const [autocompleteIndex, setAutocompleteIndex] = useState<number | false>(
    false
  );
  const [outputs, setOutputs] = useState<Output[]>([]);

  const autocompleteCommands = useMemo<RegisteredCommand[]>(() => {
    if (input.trim() === "") return [];

    const commandList =
      findMatchingCommand(input, registeredCommands)?.commands ??
      registeredCommands ??
      [];

    return commandList
      .filter((command) => command.fullName.startsWith(input.trim()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [input]);

  const runCommand = useCallback(
    (command: RegisteredCommand, input: string) => {
      const { flags } = parseCommandInput(command, input);

      const handlerArgs = {
        args: input.split(" ").slice(1),
        flags,
        print: (text: string) =>
          setOutputs((outputs) => [...outputs, { text, type: "output" }]),
        clear: () => setOutputs([]),
      };

      setOutputs((outputs) => [...outputs, { text: input, type: "prompt" }]);
      setCommandHistory((commands) => [...commands, input]);
      setInput("");
      setCursorPosition(0);
      setCommandHistoryIndex((i) => i + 1);
      command.handle(handlerArgs);
    },
    []
  );

  const attemptToRunCommand = useCallback(
    (input: string) => {
      const selectedAutocompleteCommand =
        autocompleteIndex !== false && autocompleteCommands[autocompleteIndex];

      if (selectedAutocompleteCommand) {
        runCommand(selectedAutocompleteCommand, input);

        return;
      }

      const matchingCommand = findMatchingCommand(input, registeredCommands);

      if (matchingCommand) {
        runCommand(matchingCommand, input);

        return;
      }

      let [commandInput] = input.split(" ");

      switch (commandInput.trim()) {
        case "":
          setOutputs((outputs) => [
            ...outputs,
            { text: input, type: "prompt" },
          ]);
          break;
        default:
          setOutputs((outputs) => [
            ...outputs,
            { text: input, type: "prompt" },
          ]);
          setCommandHistory((commands) => [...commands, input]);
          setInput("");
          setCursorPosition(0);
          setCommandHistoryIndex((i) => i + 1);

          setOutputs((outputs) => [
            ...outputs,
            { text: `Command not found: ${commandInput}`, type: "output" },
          ]);
      }
    },
    [autocompleteCommands, autocompleteIndex, runCommand]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.key) {
        case "Enter":
          attemptToRunCommand(input);
          break;

        case "Backspace":
          const deleteAll = e.metaKey;
          const deleteWord = e.altKey;

          let newPrompt = input;
          if (deleteAll) {
            newPrompt = "";
          } else if (deleteWord) {
            newPrompt = input.replace(/\s*[\w\d:/._-]+\s*$/, "");
          } else {
            newPrompt = input.slice(0, -1);
          }

          setInput(newPrompt);
          setCursorPosition(newPrompt.length);
          setAutocompleteIndex(false);
          break;

        case "ArrowLeft":
          setCursorPosition((cursorPosition) =>
            Math.max(0, cursorPosition - 1)
          );
          break;
        case "ArrowRight":
          setCursorPosition((cursorPosition) =>
            Math.min(cursorPosition + 1, input.length)
          );
        case "ArrowUp":
          // If we're at the first command, do nothing
          if (commandHistoryIndex === 0) {
            return;
          }

          // If we're at the last command, save the current prompt
          if (commandHistoryIndex === commandHistory.length) {
            setCommandHistory((commands) => [...commands, input]);
          }

          setCommandHistoryIndex((commandsIndex) => commandsIndex - 1);
          setInput(commandHistory[commandHistoryIndex - 1]);
          setCursorPosition(commandHistory[commandHistoryIndex - 1].length);
          break;
        case "ArrowDown":
          // If we're at the last command, do nothing
          if (commandHistoryIndex + 1 >= commandHistory.length) {
            return;
          }

          setCommandHistoryIndex((i) => i + 1);
          setInput(() => commandHistory[commandHistoryIndex + 1]);
          setCursorPosition(commandHistory[commandHistoryIndex + 1].length);
          break;
        case "Tab":
          e.preventDefault();
          if (autocompleteCommands.length === 0) return;
          const direction = e.shiftKey ? -1 : 1;
          setAutocompleteIndex((i) =>
            i === false
              ? 0
              : Math.abs((i + direction) % autocompleteCommands.length)
          );
          break;

        case "Meta":
        case "Control":
        case "Shift":
        case "Alt":
        case "CapsLock":
        case "Escape":
          return;
        default:
          if (e.metaKey) {
            switch (e.key) {
              case "v":
                navigator.clipboard.readText().then((text) => {
                  setInput((prompt) => prompt + text);
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

          setInput((prompt) => prompt + e.key);
          setCursorPosition((cursorPosition) => cursorPosition + 1);
      }
    },
    [
      attemptToRunCommand,
      autocompleteCommands.length,
      commandHistory,
      commandHistoryIndex,
      input,
    ]
  );

  useEffect(() => {
    if (!isFocused) return;

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isFocused, onKeyDown]);

  return (
    <div
      role="textbox"
      className={clsx(
        "h-full overflow-scroll p-4 bg-slate-700 text-white font-mono min-h-full text-sm",
        !isFocused && "opacity-60"
      )}
    >
      {/* TODO: Intro and helper text. */}
      <p>I am a shell</p>
      <div>
        {outputs.map((output, index) => (
          <p
            className={clsx(output.type === "output" && "text-zinc-300 mb-4")}
            key={index}
          >
            {output.type === "prompt" && <PromptPrefix />}
            <span>{output.text}</span>
          </p>
        ))}
        <div>
          <PromptPrefix />
          {input.split("").map((letter, index) => (
            <Letter
              key={index}
              letter={letter}
              hasActiveCursor={index === cursorPosition}
              isFocused={isFocused}
            />
          ))}
          {cursorPosition === input.length && <Cursor isFocused={isFocused} />}
        </div>
        {autocompleteCommands.length > 0 && (
          <div className="text-zinc-400">
            {autocompleteCommands.map((command, index) => (
              <p key={command.name}>
                <button
                  className={clsx(autocompleteIndex === index && "text-white")}
                  onClick={() => {
                    runCommand(command, command.fullName);
                  }}
                >
                  {command.name}
                </button>
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Given an input string and a list of commands, return the matching command.
 * Note that commands may have a list of subcommands, so we need to recursively
 * check those as well.
 */
function findMatchingCommand(
  input: string,
  commands: RegisteredCommand[],
  previousCommand?: RegisteredCommand
): RegisteredCommand | undefined {
  const [firstWord, ...restWords] = input.trim().split(" ");

  const command = commands.find((command) => command.name === firstWord);

  if (!command) {
    return previousCommand;
  }

  if (restWords.length === 0 || !command.commands?.length) {
    return command;
  }

  return findMatchingCommand(restWords.join(" "), command.commands, command);
}

/**
 * Given a Command and an input string, return a set of arguments and flags.
 *
 * For example, given a command `ls` which has a Flag:
 *
 * { name: 'long', char: 'l', type: 'boolean' }
 *
 * With the input `ls -l`, this function would return `{ flags: { long: true } }`.
 *
 * Additionally, with the input `ls --long`, this function would return `{ flags: { long: true } }`.
 *
 * If a flag is not a boolean:
 *
 * { name: 'path', char: 'p', type: 'string' }
 *
 * And a value is passed to a flag, it will be included in the returned object. For example, with the input
 * `ls -p /path/to/dir`, this function would return `{ flags: { path: '/path/to/dir' }`.
 */
function parseCommandInput(command: RegisteredCommand, input: string) {
  const args = input.trim().split(/[ =]/);
  const flags: Record<string, any> = {};

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];

    if (arg.startsWith("-")) {
      const argWithoutDash = arg.replace(/-/g, "");
      const flag = command.flags?.find((flag) => {
        return flag.char === argWithoutDash || flag.name === argWithoutDash;
      });

      if (flag) {
        if (flag.type === "boolean") {
          flags[flag.name] = true;
        } else {
          let nextArg = args[i + 1];

          if (!nextArg || nextArg.startsWith("-")) {
            nextArg = "";
          }

          flags[flag.name] = nextArg;

          if (!nextArg) i++;
        }
      }
    } else {
      // TODO: Support named args and parse them.
    }
  }

  return { flags };
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

  return <span className={className}>{children ?? "??"}</span>;
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
  return <span className="font-bold">$ </span>;
}
