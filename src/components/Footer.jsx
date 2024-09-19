import { Button } from "@mui/material";
import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Footer = () => {
  return (
    <>
    <div className="bg-[#F3F6F5] px-16 flex items-center justify-between pt-3 pb-8">
      <div className="flex-1 flex flex-col items-center justify-center space-y-2">
        <h2 className="text-[28px] font-['Book Antiqua'] font-semibold text-[#666666]">STAY CONNECTED</h2>
        <h4 className="text-[14px] font-[arial] font-bold text-[#666666]">DON’T MISS OUT ON THE LATEST NEWS!</h4>
        <Button  sx={{border: 4, borderColor: '#85bb23', color: 'black', fontSize: 13, fontFamily: 'arial', padding: '5px 40px'}}>SIGN UP</Button>
      </div>
      <div>
          <span className="text-[14px] font-[arial] font-semibold text-[#666666]">Contact</span>
          <div className="flex gap-2 items-center"><PhoneIcon sx={{width: 18, height: 18, color:'#838FA0'}}/> <span className="text-[14px] text-[#838FA0]">(703) 466-0011</span></div>
          <div className="flex gap-2 items-center"><MailOutlineIcon sx={{width: 18, height: 18, color:'#838FA0'}}/> <span className="text-[14px] text-[#838FA0]">info@insssc.com</span></div>
      </div>
    </div>
    <div className="py-2.5 flex flex-col items-center justify-center bg-[#e8e8e8]">
       <span className="text-[14px] font-[calibri]">All contents © 2024 SyllabusX, Inc. All Rights Reserved</span>
       <div className="flex items-center gap-4">
          <span className="text-xs font-[arial] text-[#666666]">Privacy Policy</span>
          <span className="text-xs font-[arial] text-[#666666]">Refund Policy</span>
          <span className="text-xs font-[arial] text-[#666666]">Delegate Cancellations & Transfer</span>
       </div>
    </div>
    </>
  );
};

export default Footer;
