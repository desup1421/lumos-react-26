import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-300 text-gray-800 px-10 py-5 mt-10 flex lg:flex-row lg:justify-between flex-col">
      <p className="text-center"> &copy; 2009-2014, PT. Tokopedia</p>
      <div className="flex justify-center gap-3 text-xs sm:text-sm sm:gap-4 md:gap-5 ">
        <a href="">Tentang Kami</a>
        <a href="">Pusat Penjual</a>
        <a href="">Mobile Apps</a>
        <a href="">Karir</a>
        <a href="">Tokopedia Care</a>
        <a href="">B2B Digital</a>
      </div>
    </footer>
  );
};

export default Footer;
