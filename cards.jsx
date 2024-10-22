import './cards.css'

const Card = ({ image, name, age, location }) => {
    return (
    <div>
        <div className="first">
        <img src={image} alt={name}/>
        <h3>{name}</h3>
        <p>{age}</p>
        <p>{location}</p>
      </div>
    </div>
      
    );
  };
  
  export default Card