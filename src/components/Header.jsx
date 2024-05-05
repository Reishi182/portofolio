import { useState } from "react";
import Nav from "./Nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed z-10 h-[4.5rem] w-full bg-[#00215E]">
      <div className="ml-5 flex justify-between text-center">
        <h1 className="letter mt-6 uppercase text-stone-200 ">
          <span className="inline-block font-bold tracking-widest">
            Portofolio
          </span>
        </h1>
        <Nav setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </header>
  );
}
