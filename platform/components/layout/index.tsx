"use client"
import { DynamicContextProvider } from '@dynamic-labs/sdk-react-core';
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { redirect } from 'next/navigation';

type P = {
    children: React.ReactNode
}

const Layout = ({children}:P) => {
    return(<DynamicContextProvider
        settings={{
            handlers: {
                handleVerifiedUser: async (args) => {
                    console.log("handleBeforeAuth was called", args);
                    localStorage.setItem("auth", args.user.sessionId);
                    redirect("/chat");
                },
            },
            environmentId: process.env.NEXT_PUBLIC_DYNAMIC_KEY ?? "",
            walletConnectors: [EthereumWalletConnectors],
        }}>
            { children }
    </DynamicContextProvider>)
}

export default Layout