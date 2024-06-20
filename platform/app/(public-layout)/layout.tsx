"use client"
import Navbar from "@/components/layout/navbar";
import { redirect } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export default function PublicLayout({ children }: PropsWithChildren) {
  const session = localStorage.getItem("auth");
  useEffect(()=>{
    if (session) redirect("/chat");
  },[session])
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}