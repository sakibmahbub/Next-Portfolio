// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from "../components/Socials";
import { BsArrowDown } from "react-icons/bs";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 md:py-8">
          {/* logo */}
          <Link href="/">
            <h1 className="text-3xl font-light">
              <span className="font-semibold ">Sakib</span> Mahbub
            </h1>
          </Link>
          {/* socials */}
          <div className="flex justify-between items-center gap-5">
            <Socials />
            <Link href="/Resume.pdf">
              <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0  transition-all duration-500">
                  Resume
                </span>
                <BsArrowDown className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
