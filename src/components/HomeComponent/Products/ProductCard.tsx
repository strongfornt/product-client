

import StarRatings from 'react-star-ratings';
import { getTime } from "./getTime";

interface productsType  {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  ratings: number;
  createdAt: string;
};
export default function ProductCard({ product }: { product: productsType }) {
  const { name, image, brand, category, ratings, price, createdAt,description } =
    product || {};
  
  const shortTime = getTime(createdAt);
  return (
    <>
      <div className=" overflow-hidden  rounded-lg shadow-lg bg-[#F9F7F7]">
        <div className="overflow-hidden">
          <div
            style={{ backgroundImage: `url(${image})` }}
            className="object-cover bg-cover w-full h-48 rounded-t-lg hover:scale-105 transition-all duration-300  "
          >
            <div className="bg-black/25 h-full">
              <h1 className="bg-[#4b5664] px-2 py-1 text-white w-fit translate-x-3 translate-y-3 font-mono rounded-md">
                {brand}
              </h1>
            </div>
          </div>
        </div>
        <div className=" ">
          <div className=" px-1 my-1 bg-[#F9F7F7]">
        
          <StarRatings
          rating={ratings}
          starRatedColor="#ffd700"
          starEmptyColor="#e4e5e9"
          starDimension="20px"
          starSpacing="2px"
          numberOfStars={5} // specify the number of stars
        />
            <h1 className=" text-lg lg:text-lg font-bold text-[#4b5664]  ">
              {name}
            </h1>
            <h5 className="text-xs  text-[#4b5664] " >
              Posted: {shortTime} ago
            </h5>

            <div className="flex items-center justify-between    bg-[#F9F7F7]">
              <h1 className="text-lg font-serif text-teal-700">{category}</h1>
              <h1 className="text-lg font-mono text-[#4B5664]">${price}</h1>
            </div>
            <p className="text-[#4b5664] mb-3 text-sm"> <span className="font-semibold">Description: </span>{description}</p>
          </div>
        </div>

        {/* <div className="flex items-center justify-between px-1  mb-2 bg-[#F9F7F7]">
          <Link
            to={`/login`}
            className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-teal-400 rounded hover:bg-gray-200 hover:text-teal-500 focus:bg-gray-400 focus:outline-none"
          >
            Details
          </Link>
        </div> */}
      </div>
    </>
  );
}
