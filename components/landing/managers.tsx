/* eslint-disable @next/next/no-img-element */
import "@/app/css/additional-styles/utility-patterns.css";
import Link from "next/link";

export default function Managers() {
  const managers = [
    {
      name: "DR KOUASSI FRANKLIN",
      role: "Coordinateur",
      link_image:
        "https://res.cloudinary.com/di6go353l/image/upload/v1711277614/itjgahlnh9ex4xa4dowi.jpg",
    },
    {
      name: "PR ASSEU OLIVIER",
      role: "Responsable",
      link_image:
        "https://res.cloudinary.com/di6go353l/image/upload/v1711277618/aiwjvylp8tvst9xjkyqr.jpg",
    },
    {
      name: "PR DIABY MOUSTAPHA",
      role: "Responsable",
      link_image:
        "https://res.cloudinary.com/di6go353l/image/upload/v1711277616/vswsd6gizw84dxn9b237.jpg",
    },
    {
      name: "DR PANDRY GHISLAIN",
      role: "Responsable",
      link_image:
        "https://res.cloudinary.com/di6go353l/image/upload/v1711277615/mj1esm29pxxr5buhr5m3.jpg",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto text-center pb-12 md:pb-20">
      <h2 data-aos="zoom-y-out"
        data-aos-delay="150" className="h1 mb-24 dark:text-white">
        Une équipe d&apos;experts
      </h2>
      <div className="grid justify-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
        {managers.map((manager, index) => (
          <div
            data-aos="zoom-y-out"
            data-aos-delay="350"
            key={index}
            className="flex flex-col items-center space-y-3"
          >
            <div className="h-72 w-72 rounded-full overflow-hidden">
              <img
                className="h-72 w-72 rounded-full hover:scale-110 transition duration-300"
                src={manager.link_image}
                alt=""
              />
            </div>

            <h2 className="text-xl font-black dark:text-white"> {manager.name} </h2>

            <div className="flex gap-4 items-center">
              <p className="text-lg dark:text-[#eee]"> {manager.role} </p>
              <Link href="/signup">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="30px"
                  height="30px"
                  className="dark:fill-white"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
