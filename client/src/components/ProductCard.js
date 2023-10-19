
const ProductCard = ({price, title, category, img}) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img className="card-img-top" src={img} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{category}</p>
                <p className="card-text">Price: ${price}</p>
                <a href="#" className="btn btn-primary">Details</a>
            </div>
        </div>
    );
} 

export default ProductCard;