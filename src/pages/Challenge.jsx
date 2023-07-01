import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function Challenge(){

const navigate = useNavigate()

function goToHome(){
    navigate("/")
}

    return(

        <>
        <div className="w-[100vw] text-center  animate__animated animate__fadeIn flex flex-col justify-evenly items-center h-[100vh] bg-[#000] ">
        <button onClick={goToHome} className="p-2  absolute  top-0 right-0"><svg fill="#fff" width="64px" height="34px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path> </g></svg><p className="text-[#fff]">Go home</p></button>
            <h1 className="text-[#fff]  text-[20px] font-montserrat font-bold tracking-[4px] "  >We apologize for the inconvenience, we are working for you.</h1> 
            <h3 className="text-[#fff] tracking-[5px] " >(On this page we are Simpsons team.)</h3>
            <img className=" w-[80vw] md:w-[40vw]" src="https://i.postimg.cc/yYPGBfhw/image.png" alt="" />
            <span className="loading loading-spinner loading-lg"></span>
        </div>
        </>
    )
}