import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const Banner = () => {
  return (
    <div className="mb-12">
      <div className="px-2 py-2 bg-[#232B38] grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <a
          href="#"
          className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial]"
        >
          Online Registartion
        </a>
        <a
          href="#"
          className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial]"
        >
          {" "}
          Offline Registration <PictureAsPdfIcon sx={{color: '#85bb23'}} />
        </a>
        <a
          href="#"
          className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial]"
        >
          {" "}
          Group Registration <PictureAsPdfIcon sx={{color: '#85bb23'}}/>
        </a>
        <a
          href="#"
          className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial]"
        >
          Conference Brochure <PictureAsPdfIcon sx={{color: '#85bb23'}}/>
        </a>
        <a
          href="#"
          className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial]"
        >
          {" "}
          ONE2ONE
        </a>
        <a
          href="#"
          className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial]"
        >
          {" "}
          Vendor Demos Schedule
        </a>
      </div>

      <div className="bg-custom-gradient p-2.5 ">
        <p className="text-[25px] font-[georgia] font-semibold text-[#FFFFFF] pt-5">
          National Student Safety & Security Conference & Workshop
        </p>
        <p className="text-[22px] font-[Open Sans] font-semibold text-[#FFFFFF]">
          Co-located Events
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-4 items-center">
          <div className="flex items-center justify-end p-4">
            <img
              src="https://insssc.com/wp-content/uploads/2022/12/sro-white.png"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-end p-4">
            <img
              src="https://insssc.com/wp-content/uploads/2022/12/smh-white.png"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-end p-4">
            <img
              src="https://insssc.com/wp-content/uploads/2022/12/asb-white.png"
              loading="lazy"
            />
          </div>
          <div className="flex items-center justify-end p-4">
            <img
              src="https://insssc.com/wp-content/uploads/2023/11/CSCS.png"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
