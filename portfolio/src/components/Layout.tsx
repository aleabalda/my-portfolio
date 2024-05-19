import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import About from "./About";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="page">
        <Hero />
        <Projects />
        <Skills />
        <About />
      </main>
      <Footer />
    </>
  );
}
