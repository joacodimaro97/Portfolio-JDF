import React, { useEffect, useState } from "react";

export default function Card() {
  const [images, setImages] = useState([]);
  const [counter, setCounter] = useState(0);
  const [currentProject, setCurrentProject] = useState(0);

  let data = [
    {
      title: "Mindtech",
      date: "6-2023",
      description:
        "Web developed as a team, using the AGILE work methodology AGILE work methodology, organizing and distributing tasks in Trello, applying different technologies to ensure the proper functioning of the application, from the Front-end and Back-end side. Front-end and Back-end side.",
      images: [
        "https://i.postimg.cc/KvBs1bvX/image.png",
        "https://i.postimg.cc/90r56nGm/image.png",
        "https://i.postimg.cc/pXFJsJgK/image.png",
        "https://i.postimg.cc/MTsgYJn6/image.png",
        "https://i.postimg.cc/ZqD5C2JN/image.png",
        "https://i.postimg.cc/TPZX86Rt/image.png"
      ]
    },
    {
      title: "Diego Joaquin PR fotografia",
      date: "6-2022",
      description: "Personal Blog",
      images: [
        "https://i.postimg.cc/L4bcWPTm/image.png",
        "https://i.postimg.cc/GhTWnp7G/image.png",
        "https://i.postimg.cc/Bv4kFBqB/image.png",
        "https://i.postimg.cc/wjhn3GdB/image.png"
      ]
    },
    {
      title: "Happy Pets",
      date: "3-2023",
      description:
        "Development of a web, only from the Front-End, applying AGILE methodology for the organization of group work. We used HTML, CSS, Boostrap technologies, the product data were consumed from the API provided by the client. Within the functionalities of the web, we generated a dynamic page, sectioned in home, toys, pharmacy, contact and a payment form. In addition, we incorporated the option to add or remove products to the shopping cart.",
      images: [
        "https://i.postimg.cc/vTxbKtx6/image.png",
        "https://i.postimg.cc/RVcNVvqJ/image.png",
        "https://i.postimg.cc/xjmdt9vp/image.png",
        "https://i.postimg.cc/0yV5bjvj/image.png"
      ]
    }
  ];

  useEffect(() => {
    // Setear las imágenes del primer proyecto al montar el componente
    setImages(data[0].images);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % images.length);
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  const handleProjectChange = (step) => {
    setCurrentProject((prevProject) => {
      const nextProject = prevProject + step;
      if (nextProject >= 0 && nextProject < data.length) {
        setImages(data[nextProject].images);
        setCounter(0);
        return nextProject;
      }
      return prevProject;
    });
  };

  return (
    <>
      <button className="bg-black w-[10vw] m-1 md:w-[3vw] md:mr-4 flex items-center justify-center h-[5vh] rounded-[50px] " onClick={() => handleProjectChange(-1)}>
      <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon> </g> </g> </g></svg>
      </button>
      <div className=" w-[90%] md:w-[65%]  min-h-[70vh] md:h-[70vh] bg-[#e5e5e5] shadow-md shadow-black flex flex-col items-center justify-evenly rounded-[15px]">
        <h1 className="font-black tracking-[8px] text-[30px] ">{data[currentProject].title}</h1>
        <p className="text-center text-[12px] p-2 w-[100%] md:w-[80%] font-montserrat">{data[currentProject].description}</p>
        <img className="w-[70%] h-[65%] object-contain" src={images[counter]} alt="" />
      </div>
      <button className="  bg-black m-1 w-[10vw] md:w-[3vw] md:ml-4 flex items-center justify-center h-[5vh] rounded-[50px] " onClick={() => handleProjectChange(1)}>
      <svg fill="#ffffff" height="24px" width="24px" version="1.1" id="XMLID_287_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="next"> <g> <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "></polygon> </g> </g> </g></svg>
      </button>
    </>
  );
}

