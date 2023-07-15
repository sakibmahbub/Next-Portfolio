// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Food Fusion",
          path: "/1.png",
          link: "https://food-fusion-a8a59.web.app/",
        },
        {
          title: "PlayWheels",
          path: "/3.png",
          link: "https://playwheels-a4226.web.app/",
        },
        {
          title: "Growjobs",
          path: "/2.png",
          link: "https://growjobs.netlify.app/",
        },

        {
          title: "Ai Universe Hub",
          path: "/6.png",
          link: "https://aiuniversebysakib.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "Legal Solutions",
          path: "/5.png",
          link: "https://legalsolutionswebsite.netlify.app/",
        },

        {
          title: "The code crafter",
          path: "/7.png",
          link: "https://thecodecrafter.netlify.app/",
        },
      ],
    },
  ],
};

// next image
import Image from "next/image";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";

// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// required modules
import SwiperCore, { FreeMode, Pagination } from "swiper";

// Initialize
SwiperCore.use([FreeMode, Pagination]);

//icons
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={Pagination}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt="image.title"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <Link href={image.link}>
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/* title part 1 */}
                            <div className="delay-100">Live</div>
                            {/* title part 2 */}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              Project
                            </div>
                            {/* icon */}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
