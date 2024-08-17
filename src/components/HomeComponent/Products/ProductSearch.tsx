
import {
   
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
   
    ModalHeader,
    ModalOverlay,
    useDisclosure,
  } from "@chakra-ui/react";
  import { Dispatch, FormEvent, SetStateAction, useRef } from "react";


type ProductSearch = {
  setName: Dispatch<SetStateAction<string>>;
  setBrand: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<string>>;
  setMinPrice: Dispatch<SetStateAction<number | string>>;
  setMaxPrice: Dispatch<SetStateAction<number | string>>;
  setSortBy: Dispatch<SetStateAction<string>>;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  brand: string;
  category: string;
  sortBy: string;
};

export default function ProductSearch({
  setName,
  setBrand,
  setCategory,
  setMinPrice,
  setMaxPrice,
  setSortBy,
  setCurrentPage,
  brand,
  category,
  sortBy,

}: ProductSearch) {

    const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
    
  const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const minPrice = form.get('min') as number | string  ;
        const maxPrice = form.get('max') as number | string  ;
        setMaxPrice(maxPrice)
        setMinPrice(minPrice)  
        setCurrentPage(1)
        onClose()
        
  }
  return (
    <>
      {/* search functionality start here==================== */}
      <div className="overflow-x-auto my-5 ">
        <div className="container px-2 w-fit mx-auto  flex items-center justify-center  gap-4     py-5">
          {/* search by country start ============================ */}
          {/* short  by price , date  start ============================ */}
          <select
            onChange={(e) => {
                setCategory("");
                setBrand('')
                setMinPrice('')
                setMaxPrice('')
                setName('')
              setSortBy(e.target.value);
            }}
            defaultValue={sortBy}
            className="px-4 py-1  border cursor-pointer ring-1 ring-[#3F72AF] outline-none rounded-md "
            name="category"
            id="category"
          >
            <option disabled value={sortBy}>
              Short By price/date
            </option>
            {/* <option value={4}>Less then $4</option> */}
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="date-desc">Date: Newest first</option>
          </select>

          {/* short by price, date  end ============================ */}
          {/* search by country end ============================ */}

          {/* search by category start ============================ */}
          <select
            onChange={(e) => {
              const search = e.target.value;
              setCategory(search);
              setCurrentPage(1)
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

          {/* search by category end ============================ */}
             {/* reset button start */}
             <div className="">
            <button
              onClick={() => {
                setCategory("");
                setMinPrice('');
                setMaxPrice('');
                setBrand("");
                setName("");
                setCurrentPage(1)
                setSortBy("");
              }}
              className="px-4 py-1 bg-teal-500 text-white rounded-md hover:bg-teal-400 duration-300 font-medium"
            >
              Reset
            </button>
          </div>
          {/* reset button end */}
          {/* search by Brand start ============================ */}
          <select
            onChange={(e) => {
              const search = e.target.value;
              setBrand(search);
              setCurrentPage(1)
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
         
          {/* search by Price start ============================ */}
         
          <div className=" min-w-fit">

            <button 
            onClick={onOpen}
            className="border w-full py-1 font-normal md:font-medium px-2 rounded-md border-teal-500  hover:bg-teal-500  
            text-black/75 duration-300 hover:text-white " >
                Search by Price Range
            </button>
            {/* <fieldset className="w-full space-y-1 dark:text-gray-800">
              <label htmlFor="Search" className="hidden">
                Search
              </label>
              <form
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onSubmit={(e: any) => {
                  e.preventDefault();
                  setCategory("");
                  setMinPrice(0);
                  setMaxPrice(0);
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
            </fieldset> */}
          </div>
          {/* search by Price end ============================ */}
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
                  const search = e.target.meals.value;
                  setCategory("");
                  setBrand('')
                  setMinPrice('')
                  setMaxPrice('')
                 setSortBy('')
                  setName(search);
                  setCurrentPage(1)
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
                  placeholder="Search by name"
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

      {/* modal start ===================== */}
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search by min,max and min-max price</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          
            <form onSubmit={handleFormSubmit} className="space-y-2" >
                <div className="flex flex-col">
                    <label htmlFor="">Min-Price</label>
                    <input
                  type="number"
                  name="min"
                  placeholder="minimum price.."
                  className="py-[5px] pl-3 text-sm  focus:outline-none border cursor-pointer ring-1 ring-[#3F72AF]   outline-none rounded-md"
                />
                </div> 
                <div className="flex flex-col" >
                    <label htmlFor="">Max-Price</label>
                    <input
                  type="number"
                  name="max"
                  placeholder="maximum price.."
                  className="py-[5px] pl-3 text-sm  focus:outline-none border cursor-pointer ring-1 ring-[#3F72AF]   outline-none rounded-md"
                />
                </div>

                    <button
                        type="submit"
                        
                    className="py-1 px-3 rounded-md duration-300 font-medium bg-teal-500 hover:bg-teal-400 text-white" >
                        Search
                    </button>
            </form>
          </ModalBody>

         
        </ModalContent>
      </Modal>
      {/* modal end ===================== */}
    </>
  );
}
