import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
// import 'swiper/css/navigation';
import "./style.css";
import { Pagination, Autoplay, Navigation, Keyboard } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
import { NavigationOptions, PaginationOptions } from "swiper/types";
// import slide1 from './../../assets/house/VacationRentals2.jpg'
export default function Banner() {
  return (
    <>
      <Swiper
        style={
          {
            "--swiper-navigation-color": "#2DD4BF",
            "--swiper-navigation-size": "35px", // Adjust navigation size
          } as React.CSSProperties
        }
        navigation={{
          clickable: true,
        } as NavigationOptions  }
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
        } as PaginationOptions }
        keyboard={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={500}
        modules={[Pagination, Autoplay, Navigation, Keyboard]}
        className=" w-full"
      >
        <SwiperSlide className="">
          <div className=" slide slide1  min-h-screen      ">
            <div className="w-full bg-black/65  min-h-screen  flex items-center justify-center ">
              <div className="text-white space-y-4">
                <Fade
                  direction="up"
                  delay={200}
                  triggerOnce={true}
                  cascade={false}
                >
                  <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
                  All You 
                    <span className="text-teal-500"> Need!</span>
                  </h1>
                  <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center px-2 ">
                  Discover a Wide Array of Everyday Essentials and Specialty Items in One Convenient Place. From Fresh Produce to Household Goods, We've Got Everything You Need to Keep Your Home Running Smoothly.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide2   min-h-screen       ">
            <div className="w-full bg-black/65 min-h-screen   flex items-center justify-center ">
              <div className="text-white space-y-4">
                <Fade
                  direction="up"
                  delay={200}
                  cascade={false}
                  triggerOnce={true}
                >
                  <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
                  Savor the Finest 
                    <span className="text-teal-500"> Flavors!</span>
                  </h1>
                  <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center">
                  Indulge in Our Curated Selection of Gourmet Delicacies, From Artisan Cheeses to Handcrafted Chocolates. Perfect for Elevating Every Meal or Treating Yourself to Something Special.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className=" slide slide3    min-h-screen     ">
            <div className="w-full bg-black/55   min-h-screen flex items-center justify-center ">
              <div className="text-white space-y-4">
                <Fade
                  direction="up"
                  delay={200}
                  cascade={false}
                  triggerOnce={true}
                >
                  <h1 className=" text-3xl md:text-4xl  lg:text-5xl font-bold text-white text-center">
                  Transform Your 
                    <span className="text-teal-500"> Look!</span>
                  </h1>
                  <p className=" text-sm md:text-base lg:text-lg font-bold text-white max-w-screen-md text-center">
                  Elevate Your Beauty Routine with Our Exclusive Collection of Skincare, Makeup, and Haircare Essentials. Discover the Secrets to Radiant, Glowing Skin and Effortlessly Chic Styles.
                  </p>
                </Fade>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
