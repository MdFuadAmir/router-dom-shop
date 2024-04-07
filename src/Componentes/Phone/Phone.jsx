import { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

const Phone = () => {
    const {id} = useParams();
    const phones = useLoaderData();
    const [phone,setPhone] = useState([]);
    useEffect(()=>{
        const findPhones = phones?.find(phone => phone.id == id);
        setPhone(findPhones)
    },[id,phones])

    const {image,rating,brand_name,phone_name,price} = phone; 
    
    return (
        <div className='my-10'>
            <div className='w-full h-[30vh] mb-6 bg-lime-200'>
                <h2 className='mx-auto w-fit text-4xl'>Phone Details</h2>
            </div>

            <div className="card card-side bg-base-100 shadow-xl w-2/3 mx-auto">
  <figure><img className='h-[60vh]' src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">Name: {phone_name}</h2>
    <h4>Brand: {brand_name}</h4>
    <h4>Price: {price}</h4>
    <h4>Rating: {rating}</h4>
    <div className="card-actions justify-end">
      <button className="btn btn-outline w-full">add to Favorite</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Phone;