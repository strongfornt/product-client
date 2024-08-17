import { Helmet } from "react-helmet-async";
import Banner from "../../components/HomeComponent/Banner/Banner";
import Products from "../../components/HomeComponent/Products/Products";


export default function Home() {
  
  return (
    <>
      <Helmet>ProdX | Products</Helmet>
      {/* banner section start  */}
      <section>
        <Banner />
      </section>
      
      {/* banner section end  */}
      {/* products section start */}
      <section className="my-12 px-2    md:px-4 lg:px-8" >
        <h1 className="font-semibold text-center text-2xl text-black/85" >Discover Your <span className="text-teal-500" >Perfect Product</span> </h1>
        <p className="text-center mt-1 font-medium text-black/85  " >Browse, Filter, and Find Exactly What You Need.</p>
        <Products />
      </section>
      {/* products section end */}
    </>
  );
}
