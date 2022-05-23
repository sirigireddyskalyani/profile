import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeroinCard = () => {
  return (
    <div
      className="h-fit w-screen bg-scroll bg-cover bg-top md:bg-fixed md:bg-center"
      style={{ backgroundImage: "url('./bgImages/heroinCardBG.png')" }}
    >
      <div className="flex flex-col items-center justify-around md:justify-center pt-[5rem] text-white">
        <div class="avatar">
          <div class="w-24 mask mask-hexagon">
            <img src="/bgImages/heroinCardBG.jpeg" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around p-4">
          <p className="font-MsMadi md:text-3xl">I'm</p>
          <p className="font-MsMadi text-2xl md:text-4xl text-center ">
            Kalyani Sirigireddy
          </p>
          <p className="font-RobotoSlab mt-6 break-words text-center md:text-2xl max-w-full md:max-w-screen-md">
            A product-focused javascript fullstack developer.

          </p>
          <p className="font-RobotoSlab break-words text-center md:text-2xl max-w-full md:max-w-screen-md">
            I specialise in creating interactive experiences and functional interfaces using React, Canvas, Atomic Architecture and Design Systems.
          </p>
          <button class="btn btn-xs btn-danger m-2">
            <FontAwesomeIcon className="w-2 h-2 mr-1" icon={faDownload} />
            Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroinCard
