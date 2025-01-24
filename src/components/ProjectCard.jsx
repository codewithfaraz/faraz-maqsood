import { motion } from "framer-motion";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg w-full border border-gray-700"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.2,
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
        {project.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-300 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-900/50 text-blue-200 px-2 py-1 rounded-md text-xs sm:text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-700/50 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm transition-colors"
          >
            <CodeBracketIcon className="w-4 h-4" />
            <span>Code</span>
          </a>
        )}
        {project.preview && (
          <a
            href={project.preview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600/80 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm transition-colors"
          >
            <GlobeAltIcon className="w-4 h-4" />
            <span>Live Demo</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
