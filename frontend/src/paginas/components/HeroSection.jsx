import React from 'react'
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"


const HeroSection = () => {
  return (
     <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Monitor de Devices 
            <span className="bg-gradient-to-r from-purple-500 to-blue-900 text-transparent bg-clip-text">
                {" "}
                ESP32
            </span>
        </h1>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
            Site feito para auxiliar no monitoramento de consumo de energia de aparelhos usando ESP32
        </p>
        <div className="flex justify-center my-10">
            <a href="#" className="bg-gradient-to-r from-purple-500 to-blue-800 py-3 px-4 mx-3 rounded-md">
                Entrar em contato
            </a>
            <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                Documentation
            </a>
        </div>
        <div className="flex mt-10 justify-center">
            <video autoPlay loop muted  className="rounded-lg w-1/2 mr-5 border border-purple-700">
                <source src={video1} type="video/mp4"/>
                Seu browser não suporta o vídeo!
            </video>
            <video autoPlay loop muted className="rounded-lg w-1/2 border border-purple-700">
                <source src={video2} type="video/mp4"/>
                Seu browser não suporta o vídeo!
            </video>
        </div>
     </div>
)
}

export default HeroSection