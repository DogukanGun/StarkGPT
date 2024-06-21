"use client"
import Link from "next/link";
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-5 justify-center h-[70vh]">
      <h3 className="text-4xl font-bold text-center">
        Welcome to StarkChat! Your Gateway to Intelligent Conversations, Powered
        by StarkChat
      </h3>
      <p className="sm:w-[75%] mx-auto text-center text-muted-foreground ">
        StarkChat redefines the chat experience by seamlessly integrating the
        robust capabilities of the Voyager API. This platform takes conversational
        AI to new heights, offering you a dynamic and intelligent chat companion
        designed for a wide array of applications.
      </p>
      <DynamicWidget />

    </div>
  );
}