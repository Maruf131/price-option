import { HiBadgeCheck } from "react-icons/hi";
const Feature = ({feature}) => {
    return (
        <div>
            <h3 className="text-xl flex items-center gap-3 "><HiBadgeCheck className="text-orange-600"></HiBadgeCheck>{feature}</h3>
           
        </div>
    );
};

export default Feature;