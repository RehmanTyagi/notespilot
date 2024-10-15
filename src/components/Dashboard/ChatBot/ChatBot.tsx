import Button from "../../common/Button";
import Input from "../../common/Input";
import { useChatBotMutation } from "../../../store/noteApiSlice";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { BeatLoader } from "react-spinners";
import { BsSend } from "react-icons/bs";

interface FormInputs {
  query: string;
}

interface Chat {
  text: string;
  user: boolean;
}
const ChatBot = () => {
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [yourQuestion, setYourQuestion] = useState<string>("");
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const [chat, { isLoading }] = useChatBotMutation();
  const { register, handleSubmit } = useForm<FormInputs>();

  const handleFormSubmit = async (data: FormInputs) => {
    console.log(data);
    setYourQuestion("");
    const { query } = data;

    const userChat = {
      text: query,
      user: true,
    };

    try {
      setChatHistory((prevHistory) => [...prevHistory, userChat]);
      const chatBotRes = await chat(query).unwrap();
      if (chatBotRes) {
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { text: chatBotRes.text, user: false },
        ]);
      }
    } catch (error) {
      console.error(error); // handle error
      setChatHistory((prevHistory) => [
        ...prevHistory,
        {
          text: "Sorry, I couldn't find any answer for your query.",
          user: false,
        },
      ]);
    }
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <div className="flex max-w-96 flex-grow flex-col justify-between gap-2.5 overflow-hidden p-1.5">
      <div
        ref={chatBoxRef}
        className={`scrollbar-visible flex-grow overflow-y-auto px-2`}
        role="chat-bot-response"
      >
        {chatHistory.length === 0 ? (
          <div className="my-3 flex flex-col gap-1">
            <div className="my-3 flex flex-col gap-1">
              <p className="self-end text-xs font-medium dark:text-gray-300">
                🤖 NotesPilot Assistant
              </p>
              <p className="rounded-md border-2 bg-slate-100 p-2 text-xs">
                Ask me anything! 😊 I am happy to assistant you for any topic
                that is not harmful. 🚀
              </p>
            </div>
          </div>
        ) : (
          chatHistory.map((chat, index) => {
            return (
              <div className="my-3 flex flex-col gap-1" key={index}>
                <p
                  className={`${!chat.user && "self-end"} text-xs font-medium dark:text-gray-300`}
                >
                  {chat.user ? "😊 Your message" : "🤖 NotesPilot Assistant"}
                </p>
                <p
                  className="rounded-md border-2 bg-slate-100 p-2 text-xs"
                  key={index}
                >
                  {chat.text}
                </p>
              </div>
            );
          })
        )}
        {isLoading && (
          <div className="flex justify-end rounded-md bg-slate-100 p-2.5">
            <BeatLoader size={5} color="red" />
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex items-center gap-2 rounded-md"
      >
        <Input
          {...register("query", {
            required: "query required to chat with bot.",
          })}
          onChange={(e) => setYourQuestion(e.target.value)}
          value={yourQuestion}
          type="text"
          className="h-full border-primary text-xs dark:bg-slate-700 dark:text-gray-300 dark:placeholder:text-gray-300"
          placeholder="Ask Question!"
        />

        <Button className="!w-16 border-primary text-primary" type="submit">
          <BsSend />
        </Button>
      </form>
    </div>
  );
};

export default ChatBot;
