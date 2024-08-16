import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Pagination from "./Pagination";

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
  const itemPerPages = 4;
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
        {/* pagination component start ================ */}
        
        {/* pagination component end ================ */}
      <Pagination
        handlePrev={handlePrev}
        handleNext={handleNext}
        paginationCount={paginationCount}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
