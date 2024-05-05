import Layout from "./Layout";

export default function About() {
  return (
    <section
      id="about"
      className="h-auto bg-gradient-to-b from-[#003daf] to-[#00215E]"
    >
      <Layout top="20">
        <div>
          <img src="web.png" className="w-72 md:w-[500px]" />
        </div>
        <div className=" mr-0 w-full md:mr-8">
          <h1 className=" space-y-5 text-left text-stone-50">
            <span
              className="block text-3xl font-extrabold 
            "
            >
              About Me
            </span>
            <p className="text-justify">
              As a Full Stack Developer, I specialize in creating dynamic web
              applications that seamlessly integrate frontend and backend
              functionalities. Leveraging Node.js with Express for backend
              development, I architect scalable systems and design efficient
              APIs to power the core of web applications. On the frontend, I
              utilize a blend of HTML, CSS, and JavaScript alongside modern
              frameworks like React, complemented by styling libraries such as
              Tailwind CSS and Styled Components. With a focus on user-centric
              design and responsive development, I craft visually appealing and
              intuitive interfaces that deliver exceptional user experiences. My
              expertise lies in bridging the gap between frontend aesthetics and
              backend functionality, ensuring the seamless operation of web
              applications from end to end.
            </p>
          </h1>
        </div>
      </Layout>
    </section>
  );
}
