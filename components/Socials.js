// next link
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";
const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://github.com/sakibmahbub"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
      <Link
        href={"https://linkedin.com/in/sakibmahbub"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://www.facebook.com/saakibmahbub/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.instagram.com/saakibmahbub/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
    </div>
  );
};

export default Socials;
