import Carousel from "../components/Carousel";
import OfferCard from "../components/OfferCard";

const Home = () => {
    return ( 
        <div className="home">
            <Carousel />
            <div className='explore-products' style={{margin: "35px"}}>
                <h6>ONGOING OFFERS</h6>
                <hr />
                <OfferCard />
            </div>
            <div className='about-us' style={{margin: "35px"}}>
                <h6>ABOUT US</h6>
                <hr />
                <span>WE ARE AN E-COMMERCE BRAND THAT PROVIDE OUR CUSTOMERS A SEAMLESS EXPERIENCE IN ONLINE SHOPPING. WE HAVE A WIDE RANGE OF PRODUCTS RANGING FROM FASHION TO ELECTRONICS. </span>
            </div>
        </div>
     );
}
 
export default Home;