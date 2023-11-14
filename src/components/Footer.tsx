
import { AiOutlineMail } from 'react-icons/ai';
import { getAllFavorites } from "@/lib/fav"
export function Footer() {

    async function test() {
        const favs = await getAllFavorites();
        console.log(favs)
        console.log("test")
    };

    // test();


    return (
        <>
        
            <footer className='btop'>
                <div className="container grid grid3 top  pl-">
                    <div className="box">
                        <h3>NEED HELP?</h3>
                        <ul>
                            <li>Help Center</li>
                            <li>Shipping FAQs</li>
                            <li>Pick up in Store</li>
                            <li>Order Status</li>
                            <li>Product Recalls</li>
                            <li>Corrections & Updates</li>
                            <li>Gift Cards</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>ABOUT US</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Track Your Order</li>
                            <li>Returns Policy</li>
                            <li>Delivery Information</li>
                            <li>Loyalty Program</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>CATEGORIES</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>RX Prescription</li>
                            <li>Scholarship Program</li>
                            <li>Brand Directory</li>
                            <li>E-Catalogs/Requests</li>
                            <li>Order Form</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>OUR NEWSLETTER </h3>
                        <li>Sign up for our latest news and offers:</li>
                        <div className="input flex1">
                            <input type=" text" placeholder="Your email address..." />
                            <i className="far fa-envelope">
                                {/* <AiOutlineMail/> */}
                            </i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
