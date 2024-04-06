import PhoneCard from "../PhoneCard/PhoneCard";
import PropTypes from 'prop-types';

const Phones = ({phones}) => {

    return (
        <div className="my-12 p-2">
            <h2 className="text-3xl w-fit mx-auto font-bold">Our Phones Collections</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-6">
                {
                    phones?.map(phone => <PhoneCard key={phone.id} phone={phone}></PhoneCard>)
                }

            </div>
            
        </div>
    );
};

export default Phones;
Phones.propTypes ={
    phones: PropTypes.object.isRequired
}