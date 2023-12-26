"use client";
// import Script from 'next/script'
import OwlCarousel from 'react-owl-carousel';

import React, { useEffect, useRef } from 'react';
export function Testimony() {
    const contRef = useRef<HTMLDivElement>(null);
    const scroll = (e: string) => {
        if (contRef.current) {
            e === 'l' ?
                contRef.current.scrollBy(-300, 0)
                // console.log("left")
                :
                contRef.current.scrollBy(300, 0)
            // console.log("right")
        }
    }
    const scrollLeft = () => {
        if (contRef.current) 
         contRef.current.scrollLeft -= 200;

      };

    
      const scrollRight = () => {
        if (contRef.current) 
        contRef.current.scrollLeft += 200;
      };

    return (
        <>
            <section className="trending4 clinet top btop">
                <div className="container relative">
                    <h1>Happy Client Say !</h1>
                    {/* <div >
                        <i onClick={() => { scroll('r') }} className="owl-next z-10 " >right</i>
                        <i onClick={() => { scroll('l') }} className="owl-prev z-10">left</i>
                    </div> */}
                    <div className="content mtop flex items-center flex-grow-1">
                        <button
                            className="p-2 bg-gray-200 rounded-full mr-2"
                            onClick={scrollLeft}
                        >
                            &lt;
                        </button>
                        <div ref={contRef} className="owl-carousel owl-carousel3 owl-theme flex  overflow-x-auto gap-2">
                            {/* <OwlCarousel items={3}  className="owl-theme"  loop  nav  margin={8} >  */}
                            <div className="box">
                                <div className="flex1">
                                    <div className="rates">
                                        <div className="rate">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h2>Great quality!</h2>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="flex">
                                    <div className="img">
                                        <img src="image/clinet1.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>ANN SMITH</h4>
                                        <label>Photographer</label>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="flex1">
                                    <div className="rates">
                                        <div className="rate">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h2>Great quality!</h2>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="flex">
                                    <div className="img">
                                        <img src="image/clinet2.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>ANN SMITH</h4>
                                        <label>Photographer</label>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="flex1">
                                    <div className="rates">
                                        <div className="rate">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h2>Great quality!</h2>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="flex">
                                    <div className="img">
                                        <img src="image/clinet3.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>ANN SMITH</h4>
                                        <label>Photographer</label>
                                    </div>
                                </div>
                            </div>
                            <div className="box">
                                <div className="flex1">
                                    <div className="rates">
                                        <div className="rate">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </div>
                                        <h2>Great quality!</h2>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-quote-right"></i>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <div className="flex">
                                    <div className="img">
                                        <img src="image/clinet4.jpg" alt="" />
                                    </div>
                                    <div className="text">
                                        <h4>ANN SMITH</h4>
                                        <label>Photographer</label>
                                    </div>
                                </div>

                            </div>
                            {/* </OwlCarousel> */}
                        </div>
                        <button
                            className="p-2 bg-gray-200 rounded-full ml-2"
                            onClick={scrollRight}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </section>





            <section className="wrapper2 mtop">
                <div className="container grid3">
                    <div className="box flex1">
                        <div className="img">
                            <img src="https://img.icons8.com/external-justicon-lineal-justicon/64/F1592B/external-book-elearning-and-education-justicon-lineal-justicon.png" />
                        </div>
                        <div className="text">
                            <h3>Bookio Press</h3>
                            <span>Publish your book with B&N</span>
                            <a href="#">Learn more</a>
                        </div>
                    </div>
                    <div className="box flex1">
                        <div className="img">
                            <img src="https://img.icons8.com/ios/50/F1592B/cash-in-hand.png" />
                        </div>
                        <div className="text">
                            <h3>Bookio Press</h3>
                            <span>Publish your book with B&N</span>
                            <a href="#">Learn more</a>
                        </div>
                    </div>
                    <div className="box flex1">
                        <div className="img">
                            <img src="https://img.icons8.com/ios/50/F1592B/hand-with-smartphone.png" />
                        </div>
                        <div className="text">
                            <h3>Bookio Press</h3>
                            <span>Publish your book with B&N</span>
                            <a href="#">Learn more</a>
                        </div>
                    </div>
                    <div className="box flex1">
                        <div className="img">
                            <img src="https://img.icons8.com/ios/50/F1592B/gift.png" />
                        </div>
                        <div className="text">
                            <h3>Bookio Press</h3>
                            <span>Publish your book with B&N</span>
                            <a href="#">Learn more</a>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}
