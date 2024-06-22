"use client";

import axios from "axios";
import ChatInput from "./components/ChatInput";
import { useState } from "react";
import ClientMessage from "./components/ClientMessage";
import ServerMessage from "./components/ServerMessage";

type Message = {
  message: string,
  role: 'user' | 'server'
}

export default function Chat() {

  const [messages, setMessages] = useState<Message[]>([]);

  const onUserMessage = async (message: string) => {
    setMessages([
      ...messages,
      {
        "message": message,
        "role": 'server'
      }
    ])
    const res = await axios.post("https://api.dogukangun.de/starknet", {
      message: message
    })
    setMessages([
      ...messages,
      {
        "message": res.data,
        "role": 'server'
      }
    ])
  }

  return (
    <div className="grow">
      {messages?.length == 0 && <div className="flex flex-col items-start gap-4 pb-10 min-h-[75vh] sm:w-[95%]">
        <div className="text-xl font-medium dark:text-sky-200 text-sky-700">
          How can I help you today?
        </div>
        <div className="dark:text-slate-300 text-slate-900">
          StarkGPT can make mistakes. Consider checking important information.
        </div>
      </div>}
      {messages.map((message) => {
        return message.role == 'server' ? <ServerMessage message={message.message}/> : <ClientMessage message={message.message} />
      })}
      <div className="mt-5 bottom-0 sticky pb-8 pt-1 bg-background">
        <ChatInput onMessage={onUserMessage} />
      </div>
    </div>
  );
}