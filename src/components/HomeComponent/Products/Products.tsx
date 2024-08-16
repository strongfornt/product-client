import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

type productsType = {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  ratings: number;
  createdAt: string;
}[];

export default function Products() {
  const [itemPerPages, setItemPerPages] = useState(4);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [products, setProducts] = useState<productsType>([] as productsType);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/products?page=${currentPage}&size=${itemPerPages}`
      );
      setProducts(data);
    };
    const getCount = async () => {
      const { data } = await axios.get(`http://localhost:5000/productsCount`);
      console.log(data?.totalProduct);
      
      setCount(data?.totalProduct);
    };
    getProducts();
    getCount();
  }, [currentPage, itemPerPages]);

  //count the total documents ============

  const numberOfPages = Math.ceil(count / itemPerPages);
  const paginationCount = [...Array(numberOfPages).keys()].map((c) => c + 1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < paginationCount?.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {/* products card will appear the products card component ============ */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3   xl:grid-cols-4 gap-4">
        {products?.map((product, idx) => (
          <ProductCard key={idx} product={product} />
        ))}
      </section>
      {/* products card will appear the products card component end============ */}

      <div className="mb-6 mt-6 flex items-center  justify-center">
        <nav
          aria-label="Pagination"
          className="inline-flex -space-x-px bg-gray-50  rounded-md shadow-sm"
        >
          <button
            onClick={handlePrev}
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-l-md dark:border-gray-300"
          >
            <span className="sr-only">Previous</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-black"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {paginationCount?.map((c, i) => (
            <button
              key={i}
              type="button"
              aria-current="page"
              className={`inline-flex items-center px-4 py-2  text-sm font-semibold border ${
                currentPage === c ? "bg-teal-400 text-white" : "text-black"
              } 
           dark:border-gray-300`}
              onClick={() => setCurrentPage(c)}
            >
              {c}
            </button>
          ))}

          <button
            onClick={handleNext}
            type="button"
            className="inline-flex items-center px-2 py-2 text-sm font-semibold border rounded-r-md dark:border-gray-300"
          >
            <span className="sr-only">Next</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-black "
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
}
