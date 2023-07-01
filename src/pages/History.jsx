import React, {useState} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";


export default function History() {
    const navigate = useNavigate()
    const [scrollPosition, setScrollPosition] = useState(0);
    const handleSeeMore = () => {
        const newScrollPosition = window.innerHeight;
        window.scrollTo({
          top: newScrollPosition,
          behavior: "smooth",
        });
        setScrollPosition(newScrollPosition);
      };

      function goHome(){
        navigate("/")
      }


    return (


        <div className="w-full h-[300vh] animate__animated animate__fadeIn">
            <button onClick={goHome} className="p-2 absolute top-[600px] md:top-0 md:right-0"><svg fill="#000000" width="64px" height="34px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path> </g></svg><p className="text-white">Go home</p></button>

        <div className="flex flex-col  w-full min-h-[100vh] bg-no-repeat bg-cover bg-[url(https://i.postimg.cc/fb3TrFn7/pexels-emre-can-acer-2079228.jpg)] " >

 

            <div className="w-full h-[70vh] flex  flex-col md:flex-row  ">
                <div className="w-full md:w-[50%] h-full   flex flex-col items-center">
                    <h1 className="text-[#fff] text-center md:text-start font-inter font-semibold tracking-wide md:text-[25px] text-[30px] pl-2 pt-2 xl:text-[45px] md:p-10 "  >"The world is a book Those who do not travel  only read a page"</h1>
                    <h3 className="text-[#fff] text-center md:text-start font-inter font-semibold tracking-wide p-10 text-[25px] md:text-[20px] ">I invite you to get to know my story, who I am  and who are the people that walk with me.  </h3>
                    <button onClick={handleSeeMore} className="btn btn-outline   font-bold font-inter text-[1.3rem] border-white text-[#3e3e3e] bg-white ">Let's start</button>

                    <img className="w-[25vw] mt-[4vh] sm:hidden" src="https://i.postimg.cc/X7RQvn5G/ec5de5ff957a0a861ac59a0036261d5c-removebg-preview.png" alt="" />

                   

                </div>
                <div className=" sm:w-full   md:w-[50%] flex items-center sm:justify-center md:justify-end ">
                    <img className="sm:p-4 md:pr-10 sm:w-[35vw] hidden sm:block" src="https://i.postimg.cc/k5tfwxs1/travel-removebg-preview-1.png" alt="" />
                </div>
            </div>
            <div className=" hidden  w-full h-[30vh] bg-transparent sm:flex justify-around items-center ">
                <div className="w-[25%]   h-[70%] p-4  flex items-center   justify-center  " >


                    <img className=" w-[14vw] " src="https://i.postimg.cc/YCzZKcWc/60e75abdf7a36f518f159d953d9d5b89-removebg-preview.png" alt="" />

                </div>
                <div className="w-[25%]   h-[70%] p-4  flex items-center   justify-center  " >
                    <img className="w-[14vw] " src="https://i.postimg.cc/7LGTp45X/bc5812cdeb611f36c55978c3aa473cad-removebg-preview.png" alt="" />

                </div>
                <div className="w-[25%]   h-[70%] p-4  flex items-center   justify-center  " >
                    <img className="w-[14vw] " src="https://i.postimg.cc/90jmzt8v/ea09909c5ce2274b693031afc0be1cb5-removebg-preview.png" alt="" />

                </div>


            </div>


        </div>
        <div   className="w-full h-[100vh] bg-[#6a7a8d] flex items-center justify-evenly shadow-inner  shadow-[#000000a4] ">
          <div className="w-[25%] h-[70%]  bg-[#fff] rounded-[10px] shadow-md shadow-[#000000f0] ">
            <div className="w-full h-[4vh]">

            </div>
            <img className="  w-full h-[65%] object-contain p-1" src="https://i.postimg.cc/7P9LgLB2/perfil.jpg" alt="" />
            
          </div>
          <div className="w-[25%] h-[70%]  bg-[#fff] rounded-[10px] shadow-md shadow-[#000000f0] "><img className="  w-full h-[65%] object-contain p-1 " src="https://i.postimg.cc/PqQHTpZr/sur1.jpgs" alt="" /></div>
          <div className="w-[25%] h-[70%]  bg-[#fff] rounded-[10px] shadow-md shadow-[#000000f0] "><img className="  w-full h-[65%] object-contain p-1" src="https://i.postimg.cc/vHYMDj4G/joaviaje.jpg" alt="" /></div>
        </div>
        </div>

    )
}

