import { useState, useEffect } from 'react';

const Products = () => {

    const [data, setData] = useState(null);
    const [category, setCategory] = useState("All");
    const [displayCat, setDisplayCat] = useState("All Products");
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setData(json))
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
        </div>
        
     );
}
 
export default Products;