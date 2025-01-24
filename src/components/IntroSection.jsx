import { motion } from "framer-motion";
import BackgroundObject from "./BackgroundObject";

const IntroSection = ({ onShowProjects }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex flex-col justify-center items-center relative"
    >
      <BackgroundObject />
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        className="text-center max-w-3xl mx-auto p-6"
      >
        <h1 className="text-7xl font-bold mb-6 text-gradient">
          Hi, I'm Faraz Maqsood
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          A Full-Stack Developer specialized in MERN stack, crafting beautiful
          and functional web applications.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onShowProjects}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition-colors"
        >
          View My Projects
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default IntroSection;
