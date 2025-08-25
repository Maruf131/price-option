
const Link = ({route}) => {
    return (
        <div>
            {
                <li className=" mr-10 mb-2 font-bold"><a href={route.path}>{route.name}</a></li>
            }
        </div>
    );
};

export default Link;