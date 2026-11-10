import { ThemeProvider, useTheme } from "./Components/context/ThemeContext";
import HeroSection from "./Components/Section/HeroSection";
import NavBar from "./Components/Section/NavBar";
import ProjectsSection from "./Components/Section/ProjectSection";
import SkillsSection from "./Components/Section/SkillsSection";
import About from "./Components/Section/About";
import Contact from "./Components/Section/Contact";
import Footer from "./Components/Section/Footer";

function MainLayout() {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ease-out ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <NavBar />
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;