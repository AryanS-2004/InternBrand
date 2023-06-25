import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import InternshipProvider from "./Context/InternshipProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <InternshipProvider>
                <App/>
            </InternshipProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
