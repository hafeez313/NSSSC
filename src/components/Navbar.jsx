import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Drawer, ListItem, MenuList } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="h-[60px] bg-[#232b38] fixed right-0 left-0 top-0 flex justify-between items-center">
      <div className="flex items-center px-4">
        <a href="/">
          <HomeIcon sx={{ color: "white", height: 32, width: 32 }} />
        </a>
      </div>
      <div className="lg:hidden flex items-center justify-center px-4">
        <Button
          onClick={() => setOpen(true)}
          sx={{ "&:hover": { background: "#232b38" } }}
          endIcon={
            <MenuIcon sx={{ color: "#a7b1ac", width: 32, height: 32 }} />
          }
        ></Button>
      </div>

      <Drawer
        open={open}
        onClose={handleClose}
        anchor="right"
        PaperProps={{
          sx: {
            backgroundColor: "#232b38",
            opacity: 0.9,
            boxShadow: "none",
          },
        }}
      >
        
        <MenuList sx={{ minWidth: 250, paddingLeft: 3, fontSize:13, fontFamily:'arial', color:'#FFFFFF' }}>
        <div className="flex pt-4 items-center justify-between">
        <ListItem>Registration</ListItem>
          <Button
            onClick={handleClose}
            sx={{"&:hover": { background: "#232b38", opacity: 0.9, }}}
            endIcon={
              <CloseIcon
                sx={{ fontSize: 64, color:'#85bb23' }}
              />
            }
          ></Button>
        </div>
          <ListItem>Sponsers</ListItem>
          <ListItem>Speaking Opportunities</ListItem>
          <ListItem>Registration FAQs</ListItem>
          <ListItem>Multimedia</ListItem>
          <ListItem>News</ListItem>
          <ListItem>Contact Us</ListItem>
        </MenuList>
      </Drawer>

      <div className="hidden lg:flex items-center px-5 gap-4 relative">
        <a href="#" className="text-[#85bb23] text-[13px] font-[arial]">
          Group Discount
        </a>
        <a
          href="#"
          className="text-[#F8E367] border-4 border-[#F8E367] text-[13px] font-[arial] flex flex-col items-center px-4 py-2 leading-none"
        >
          Register Now! <span>Online</span>
        </a>
        <a href="#" className="text-[#85bb23] text-[13px] font-[arial]">
          Justify Your Attendance
        </a>
        <a
          href="#"
          className="text-[#F8E367] border border-[#F8E367] text-[13px] font-[arial] flex flex-col items-center px-4 py-1 leading-none"
        >
          {" "}
          Offline{" "}
          <span className="flex items-center gap-1">
            Registration Form <PictureAsPdfIcon />{" "}
          </span>
        </a>
        <div className="flex items-center justify-center gap-6 relative">
          <a
            href="#"
            className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial] relative"
          >
            In the News
            <span className="absolute top-[-12px] right-[-18px] bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-xl">
              New
            </span>
          </a>
          <a
            href="#"
            className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial] relative"
          >
            Photo Galleries
            <span className="absolute top-[-12px] right-[-18px] bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-xl">
              New
            </span>
          </a>
          <a
            href="#"
            className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial] relative"
          >
            Videos
            <span className="absolute top-[-12px] right-[-18px] bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-xl">
              New
            </span>
          </a>
          <a
            href="#"
            className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial]"
          >
            FAQs
          </a>
          <a
            href="#"
            className="text-[#a7b1ac] hover:text-[#85bb23] text-[13px] font-[arial]"
          >
            About NSSSC
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
