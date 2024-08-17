import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Pagination from "./Pagination";
import ProductSearch from "./ProductSearch";

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

// interface searchOption {
//   name: string | '',
//   brand

// }

export default function Products() {
  const itemPerPages = 8;
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [minPrice, setMinPrice] = useState<string | number>('');
  const [maxPrice, setMaxPrice] = useState<string | number>('');
  const [name, setName] = useState("");
  const [products, setProducts] = useState<productsType>([] as productsType);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(
        `https://product-server-flax.vercel.app/products?page=${currentPage}&size=${itemPerPages}&name=${name}&brand=${brand}&category=${category}&sortBy=${sortBy}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      setProducts(data);
    };
    const getCount = async () => {
      const { data } = await axios.get(
        `https://product-server-flax.vercel.app/productsCount?name=${name}&brand=${brand}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      setCount(data?.totalProduct);
    };
    getProducts();
    getCount();
  }, [currentPage, itemPerPages, name, brand, category, sortBy,minPrice,maxPrice]);
console.log(products);

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
      <ProductSearch setName={setName} setBrand={setBrand} brand={brand} setCategory={setCategory} category={category} setSortBy={setSortBy} sortBy={sortBy} setMaxPrice={setMaxPrice} setMinPrice={setMinPrice} setCurrentPage={setCurrentPage}  />
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
