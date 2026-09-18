import { useEffect } from "react"


import Navbar from "../components/Navbar"
import Cabecalho from "../components/Cabecalho"
import Intro from "../components/Intro"
import Principais from "../components/Principais"
import Cores from "../components/Cores"
import Types from "../components/Types"
import Footer from "../components/Footer"


function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".scroll-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-section");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Navbar />
      <Cabecalho />
      <Intro />
      <Principais />
      <Cores />
      <Types />
      <Footer />
    </div>
  )
}

export default App
