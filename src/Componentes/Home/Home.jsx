import Banner from "../Banner/Banner";
import {useLoaderData} from "react-router-dom"
import Phones from "../Phones/Phones";


const Home = () => {
    const phones = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <Phones phones={phones}></Phones>
        </div>
    );
};

export default Home;