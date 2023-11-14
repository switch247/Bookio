// "use client";
import { AiOutlineMail } from 'react-icons/ai';
import { Carousel } from "react-responsive-carousel";
import { items } from "../../public/Items.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function HeroCarousel() {
    const { responsive } = items;
    return (
        <>
            <section className="home max-w-100vw w-full">

                <div className="owl-carousel owl-theme max-w-100vw w-full">
                    <Carousel
                        showThumbs={false}

                        showArrows={true}
                        autoPlay={true}
                        emulateTouch={true}
                        showIndicators={true}
                        infiniteLoop={true}
                        dynamicHeight={false}

                        className='owl-carousel owl-theme max-w-100vw w-full'
                    >
                        {responsive.map((item) => (
                            <div key={item.id} style={{ background: "gey" }}className="item max-w-100vw w-full">
                                {/* <div className="image">
                                    <img src={item.imageUrl} alt="slides" />
                                </div> */}
                                <img className="hidden p-3 image object-cover" src={item.imageUrl} alt="slides" />

                                <div className="text ">
                                    <h1 style={{ color: "black" }}><span></span>{item.title}</h1>
                                    <p style={{ color: "black" }}>{item.text}</p>
                                    <button>MEET OUR BESTSELLER</button>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* 
<div className="item ">
<div className="image">
  <img src="image/slide3.png" alt=""/>
</div>
<div className="text">
  <h1>Biggest <span>bookstore </span>in Europe </h1>
  <p> Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  <button>MEET OUR BESTSELLER</button>
</div>
</div> */}


            </section >
        </>
    )
}