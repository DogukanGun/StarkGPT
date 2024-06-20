import Link from "next/link";
import { SquarePen } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full flex flex-row items-center justify-between h-24 sm:mb-7 mmb-2 top-0 sticky bg-background">
      <div className="flex-row items-center flex">
        <div className="sm:ml-3 flex flex-row items-center">
          <Link href="/chat">
            <SquarePen className="w-5 h-5 sm:hidden flex" />
            <span className="sm:flex hidden">New chat</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}