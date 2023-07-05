import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { IntlProvider } from "react-intl";


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

    function goHome() {
        navigate("/")
    }

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);


    return (
<IntlProvider>

        <div className="select-none w-full min-h-[300vh] animate__animated animate__fadeIn">
            <button onClick={goHome} className="p-2 absolute top-[500px] md:top-0 md:right-0"><svg fill="#fff" width="64px" height="34px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 0c-8.836 0-16 7.163-16 16s7.163 16 16 16c8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 30.032c-7.72 0-14-6.312-14-14.032s6.28-14 14-14 14 6.28 14 14-6.28 14.032-14 14.032zM21.657 10.344c-0.39-0.39-1.023-0.39-1.414 0l-4.242 4.242-4.242-4.242c-0.39-0.39-1.024-0.39-1.415 0s-0.39 1.024 0 1.414l4.242 4.242-4.242 4.242c-0.39 0.39-0.39 1.024 0 1.414s1.024 0.39 1.415 0l4.242-4.242 4.242 4.242c0.39 0.39 1.023 0.39 1.414 0s0.39-1.024 0-1.414l-4.242-4.242 4.242-4.242c0.391-0.391 0.391-1.024 0-1.414z"></path> </g></svg><p className="text-white">Go home</p></button>


            <div className="flex flex-col  w-full h-[100vh] bg-no-repeat bg-cover bg-[url(https://i.postimg.cc/fb3TrFn7/pexels-emre-can-acer-2079228.jpg)] " >




                        <div className="w-full h-[70vh]  flex  flex-col md:flex-row  ">
                    <div className="w-full md:w-[50%] h-full  flex flex-col items-center">
                        <h1 className="text-[#fff] text-center md:text-start font-inter font-semibold tracking-wide md:text-[25px] text-[30px] pl-2 pt-2 xl:text-[45px] md:p-10 "  >"The world is a book Those who do not travel  only read a page"</h1>
                        <h3 className="text-[#fff] text-center md:text-start font-inter font-semibold tracking-wide p-10 text-[25px] md:text-[20px] ">I invite you to get to know my story, who I am  and who are the people that walk with me.  </h3>
                        <button onClick={handleSeeMore} className="btn btn-outline   font-bold font-inter text-[1.3rem] border-white text-[#3e3e3e] bg-white ">Let's start</button>

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
            <div className="w-full min-h-[100vh] bg-[#ffffff] text-[#000] font-montserrat flex flex-col sm:flex-row  items-center justify-evenly shadow-inner shadow-[#000000a4]">
                <div className="w-[60%]  sm:w-[40%] h-full flex flex-col justify-evenly p-4 " data-aos="fade-right" >
                    <img className="object-contain rounded-[10px] " src="https://i.postimg.cc/nLP5NmDM/perfil.jpg" alt="" />

                    <p className="w-full flex justify-evenly items-center text-[12px] sm:items-baseline  tracking-[1px]  rounded-[10px] bg-[#133157] font-semibold text-[#fff]  mt-2  sm:text-[15px]  p-2">

                        "Los Alerces" National Park, Chubut, Argentina.
                        <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34px" height="34px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path fill="#ffffff" d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64 s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39 h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"></path> <path fill="#ffffff" d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32 c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path> <path fill="#ffffff" d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36 c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"></path> </g> <g> <path fill="#F76D57" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.522,0-10-4.477-10-10s4.478-10,10-10s10,4.477,10,10S37.522,34,32,34z"></path> <path fill="#F76D57" d="M32,2c-12.15,0-22,9.85-22,22c0,5.799,3.469,11.469,5.913,15h0.01L32,61l16.077-22h0.01 C50.281,35.781,54,29.799,54,24C54,11.85,44.15,2,32,2z M32,38c-7.732,0-14-6.268-14-14s6.268-14,14-14s14,6.268,14,14 S39.732,38,32,38z"></path> </g> <path opacity="0.2" fill="#231F20" d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34 c-5.522,0-10-4.477-10-10s4.478-10,10-10s10,4.477,10,10S37.522,34,32,34z"></path> </g> </g></svg>
                    </p>
                </div>
                <div className=" w-[60%] sm:w-[40%] min-h-[60vh]  flex flex-col  justify-evenly items-center sm:items-start" data-aos="fade-left">
                    <p className="my-2">-15/01/2020</p>
                    <h1 className="font-bold my-2 tracking-[3px]">My experience:</h1>

                    <p className="w-full my-2  text-justify text-[12px] sm:text-[16px] tracking-[1px]">I made the trip in January 2020, I have the best memories, camping on the shores of the lake, surrounded by nature in its purest state.
                        It was 5 days disconnected from all technology, in the site there is no mobile signal, the night gives a sky full of stars.
                        Undoubtedly, it is one of the most enjoyable places to be in Argentina.</p>
                    <h2 className="font-bold my-2 tracking-[3px]">About the place:</h2>
                    <p className=" text-[12px] text-justify my-2 sm:text-[16px] tracking-[1px]">

                        Los Alerces National Park is a
                        <span className="font-bold text-[#69a431] hover:cursor-pointer "> <Link target='_blank' to={'https://www.argentina.gob.ar/parquesnacionales/losalerces'}>P.P.A</Link> </span>
                        located in the province of Chubut, Argentina. It stands out for its imposing alerce trees,
                        long-lived and large trees. It is home to a variety of wildlife species, such as the huemul
                        and the condor. With trails and paths to explore, it is a natural destination of great
                        scenic beauty in Argentina. <br />
                        Below are some postcards of my days in southern Argentina.
                    </p>
                </div>
            </div>

            <div className="w-full p-2   sm:h-[100vh] bg-[#fff] text-[#000] font-montserrat flex flex-col sm:flex-row  items-center justify-evenly ">
            <div className="carousel w-full  sm:h-[100vh]">
  <div id="slide1" className="carousel-item relative w-full  flex flex-col items-center justify-center">
    <p className="font-semibold text-center tracking-[2px] p-4">Photo taken at the pier of the Arrayanes River 📷</p>
    <p >Scroll to the right to see more ➡️</p>
    <img src="https://i.postimg.cc/90V59QZd/joasur2.jpg" className="  xl:w-[35%] object-contain h-[90%] rounded-[10px] shadow-md shadow-[#000000b2] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="hidden sm:flex  btn btn-circle ">❮</a> 
      <a href="#slide2" className="hidden sm:flex  btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full flex flex-col items-center justify-center">
    <p className="font-semibold text-center tracking-[2px] p-4">The color of the water gives it a magical touch 🌊</p>
    <img src="https://i.postimg.cc/1XbrYJrs/joasur3.jpg" className="xl:w-[35%] h-[90%] object-contain rounded-[10px] shadow-md shadow-[#000000b2] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn hidden sm:flex  btn-circle">❮</a> 
      <a href="#slide3" className="btn hidden sm:flex  btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full flex flex-col items-center justify-center">
    <p className="font-semibold tracking-[2px] text-center p-4">Location: Rio Azul, a tip? The water flows at 0ºC 🧊</p>
    <img src="https://i.postimg.cc/rF3QsFWz/cajonazul.jpg" className="xl:w-[35%] h-[90%] object-contain rounded-[10px] shadow-md shadow-[#000000b2] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn hidden sm:flex  btn-circle">❮</a> 
      <a href="#slide4" className="btn hidden sm:flex  btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full flex flex-col items-center justify-center">
    <p className="font-semibold tracking-[2px] text-center p-4">We all know that wherever an Argentinean goes, mate always goes 🧉</p>
    <img src="https://i.postimg.cc/MK7m6bW3/mate.jpg" className="xl:w-[35%] h-[90%] object-contain rounded-[10px] shadow-md shadow-[#000000b2] " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn hidden sm:flex  btn-circle">❮</a> 
      <a href="#slide1" className="btn hidden sm:flex  btn-circle">❯</a>
    </div>
  </div>
  
</div>

            </div>
        </div>

        </IntlProvider>

    )
}

