import {useEffect } from 'react';

const Products = () => {
    
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => console.log(json))
            .catch((error) => {
                console.log(error.message);
            })
    },[])
    
    return ( 
        <div>Hello</div>
     );
}
 
export default Products;