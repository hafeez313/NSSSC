import React, { useEffect, useState } from "react";

const Header = () => {
  const [height, setHeight] = useState(130);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setHeight(60);
      } else {
        setHeight(130);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ height: `${height}px` }}
      className="fixed right-0 left-0 bg-[#f3f6f5] border border-b-[#bdc8cb] top-[60px] transition-all duration-300 px-16 flex items-center justify-between"
    >
      <a href="" className={`font-[Georgia] text-[${window.scrollY > 30 ? 14 : 25}px]  relative`}>
        <p className="text-center" style={{lineHeight: 1}}>National<br></br><span className="font-semibold">Student Safety and Security</span><br></br>Conference & Workshop</p>
      </a>
      <div className="hidden md:flex items-center justify-center gap-6">
         <a href='' className="text-[14px] font-[arial] font-semibold hover:text-[#85bb23]">APPLY TO SPEAK</a>
         <a href='' className="text-[14px] font-[arial] font-semibold hover:text-[#85bb23]">REGISTER NOW!</a>
         <a href='' className="text-[14px] font-[arial] font-semibold hover:text-[#85bb23]">CONTACT US</a>
      </div>
    </div>
  );
};

export default Header;
