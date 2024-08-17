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
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [filterOption, setFilterOption] = useState('')
  const [priceRange, setPriceRange] = useState("");

  const [products, setProducts] = useState<productsType>([] as productsType);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/products?page=${currentPage}&size=${itemPerPages}&name=${name}&brand=${brand}&category=${category}`
      );
      setProducts(data);
    };
    const getCount = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/productsCount?name=${name}&brand=${brand}&category=${category}`
      );
      setCount(data?.totalProduct);
    };
    getProducts();
    getCount();
  }, [currentPage, itemPerPages, name, brand,category]);

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
  console.log(name);
  
  return (
    <div>
      <div className="overflow-x-auto my-5 ">
        {/* search functionality start here==================== */}
        <div className="container px-2 w-fit mx-auto  flex items-center justify-center  gap-4     py-5">
          {/* search by country start ============================ */}
          {/* short  by price , date  start ============================ */}
          <select
            onChange={(e) => {
              setCategory("");
              setPriceRange(e.target.value);
            }}
            defaultValue="default"
            className="px-4 py-1  border cursor-pointer ring-1 ring-[#3F72AF] outline-none rounded-md "
            name="category"
            id="category"
          >
            <option disabled value="default">
              Short By price/date
            </option>
            {/* <option value={4}>Less then $4</option> */}
            <option value='price-desc'>Price: Low to High</option>
            <option value='price-asc'>Price: High to Low</option>
            <option value='date-desc'>Date: Newest first</option>
          </select>

          {/* short by price, date  end ============================ */}
          {/* search by country end ============================ */}
          
          {/* search by category start ============================ */}
          <select
              onChange={(e) => {
                setPriceRange('')
                setCategory(e.target.value)
              }}
              defaultValue={category}
              className="px-4 py-1  border cursor-pointer ring-1 ring-[#3F72AF] outline-none rounded-md "
              name="category"
              id="category"
            >
              <option disabled value={category}>
                Filter By Category
              </option>
              <option value="Food">Food</option>
              <option value="Electronics">Electronics</option>
              <option value="Cosmetics">Cosmetics</option>
            </select>
          {/* <div className="">
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <form
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onSubmit={(e: any) => {
                  e.preventDefault();
                  setCategory("");
                  setPriceRange("");
                  setBrand("");
                  const search = e.target.meals.value;
                  setName(search);
                  e.target.reset();
                }}
                className="relative"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-800"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="meals"
                  placeholder="Search here .."
                  className="py-[5px] pl-10 text-sm  focus:outline-none border cursor-pointer ring-1 ring-[#3F72AF]   outline-none rounded-md"
                />
              </form>
            </fieldset>
          </div> */}
          {/* search by category end ============================ */}
          {/* search by Brand start ============================ */}
          <select
              onChange={(e) => {
                setPriceRange('')
                setCategory("");
                setPriceRange("");
                const search = e.target.value;
                setName("");
                setBrand(search);
               
              
              }}
              defaultValue={brand}
              className="px-4 py-1  border cursor-pointer ring-1 ring-[#3F72AF] outline-none rounded-md "
              name="brand"
              id="brand"
            >
              <option disabled value={brand}>
                Filter By Brand
              </option>
              <option value="Apple">Apple</option>
              <option value="Samsung">Samsung</option>
              <option value="Sony">Sony</option>
              <option value="Dell">Dell</option>
              <option value="LG">LG</option>
              <option value="HerbalCare">HerbalCare</option>
              <option value="GreenFarm">GreenFarm</option>
            </select>
          {/* <div className="">
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setCategory("");
                  setPriceRange("");
                  const search = e.target.meals.value;
                  setSearch(search);
                  e.target.reset();
                }}
                className="relative"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-800"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="meals"
                  placeholder="Search here .."
                  className="py-[5px] pl-10 text-sm  focus:outline-none border cursor-pointer ring-1 ring-[#3F72AF]   outline-none rounded-md"
                />
              </form>
            </fieldset>
          </div> */}
          {/* search by Brand end ============================ */}
          {/* reset button start */}
          <div className="">
            <button
              onClick={() => {
                setCategory("");
                setPriceRange("");
                setBrand('')
                setName("");
              }}
              className="px-4 py-1 bg-[#3F72AF] text-white rounded-md hover:bg-[#4a83c9] duration-300 font-medium"
            >
              Reset
            </button>
          </div>
          {/* reset button end */}
          {/* search by Brand start ============================ */}
          <div className="">
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <form
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onSubmit={(e: any) => {
                  e.preventDefault();
                  setCategory("");
                  setPriceRange("");
                  const search = e.target.meals.value;
                  setName("");
                  setBrand(search);
                  e.target.reset();
                }}
                className="relative"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-800"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="meals"
                  placeholder="Search here .."
                  className="py-[5px] pl-10 text-sm  focus:outline-none border cursor-pointer ring-1 ring-[#3F72AF]   outline-none rounded-md"
                />
              </form>
            </fieldset>
          </div>
          {/* search by Brand end ============================ */}
          {/* search by name start ============================ */}
          <div className="">
            <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <form
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onSubmit={(e: any) => {
                  e.preventDefault();
                  setCategory("");
                  setPriceRange("");
                  const search = e.target.meals.value;
                  setBrand("");
                  setName(search);
                  e.target.reset();
                }}
                className="relative"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="submit"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 dark:text-gray-800"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="meals"
                  placeholder="Search here .."
                  className="py-[5px] pl-10 text-sm  focus:outline-none border cursor-pointer ring-1 ring-[#3F72AF]   outline-none rounded-md"
                />
              </form>
            </fieldset>
          </div>
          {/* search by name end ============================ */}
        </div>
        {/* search functionality end here ============================ */}
      </div>
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
