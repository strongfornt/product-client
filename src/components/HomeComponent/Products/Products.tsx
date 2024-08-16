import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

type productsType = {
  _id: string ,
  name: string,
  image: string,
  description: string,
  price: number,
  category: string,
  brand: string,
  rating: number,
  createdAt: string

}[]

export default function Products() {

  const [products, setProducts] = useState<productsType>([] as productsType);

  useEffect(()=> {
    const getProducts = async () => {
      const {data} = await axios.get(`http://localhost:5000/products`)
      setProducts(data)
    }
    getProducts()
  },[])

  
  


  return (
    <div>
      {/* products card will appear the products card component ============ */}
      <section className="grid md:grid-cols-3   xl:grid-cols-4 gap-4" >
    {
      products?.map((product,idx) => (
        <ProductCard key={idx} product={product} />

      ))
    }
      </section>
       {/* products card will appear the products card component end============ */}
    </div>
  )
}
