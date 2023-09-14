/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const SearchCard = ({ id , title , base, order, img }) => {
  return (
    <Link to={`/s/${id}`}>
      <div className="m-5 mt-28   flex justify-between card gap-[50px]">
        <div>
          <img src={img} alt="" className="w-[300px] rounded-lg" />
        </div>
      <div>
          <h2 className="text-xl text-black mt-2">{title}</h2>
        <div className="flex items-center mt-3 top-2 right-4">
          <span className="w-[45px]  text-xl  rounded-full p-2  hover:transition">
            {order}
          </span>
        </div>
        {/* <span className="text-sm text-blue-800">{base}</span> */}
      </div>
      </div>
    </Link>
  );
};

export default SearchCard;