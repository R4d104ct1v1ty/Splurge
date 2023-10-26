import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {

    const [data, setData] = useState(null);
    const [category, setCategory] = useState("All");
    const [displayCat, setDisplayCat] = useState("ALL PRODUCTS");
    const [prods, setProds] = useState(null);
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                setData(json);
                console.log(json);
                setProds(json);
            })
            .catch((error) => {
                console.log(error.message);
            })
    },[])

    const changeCat = (cat) => {
        setDisplayCat(cat);
        if(cat != "ALL PRODUCTS"){
            setProds(data.filter(d => d.category == cat.toLowerCase()));
        }
        else{
            setProds(data);
        }
    }
    

    if(!prods){
        return (
            <div>Loading...</div>
        )
    }
    
    return ( 
        <div className='product-page'>
            <h6 className='explore-products'>EXPLORE</h6>
            <hr />
            <div className='category-row' style={{display: 'flex', alignItems: "center"}}>
                <div className="dropdown" style={{width: "fit-content"}}>
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        CATEGORIES
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" onClick={(ev) => {changeCat("ALL PRODUCTS")}}>ALL PRODUCTS</a>
                        <a className="dropdown-item" onClick={(ev) => {changeCat("MEN'S CLOTHING")}}>MEN'S CLOTHING</a>
                        <a className="dropdown-item" onClick={(ev) => {changeCat("WOMEN'S CLOTHING")}}>WOMEN'S CLOTHING</a>
                        <a className="dropdown-item" onClick={(ev) => {changeCat("JEWELERY")}}>JEWELERY</a>
                        <a className="dropdown-item" onClick={(ev) => {changeCat("ELECTRONICS")}}>ELECTRONICS</a>
                    </div>
                </div>
                <div className='category-title' style={{width: "fit-content", marginLeft: "2%"}}>
                    <span style={{fontSize: "30px"}}>{displayCat}</span>
                </div>
            </div>
            
            <div className='product-list' style={{justifyContent: "center"}}>
                {prods.map(d => <div className='product-item'><ProductCard price={d.price} title={d.title} category={d.category} img={d.image}/></div>)}
            </div>
        </div>
        
     );
}
 
export default Products;