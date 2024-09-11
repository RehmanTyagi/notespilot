import Button from "../../common/Button";
import Input from "../../common/Input";
import { useChatBotMutation } from "../../../store/noteApiSlice";
import Spinner from "../../common/Spinner";
import { useForm } from "react-hook-form";

const ChatBot = () => {
  const [chat, { isError, isLoading, data }] = useChatBotMutation();

  const { register, handleSubmit } = useForm<FormInputs>();

  interface FormInputs {
    query: string;
  }

  const handleFormSubmit = async (data: FormInputs) => {
    const { query } = data;
    try {
      await chat(query).unwrap();
    } catch (error) {
      console.error(error); // handle error
    }
  };

  if (isLoading) {
    return (
      <div className="grid flex-grow place-content-center">
        <Spinner className="h-32 w-32" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="grid flex-grow place-content-center">
        <div className="text-red-500">Failed to fetch data</div>
      </div>
    );
  }

  return (
    <div className="flex flex-grow flex-col justify-between gap-2.5 overflow-hidden p-1.5">
      <div
        className={`scrollbar-visible flex-grow ${data ? "overflow-y-scroll" : ""} px-2`}
        role="chat-bot-response"
      >
        {data ? (
          <div className="rounded-md border-2 bg-gray-100 p-2">
            {data?.text}
          </div>
        ) : (
          <div className="rounded-md border-2 bg-gray-100 p-2">
            Your questions answers will be shown here. at free account, you can
            access this feature at limited access.
          </div>
        )}
      </div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="relative flex h-12 items-center gap-2 rounded-md border-2 p-2"
      >
        <Input
          {...register("query", {
            required: "query required to chat with bot.",
          })}
          type="text"
          className="h-full !p-0.5 focus:ring-primary"
          placeholder="Search Question!"
        />
        <Button type="submit" className="h-8 !w-16">
          Search
        </Button>
      </form>
    </div>
  );
};

export default ChatBot;
