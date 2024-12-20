import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";
import Contact from "./Contact";
import { Blog } from "./Blog"

export default function Layout() {
  return (
    <>
      <Header />
      <main className="page">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
