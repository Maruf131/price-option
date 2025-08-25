import Feature from "../feature/Feature";


const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-gray-600 font-extrabold text-center p-10 rounded-xl flex flex-col">
           <h2>
            <span className="text-6xl ">{price}</span>
            <span className="text-2xl">/Month</span>
            </h2>
            <h3 className="text-xl text-orange-400 underline">{name}</h3> 
            <div className="mt-10 text-start font-mono flex-grow">
                {
                    features.map(feature => <Feature feature ={feature}></Feature>)
                }
            </div>
             <button className=" mt-10 bg-orange-600 w-full py-2 rounded-lg hover:bg-orange-900">Buy Now</button>
        </div>
    );
};

export default PriceOption;