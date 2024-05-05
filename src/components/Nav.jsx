import { hovering, navLink } from "./../utils/constant";
import Link from "./../components/Link";
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import MobileNav from "./MobileNav";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

export default function Nav({ setIsOpen, isOpen }) {
  const isMedium = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    if (!isMedium) setIsOpen(false);
  }, [isMedium, setIsOpen]);

  return (
    <nav className=" mr-8">
      <ul className="mt-4 hidden gap-4 font-bold uppercase text-gray-400 md:flex ">
        {navLink.map((data) => (
          <li key={data.title} className={hovering}>
            <Link to={data.path}>{data.title}</Link>
          </li>
        ))}
      </ul>

      <button
        className="absolute right-5 top-6 z-10 block  text-2xl text-white md:hidden"
        onClick={() => setIsOpen((s) => !s)}
      >
        {!isOpen ? <FaBarsStaggered /> : <AiOutlineClose />}
      </button>
      {isOpen && <MobileNav setIsOpen={setIsOpen} />}
    </nav>
  );
}
