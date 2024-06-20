"use client"
import Navbar from "@/components/layout/navbar";
import { redirect } from "next/navigation";
import { PropsWithChildren } from "react";

export default function PrivateLayout({ children }: PropsWithChildren) {
  const session = localStorage.getItem("auth");
  if (!session) redirect("/");
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}