/* eslint-disable @next/next/no-img-element */

"use client";

import ImageViewer from "react-simple-image-viewer";
import { SetStateAction, useCallback, useState } from "react";

export default function Top() {
  const listNews = [
    {
      title: "APPEL À PROJETS EN INNOVATION NUMÉRIQUE",
      date_creation: "4",
      image: [
        "https://res.cloudinary.com/di6go353l/image/upload/v1711288002/vedlqh22lulp0pmjzbij.png",
      ],
    },
    {
      title: "FINANCEMENT DE PROJETS PAR L'ANSUT",
      date_creation: "2",
      image: [
        "https://res.cloudinary.com/di6go353l/image/upload/v1711288002/vedlqh22lulp0pmjzbij.png",
      ],
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [active, setActive] = useState(0);
  const handleChangeActive = (index: number) => {
    setActive(index);
  };

  const openImageViewer = useCallback((index: SetStateAction<number>) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="max-w-[85rem] mt-24 px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <h2 data-aos="zoom-y-out" className="h2 mb-20 dark:text-white text-center">
        À la Une
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {listNews.map((item, index) => (
          <div
            key={index}
            data-aos="zoom-y-out"
            data-aos-delay="150"
            className="group max-w-[400px] flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-[#222] dark:border-gray-700 dark:shadow-slate-700/[.7]"
          >
            <div className="h-52 bg-gray-200 flex justify-center items-center rounded-t-xl overflow-hidden">
              <img
                className="h-32"
                src="https://www.svgrepo.com/show/375851/news.svg"
                alt="Logo"
              />
            </div>
            <div className="p-4 md:p-6">
              <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
                À la une
              </span>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-500 dark:text-[#ccc]">
                Publié il y a {item.date_creation} mois.
              </p>
            </div>
            <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-[#333] dark:divide-gray-700">
              <a
                className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-[#222] dark:border-gray-700 dark:text-white dark:hover:bg-[#333] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                onClick={() => {
                  handleChangeActive(index);
                  openImageViewer(index);
                }}
              >
                Voir plus
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 dark:fill-white"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 12H20M12 4V20"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
              </a>
            </div>
          </div>  
        ))}
      </div>

      <div className="z-50">
        {isViewerOpen && (
          <ImageViewer
            src={listNews[active].image}
            currentIndex={0}
            disableScroll={true}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
            backgroundStyle={{
              backgroundColor: "rgba(0,0,0,0.8)",
              zIndex: 99,
              paddingTop: 20,
              paddingBottom: 20,
            }}
          />
        )}
      </div>
    </div>
  );
}
