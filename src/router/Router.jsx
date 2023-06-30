import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";
import  Index  from "../pages/Index";
import 'tailwindcss/tailwind.css';



 
export default function Router(){

    return(
        <Routes>
            <Route element={<App/>}>
                <Route path="/" element={<Index/>}/>
            </Route>
        </Routes>
    )
}