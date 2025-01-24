import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [showProjects, setShowProjects] = useState(false);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
    }),
  };

  const slideTransition = {
    duration: 0.5,
    ease: "easeInOut",
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Header currentSlide={showProjects ? "projects" : "intro"} />
      <AnimatePresence
        initial={false}
        mode="wait"
        custom={showProjects ? -1 : 1}
      >
        {!showProjects ? (
          <motion.div
            key="intro"
            className="slide-container"
            variants={slideVariants}
            custom={1}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
          >
            <IntroSection onShowProjects={() => setShowProjects(true)} />
          </motion.div>
        ) : (
          <motion.div
            key="projects"
            className="slide-container"
            variants={slideVariants}
            custom={-1}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
          >
            <ProjectsSection onBack={() => setShowProjects(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
