import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <div className="bg-zinc-900 text-white py-2 lg:flex justify-between px-28 text-xs hidden">
        <div className="hidden lg:flex gap-3">
          <a href="">Jual Beli Online</a>
          <a href="">Official Store</a>
          <a href="">Produk Digital</a>
          <a href="">Tiket Kereta</a>
          <a href="">Tiket Pesawat</a>
          <a href="">Donasi</a>
          <a href="">Layanan Finansial</a>
          <a href="">Bantuan</a>
        </div>
        <div className="flex gap-5">
          <a href=""><i className="bx bxl-facebook"></i></a>
          <a href=""><i className="bx bxl-instagram"></i></a>
          <a href=""><i className="bx bxl-twitter"></i></a>
          <a href=""><i className="bx bxl-youtube"></i></a>
        </div>
      </div>
      
      <nav className="flex lg:flex-col justify-between  items-center lg:items-start bg-zinc-900 text-white lg:text-black lg:bg-white lg:border-b-slate-300 border-b-2 mb-14 px-5 lg:px-28 py-5">
        <button onClick={handleToggle} className="lg:hidden">
          <i className="bx bx-menu text-3xl"></i>
        </button>
        <p className="text-3xl lg:text-5xl lg:mb-8 text-green-600 font-bold">tokopedia</p>
        <button className="lg:hidden">
          <i className="bx bx-search text-3xl"></i>
        </button>
        <ul className="hidden lg:flex lg:w-full gap-2 justify-around">
          <li><Link className="font-bold " to="/" >Home</Link></li>
          <li><a className="font-bold " href="#" >Company</a></li>
          <li className="group relative">
            <a className="font-bold " href="#">Community</a><i className='bx bx-chevron-down text-xl'></i>
            <ul className="absolute w-max border drop-shadow-md origin-bottom z-40  bg-white p-5 hidden group-hover:block">
              <li><a href="#" className="hover:text-blue-500">Seller Tokopedia</a></li>
              <li><a href="#" className="hover:text-blue-500">Life at Tokopedia</a></li>
            </ul>
          </li>
          <li className="group relative">
            <a className="font-bold " href="#">Stories</a><i className='bx bx-chevron-down text-xl'></i>
            <ul className="absolute w-max border drop-shadow-md origin-bottom z-40  bg-white p-5 hidden group-hover:block">
              <li><a href="#" className="hover:text-blue-500">Behind The Scene</a></li>
              <li><a href="#" className="hover:text-blue-500">Innovation</a></li>
              <li><a href="#" className="hover:text-blue-500">Milestone</a></li>
              <li><a href="#" className="hover:text-blue-500">Operation</a></li>
              <li><a href="#" className="hover:text-blue-500">Product</a></li>
              <li><a href="#" className="hover:text-blue-500">Social Impact</a></li>
            </ul>
          </li>
          <li className="group relative">
            <a className="font-bold " href="#">Insight</a><i className='bx bx-chevron-down text-xl'></i>
            <ul className="absolute w-max border drop-shadow-md origin-bottom z-40  bg-white p-5 hidden group-hover:block">
              <li><a href="#" className="hover:text-blue-500">Fashion Wanita</a></li>
              <li><a href="#" className="hover:text-blue-500">Toys & Gamming</a></li>
              <li><a href="#" className="hover:text-blue-500">Komputer & Laptop</a></li>
              <li><a href="#" className="hover:text-blue-500">Otomotif</a></li>
              <li><a href="#" className="hover:text-blue-500">Edukasi</a></li>
              <li><a href="#" className="hover:text-blue-500">Elektronik</a></li>
              <li><a href="#" className="hover:text-blue-500">Kerja</a></li>
              <li><a href="#" className="hover:text-blue-500">Perawatan Hewan</a></li>
              <li><a href="#" className="hover:text-blue-500">Sport & Football</a></li>
              <li><a href="#" className="hover:text-blue-500">Salam</a></li>
              <li><a href="#" className="hover:text-blue-500">Travel dan Kuliner</a></li>
              <li><a href="#" className="hover:text-blue-500">Topik Seru Lainnya</a></li>
              <li><a href="#" className="hover:text-blue-500">Top List</a></li>
              <li><a href="#" className="hover:text-blue-500">Relationship</a></li>
              <li><a href="#" className="hover:text-blue-500">Kids and Parenting</a></li>
              <li><a href="#" className="hover:text-blue-500">Keuangan</a></li>
              <li><a href="#" className="hover:text-blue-500">Kesehatan</a></li>
              <li><a href="#" className="hover:text-blue-500">Kecantikan</a></li>
              <li><a href="#" className="hover:text-blue-500">Home and Living</a></li>
              <li><a href="#" className="hover:text-blue-500">Hobi dan Gaya Hidup</a></li>
              <li><a href="#" className="hover:text-blue-500">Gaya dan Fashion Pria</a></li>
              <li><a href="#" className="hover:text-blue-500">Gadget dan Teknologi</a></li>
              <li><a href="#" className="hover:text-blue-500">Entertainment</a></li>
            </ul>
          </li>
          <li><a className="font-bold " href="#">Top List</a></li>
          <li className="group relative">
            <a className="font-bold " href="#">NewsRoom</a><i className='bx bx-chevron-down text-xl'></i>
            <ul className="absolute w-max border drop-shadow-md origin-bottom z-40  bg-white p-5 hidden group-hover:block">
              <li><a href="#" className="hover:text-blue-500">Press Release</a></li>
              <li><a href="#" className="hover:text-blue-500">Siaran Pers</a></li>
            </ul>
          </li>
          <li className="group relative">
            <a className="font-bold " href="#">Kalkupedia</a><i className='bx bx-chevron-down text-xl'></i>
            <ul className="absolute w-max border drop-shadow-md origin-bottom z-40  bg-white p-5 hidden group-hover:block">
              <li><a href="#" className="hover:text-blue-500">Kalkulator BMI</a></li>
            </ul>
          </li>
        </ul>
      </nav>

      <aside className={`fixed overflow-y-auto lg:hidden top-0 left-0 w-full h-full bg-black/90 z-50 ${!isOpen && 'hidden'}`}>
        <button onClick={handleToggle}><i className="bx bx-x text-white fixed top-2 right-2 text-5xl z-50"></i></button>

        <ul className=" text-white my-10 ml-10">
          <li><Link className="font-bold " to="/" >Home</Link></li>
          <li><a className="font-bold " href="#" >Company</a></li>

          <li>
            <a className="font-bold " href="#">Community</a><i className='bx bx-chevron-down text-xl'></i>
            <ul className="py-1 px-4">
              <li><a href="#" className="hover:text-blue-500">Seller Tokopedia</a></li>
              <li><a href="#" className="hover:text-blue-500">Life at Tokopedia</a></li>
            </ul>
          </li>

          <li>
            <a className="font-bold " href="#">Stories</a><i className='bx bx-chevron-down text-xl'></i>
            <ul className="py-1 px-4">
              <li><a href="#" className="hover:text-blue-500">Behind The Scene</a></li>
              <li><a href="#" className="hover:text-blue-500">Innovation</a></li>
              <li><a href="#" className="hover:text-blue-500">Milestone</a></li>
              <li><a href="#" className="hover:text-blue-500">Operation</a></li>
              <li><a href="#" className="hover:text-blue-500">Product</a></li>
              <li><a href="#" className="hover:text-blue-500">Social Impact</a></li>
            </ul>
          </li>

          <li className="group relative">
            <a className="font-bold " href="#">Insight</a><i className='bx bx-chevron-down text-xl'></i>
            <ul className="py-1 px-4">
              <li><a href="#" className="hover:text-blue-500">Fashion Wanita</a></li>
              <li><a href="#" className="hover:text-blue-500">Toys & Gamming</a></li>
              <li><a href="#" className="hover:text-blue-500">Komputer & Laptop</a></li>
              <li><a href="#" className="hover:text-blue-500">Otomotif</a></li>
              <li><a href="#" className="hover:text-blue-500">Edukasi</a></li>
              <li><a href="#" className="hover:text-blue-500">Elektronik</a></li>
              <li><a href="#" className="hover:text-blue-500">Kerja</a></li>
              <li><a href="#" className="hover:text-blue-500">Perawatan Hewan</a></li>
              <li><a href="#" className="hover:text-blue-500">Sport & Football</a></li>
              <li><a href="#" className="hover:text-blue-500">Salam</a></li>
              <li><a href="#" className="hover:text-blue-500">Travel dan Kuliner</a></li>
              <li><a href="#" className="hover:text-blue-500">Topik Seru Lainnya</a></li>
              <li><a href="#" className="hover:text-blue-500">Top List</a></li>
              <li><a href="#" className="hover:text-blue-500">Relationship</a></li>
              <li><a href="#" className="hover:text-blue-500">Kids and Parenting</a></li>
              <li><a href="#" className="hover:text-blue-500">Keuangan</a></li>
              <li><a href="#" className="hover:text-blue-500">Kesehatan</a></li>
              <li><a href="#" className="hover:text-blue-500">Kecantikan</a></li>
              <li><a href="#" className="hover:text-blue-500">Home and Living</a></li>
              <li><a href="#" className="hover:text-blue-500">Hobi dan Gaya Hidup</a></li>
              <li><a href="#" className="hover:text-blue-500">Gaya dan Fashion Pria</a></li>
              <li><a href="#" className="hover:text-blue-500">Gadget dan Teknologi</a></li>
              <li><a href="#" className="hover:text-blue-500">Entertainment</a></li>
            </ul>
          </li>

          <li><a className="font-bold " href="#">Top List</a></li>

          <li className="group relative">
            <a className="font-bold " href="#">NewsRoom</a><i className='bx bx-chevron-down text-xl'></i>
            <ul className="py-1 px-4">
              <li><a href="#" className="hover:text-blue-500">Press Release</a></li>
              <li><a href="#" className="hover:text-blue-500">Siaran Pers</a></li>
            </ul>
          </li>

          <li className="group relative">
            <a className="font-bold " href="#">Kalkupedia</a><i className='bx bx-chevron-down text-xl'></i>
            <ul className="py-1 px-4">
              <li><a href="#" className="hover:text-blue-500">Kalkulator BMI</a></li>
            </ul>
          </li>
        </ul>

      </aside>
    </>
  );
};

export default Navbar;
