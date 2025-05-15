"use client";

import React, { useState } from "react";
import { Navbar } from "../CommonComponent/Navbar";
import { Footer } from "../CommonComponent/Footer";

const adList = [
  "https://dsp.eskimi.com/files/upload/rm/upload/65dca68667d3f/Oreo_Fruit_Ninja_300x600%202/index.html",
  "https://dsp.eskimi.com/files/upload/rm/upload/668d1445dde6d/300x600_crab_Prod/index.html",
  "https://dsp.eskimi.com/files/upload/rm/upload/65f964a75cf35/Nestle_Maggi_Bowl_Croatian_320x480/index.html",
  "https://dsp.eskimi.com/files/upload/rm/upload/6810dc7f2b073/Standard_300x600_v1/assets/vid.mp4",
  `https://dsp.eskimi.com/files/upload/rm/upload/65f997050c083/Cola_Cards_320x480_v1_Prod/index.html`,
  "https://eskimi-creatives.com/mcdonaldsnov10/mcdonaldsar/",
  "https://dsp.eskimi.com/files/upload/rm/upload/675aee08715a9/Standard_320x480_v8/assets/vid.mp4",
  "https://dsp.eskimi.com/files/upload/rm/upload/6720c13eae7a7/Standard_300x250_v8_Prod_300x600_KAZ/assets/vid.mp4",
  "https://dsp.eskimi.com/files/upload/rm/upload/66f67a9f6cee9/300x600_3/images/video.mp4",
  "https://dsp.eskimi.com/files/upload/rm/upload/672df1a55a61b/Standard_300x600_v7/assets/vid.mp4",
  "https://dsp.eskimi.com/files/upload/rm/upload/672e092ebab81/Standard_320x480_v7/assets/vid.mp4",
  "https://creative.automate360.io/ctv-kiacarens"
];

export default function AdsSlider() {
  const [index, setIndex] = useState(0);

  const goToPrevious = () => {
    setIndex((prev) => (prev === 0 ? adList.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIndex((prev) => (prev === adList.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Inline CSS */}
      <style>{`
        .adsmain {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

     .adsslidermain {
    position: absolute;
    top: 70px;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    background-color: #fff;
}

        .screenHeader111 {
          height: 80px;
          background-color: #4C84FF;
          position: absolute;
          width: 100%;
          border-radius: 10px 20px 0 0;
          display: none;
        }

        .qrcodeHider {
          width: 250px;
          height: 240px;
          position: absolute;
          background-color: #ffffff;
          bottom: 17px;
          right: 23px;
          border-radius: 10px;
          z-index: 999;
        }

        .mainnextprevie {
         position: absolute;
    top: 35vh;
        width: 60%;
    z-index: 99999;
        margin: auto;

        }

        .mainnextprevieul {
          display: flex;
          list-style: none;
          gap: 30px;
          padding: 10px;
          border-radius: 7px;
          justify-content: center;
          margin: 0;
              justify-content: space-between;
        }

      
        .nextprev {
          background-color: #4c84ff;
          color: white;
          padding: 16px 40px;
          text-align: center;
          text-decoration: none;
          display: inline-block;
          border-radius: 10px;
          cursor: pointer;
          border: none;
          font-size: 16px;
                width: 140px;
        }

        .nextprev:hover {
          background-color: red;
        }

        .adsSection {
          position: relative;
          height: 100vh;
        }

        iframe{
            width: 330px;
    margin: auto;
        }

        @media screen and (max-width: 768px) {
          .mainnextprevieul {
            gap: 10px;
            padding: 8px;
          }

          .mainnextprevie{
          top:0vh
          }
          .nextprev {
            padding: 12px 24px;
            font-size: 14px;
          }
            .mainnextprevie{
            width: 80%;
            }
        }
          
      `}</style>

      {/* Component */}
       <Navbar/>
      <div className="adsSection">
        <div className="adsmain">
          <div className="adsslidermain">
            <div className="screenHeader111" />
            <iframe
              id="myIframe"
              sandbox="allow-same-origin allow-scripts"
              src={adList[index]}
              title={`Ad ${index + 1}`}
              width="100%"
              height="100%"
              frameBorder="0"
              
            >
              <p>Your browser does not support iframes.</p>
            </iframe>
            {/* <div className="qrcodeHider" /> */}
          </div>


          {/* Buttons */}
          <div className="mainnextprevie">
            <ul className="mainnextprevieul">
              <li>
                <button className="nextprev" onClick={goToPrevious}>
                  Previous
                </button>
              </li>
              <li>
                <button className="nextprev" onClick={goToNext}>
                  Next
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
        <Footer/>
    </>
  );
}
