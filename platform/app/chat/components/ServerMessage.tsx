import { CircleUserRound } from "lucide-react";

type P = {
    message:string
}

const ServerMessage = ({ message }:P) => {
    return (
        <div className="flex items-start gap-2.5">
            <CircleUserRound className="w-8 h-8 rounded-full" />
            <div className="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">StarkGPT</span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">{message}</p>
            </div>          
        </div>
    )
}

export default ServerMessage;