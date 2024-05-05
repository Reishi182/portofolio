import { TypeAnimation } from "react-type-animation";
import Layout from "./Layout";

export default function Hero() {
  return (
    <section className="mt-[4.5rem] h-auto bg-gradient-to-b from-[#00215E] to-[#003daf]">
      <div
        className="py-18 container mx-auto mb-10 mt-8 flex w-full flex-col-reverse
   items-center justify-around gap-8 px-4 md:flex-row md:space-y-0"
      >
        <div className=" mt-5  md:mt-20 md:w-[50%] ">
          <h1 className="  text-stone-100 ">
            <span className="text-3xl font-bold">Hello, I'm </span>
            <span className="bg-gradient-to-br from-[#f39c12] to-[#e23d3d] bg-clip-text text-3xl font-bold text-transparent">
              <TypeAnimation
                sequence={[
                  "Gary",
                  1000,
                  "A Web Developer",
                  1000,
                  "A Backend Developer",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
            <p className="mt-4 text-justify text-base">
              As a frontend developer, my main task is to ensure a seamless and
              responsive user experience on web applications. Using languages
              like HTML, CSS, and JavaScript, I create engaging and
              user-friendly interfaces. I focus on performance optimization and
              cross-platform compatibility, enabling users to access
              applications smoothly across various devices and browsers.
              Additionally, I enjoy staying updated on the latest web
              technologies to enhance my skills in crafting exceptional user
              experiences.
            </p>
          </h1>
        </div>
        <div>
          <img src="me.png" className="w-64 md:w-80" />
        </div>
      </div>
    </section>
  );
}
