import { hovering, navLink } from "../utils/constant";
import Link from "./Link";

export default function MobileNav() {
  return (
    <ul className=" absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-slate-800 text-stone-200 transition-all  ">
      {navLink.map((data) => (
        <li key={data.title} className={hovering}>
          <Link to={data.path}>{data.title}</Link>
        </li>
      ))}
    </ul>
  );
}
