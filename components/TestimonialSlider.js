// testimonial data
const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "teezyvai",
    position: "Customer",
    message:
      "It was very exciting to work with a professional who loves and knows what they are doing. He executed my expectations with accuracy and I am well pleased. I would definitely recommend him. If you are looking for your website to be done with excellency then shoot him a message.!",
  },
  {
    image: "/t-avt-2.png",
    name: "jasminewade",
    position: "Customer",
    message:
      "Sakib did an amazing job on my website for my new business. His communication is also great and on time every time. I had no idea how to creat a professional website and he made my Dream website come to life. Thank you 🙏 so much. I will definitely recommend his services to others!!",
  },
  {
    image: "/t-avt-3.png",
    name: "jahmayamesidor",
    position: "Customer",
    message:
      "Great service and attention to details. Great experience! I can not recommend highly enough, thank you to sakib_mahbub and will be using again in future.!",
  },
];

// next image
import Image from "next/image";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// required modules
import SwiperCore, { Navigation, Pagination } from "swiper";

// Initialize
SwiperCore.use([Navigation, Pagination]);

//icons
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={(Navigation, Pagination)}
      className="h-[400px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              {/* avatar,name,position */}
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  {/* avatar */}
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" />
                  </div>
                  {/* name */}
                  <div className="text-lg">{person.name}</div>
                  {/* position */}
                  <div className="text-[12px] uppercase font-extralight tracking-widest">
                    {person.position}
                  </div>
                </div>
              </div>
              {/* quote & message */}
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                {/* quote icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
                </div>
                {/* message */}
                <div className="xl:text-lg text-center md:text-left">
                  {person.message}
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
