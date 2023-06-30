import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import  Index  from "../pages/Index";
import History from "../pages/History";
import 'tailwindcss/tailwind.css';



 
export default function Router(){

    return(
        <Routes>
            <Route element={<App/>}>
                <Route path="/" element={<Index/>}/>
            </Route>
                <Route path="/history" element={<History/>}/>
        </Routes>
    )
}