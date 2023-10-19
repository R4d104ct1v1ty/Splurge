import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {

    const [data, setData] = useState(null);
    const [category, setCategory] = useState("All");
    const [displayCat, setDisplayCat] = useState("All Products");
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setData(json);
                console.log(json)
            })
            .catch((error) => {
                console.log(error.message);
            })
    },[])

    if(!data){
        return (
            <div>Loading...</div>
        )
    }
    
    return ( 
        <div className='product-page'>
            <h6 className='explore-products'>EXPLORE</h6>
            <hr />
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    CATEGORIES
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">MEN'S CLOTHING</a>
                    <a className="dropdown-item" href="#">WOMEN'S CLOTHING</a>
                    <a className="dropdown-item" href="#">JEWELERY</a>
                    <a className="dropdown-item" href="#">ELECTRONICS</a>
                </div>
            </div>
            <div className='product-list'>
                {data.map(d => <div className='product-item'><ProductCard price={d.price} title={d.title} category={d.category} img={d.image}/></div>)}
            </div>
        </div>
        
     );
}
 
export default Products;