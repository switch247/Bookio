"use client";
import { AiFillCloseCircle, AiOutlineClose } from 'react-icons/ai';
import { BsGit } from 'react-icons/bs';
import { TbBrandCss3 } from 'react-icons/tb';
import { BiLogoFlask } from 'react-icons/bi';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import React, { useState } from 'react';
import Link from 'next/link';
export function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [search_term, setSearchTerm] = useState<string>("")
  const [category, setCategory] = useState<string>('');
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // console.log("clicked")
  };



  return (
    <>


      <section className="hidden head">
        <div className="container flex1">
          <div className="box flex">
            <p>MEMBERSHIP</p>
            <p>COUPONS & DEALS</p>
            <p>BESTSELLER</p>
          </div>
          <div className="box flex">
            <p> <i className="far fa-user"></i> MY ACCOUNT</p>
            <p> <i className="far fa-heart"></i> WISHLIST</p>
          </div>
        </div>
      </section>


      <section className="search ">

        <div className=" flex1 flex items-center search-bar-container justify-evenly">
          <div className="logo">
            <img src="/image/logo.png" alt="" />
          </div>
          <div className="box flex justify-center flex-wrap sm:flex-reverse">
            <select  onChange={(e) => setCategory(e.target.value && `category=${e.target.value}&`)}>
              <option value="">Category</option>
              <option value="All">All</option>
              <option value="Drama">Drama</option>
              <option>Fantacy</option>
              <option>Romance</option>
              <option>Comedy</option>
            </select>
            <div className='' >
              <input onKeyDown={(event) => {
                if(event.keyCode !== 13) return;
                const url = `/search?${search_term}${category}`;
                window.location.href=url;
              }} required onChange={(e) => setSearchTerm(`title=${e.target.value}&`)} placeholder="Search Book" />

              {(search_term !== "" || category !== "") ? (
                <Link className="" href={`/search?${search_term}${category}`} passHref>
                  <i className="fas fa-search"></i>
                </Link>
              ) :
                <i className="fas fa-search"></i>}



            </div>

          </div>
          {/* <div className="address">
            <i className="fas fa-map-marker-alt"></i>
            <i className="far fa-shopping-bag"></i>
          </div> */}
        </div>
      </section>



      <header>
        <div className="container navbar flex1">
          {/* <div className="select w-fit p-0">
            <select className='bg-transparent w-full' >
              <option className='bg-transparent'>ALL DEPARTMENT</option>
            </select>
          </div> */}
          <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="/" className='hover:text-red-500'>Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/wishlist">Bookmarks</a></li>
              <li><a href="#">Support</a></li>
              {/* <li><a href="#">Community</a></li> */}
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="menu-trigger" onClick={toggleMenu}>
            <button>
              {isMenuOpen ?
                <AiOutlineClose />
                :
                <FaBars />
              }

            </button></div>

        </div>
      </header>
    </>


  )
}
