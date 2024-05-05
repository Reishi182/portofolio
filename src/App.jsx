import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col  ">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
