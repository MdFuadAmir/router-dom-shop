import { useEffect, useState } from "react";
import PhoneCard from "../PhoneCard/PhoneCard";


const Favorites = () => {
  const [favorites, setfavorites] = useState([]);
  const [noFound, setNoFound] = useState(false);

  useEffect(()=>{
    const favoriteItems = JSON.parse(localStorage.getItem('test'));
    if(favoriteItems){
      setfavorites(favoriteItems);
    }
    else{
      setNoFound("No Data Found");
    }
  },[])
  
    return (
        <div>
          {
            noFound ? <p className="h-[80vh] flex justify-center items-center">{noFound}</p> : <div>
              {
                favorites.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
              }

            </div>
          } 
        </div>
    );
};

export default Favorites;