import './product.css'

const Product = ({ image, name, price, description }) => {
    return (
    <div>
        <div className="second">
        <img src={image} alt={name}/>
        <p><span>Name: </span>{name}</p>
        <p><span>Price: </span>{price}</p>
        <p><span>Description: </span>{description}</p>
      </div>
    </div>
      
    );
  };

  export default Product