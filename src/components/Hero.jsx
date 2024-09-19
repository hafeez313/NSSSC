import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PrintIcon from "@mui/icons-material/Print";
import Banner from "./Banner";

const Hero = () => {
  return (
    <div className="px-5 sm:px-16">
      <div className="py-6 flex items-center justify-between">
        <p className="text-[14px] font-[arial] font-semibold">NSSSC-2024</p>

        <div className="flex items-center gap-5">
          <a
            href="mailto:dummy@gmail.com"
            className="flex flex-col text-[#A7B1AC] items-center transition-colors duration-300 hover:text-[#85bb23]"
          >
            <EmailIcon
              sx={{
                width: 32,
                height: 32,
                color: "#A7B1AC",
                transition: "color 0.3s ease",
                "&:hover": { color: "#85bb23" },
              }}
            />
            <span className="text-[7px] text-[#A7B1AC] font-[arial] ">
              SEND
            </span>
          </a>
          <a
            href="mailto:dummy@gmail.com"
            className="flex flex-col text-[#A7B1AC] items-center transition-colors duration-300 hover:text-[#85bb23]"
          >
            <TwitterIcon
              sx={{
                width: 32,
                height: 32,
                color: "#A7B1AC",
                transition: "color 0.3s ease",
                "&:hover": { color: "#85bb23" },
              }}
            />
            <span className="text-[7px] text-[#A7B1AC] font-[arial]">
              TWEET
            </span>
          </a>
          <a
            href="mailto:dummy@gmail.com"
            className="flex flex-col text-[#A7B1AC] items-center transition-colors duration-300 hover:text-[#85bb23]"
          >
            <LinkedInIcon
              sx={{
                width: 32,
                height: 32,
                color: "#A7B1AC",
                transition: "color 0.3s ease",
                "&:hover": { color: "#85bb23" },
              }}
            />
            <span className="text-[7px] text-[#A7B1AC] font-[arial]">
              SHARE
            </span>
          </a>
          <a
            href="mailto:dummy@gmail.com"
            className="flex flex-col text-[#A7B1AC] items-center transition-colors duration-300 hover:text-[#85bb23]"
          >
            <PrintIcon
              sx={{
                width: 32,
                height: 32,
                color: "#A7B1AC",
                transition: "color 0.3s ease",
                "&:hover": { color: "#85bb23" },
              }}
            />
            <span className="text-[7px] text-[#A7B1AC] font-[arial]">
              PRINT
            </span>
          </a>
        </div>
      </div>

      <Banner/>
    </div>
  );
};

export default Hero;
