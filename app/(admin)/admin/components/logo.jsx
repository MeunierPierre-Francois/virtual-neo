import { AiOutlineHome } from "react-icons/ai";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href={"/"} className="flex gape-1 ">
      <AiOutlineHome className="w-6 h-6 text-primary" />
      <span className="">VirtualNeo</span>
    </Link>
  );
};

export default Logo;
