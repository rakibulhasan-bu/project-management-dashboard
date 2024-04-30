"use client";

import { ToastContainer } from "react-toastify";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()


export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                {children}
                <ToastContainer
                    position="bottom-center"
                    theme={"dark"}
                    pauseOnHover={false}
                    hideProgressBar={true}
                    limit={1}
                    autoClose={3500}
                />
            </QueryClientProvider>
        </div>
    )
}