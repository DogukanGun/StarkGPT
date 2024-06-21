"use client";

import Submit from "@/components/Submit";
import { Input } from "@/components/Input";
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/navigation";

type P = {
  onMessage:(message:string)=>void
}

const ChatInput = (
  { onMessage }:Readonly<P>
)  => {
  const router = useRouter();
  const { toast } = useToast();

  async function handleSubmit(formData: FormData) {
    const message = formData.get("message") as string;
    onMessage(message)
  }

  return (
    <form
      action={handleSubmit}
      className="flex flex-row items-center gap-2 sm:pr-5"
    >
      <Input
        autoComplete="off"
        name="message"
        placeholder="Ask me something..."
        className="h-12"
      />
      <Submit />
    </form>
  );
}

export default ChatInput;