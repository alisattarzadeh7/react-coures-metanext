import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {RecoilRoot} from "recoil";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <App/>
            </RecoilRoot>
            <ReactQueryDevtools  initialIsOpen={false}  />
        </QueryClientProvider>
    </React.StrictMode>,
)
