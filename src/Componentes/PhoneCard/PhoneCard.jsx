import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PhoneCard = ({phone}) => {
    const {id,phone_name,brand_name,price,rating,image} = phone || {};
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className="h-60 w-full" src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-xl font-bold">Name: {phone_name}</h2>
    <h2 className="text-lg">Brand: {brand_name}</h2>
    <h2 className="text-lg">Price: {price}$</h2>
    <h2 className="text-lg">Rating: {rating}</h2>
    
    <div className="">
        <Link to={`/phones/${id}`}>
            <button className='btn btn-success btn-outline w-full'>See Details</button>
        </Link>
    </div>
  </div>
</div>
        
    );
};

export default PhoneCard;

PhoneCard.propTypes ={
    phone: PropTypes.object.isRequired
}