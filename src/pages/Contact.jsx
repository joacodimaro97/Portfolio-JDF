import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function Contact(){
const navigate = useNavigate()

function goToHome(){
    navigate("/")
}

    return(

        <>
        <div className=" animate__animated animate__fadeIn w-[100vw] flex flex-col justify-center items-center h-[100vh] bg-[#e3e3e3]">
        <button onClick={goToHome} className="p-2  absolute  top-0 right-0"><svg fill="#000000" width="64px" height="34px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path> </g></svg><p className="text-[#000]">Go home</p></button>
            <div className=" w-[90vw] sm:w-[50vw] lg:w-[35vw] h-[80vh] bg-[#000] flex flex-col items-center justify-evenly ">
                <h2 className="font-semilbold tracking-[3px] text-center p-2 text-[#fff]">Your business needs a good website</h2>
                <h1 className=" text-[20px] md:text-[25px] p-2 tracking-[5px] font-montserrat font-semibold text-[#fff] ">Contact <span className="text-[#676CE7]">with me</span></h1>
                <h3 className="font-semibold tracking-[5px] text-[#fff] ">The steps are simple</h3>
                    <ul  className=" text-[#fff] steps">
                        <li className="step step-primary">Contact</li>
                        <li className="step ">Show your idea</li>
                        <li className="step">Coordinate</li>
                        <li className="step">Boost your brand</li>
                    </ul>
            <form action="" className="w-full text-[#fff] p-4 md:p-0 md:w-[30vw] h-[50%] justify-evenly flex flex-col items-center bg-[#000] " >
                <div className="flex flex-col w-full ">
                <label htmlFor="">Name</label>
                <input className="bg-transparent border-b border-white w-full " type="text" />
                </div>
                <div className="flex flex-col w-full ">
                <label htmlFor="">Address</label>
                <input className="bg-transparent border-b border-white w-full " type="text" />
                </div>
                <div className="flex flex-col w-full ">
                <label htmlFor="">Phone Number</label>
                <input className="bg-transparent border-b border-white w-full " type="text" />
                </div>
                <div className="flex flex-col w-full ">
                <label htmlFor="">Name</label>
                <select  className="bg-transparent w-full border-b border-white" name="" id="">
                    <option disabled value="">Select an option</option>
                    <option value="">Contact  you</option>
                    <option value="">Working with you</option>
                    <option value="">Others</option>
                </select>
                </div>

                <button className="btn btn-outline mt-4 mb-1 hover:bg-white text-[#fff]">Send</button>

            </form>
            </div>
            
        </div>
        </>
    )
}