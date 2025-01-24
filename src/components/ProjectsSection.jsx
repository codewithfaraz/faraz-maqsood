import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ProjectCard from "./ProjectCard";
import { projects, categories } from "../data/projects";
import BackgroundObject from "./BackgroundObject";

const ProjectsSection = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" ||
      project.categories.includes(selectedCategory)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const projectVariants = {
    hidden: {
      y: 50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen py-10 px-4 sm:py-20 overflow-y-auto relative"
    >
      <BackgroundObject />
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center gap-4 mb-8 sm:mb-12 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            ← Back
          </motion.button>

          <Menu as="div" className="relative">
            <Menu.Button className="inline-flex items-center justify-center gap-x-1.5 rounded-full bg-blue-600 px-6 py-2 text-sm text-white shadow-sm hover:bg-blue-700 transition-colors whitespace-nowrap">
              {categories.find((cat) => cat.id === selectedCategory)?.name}
              <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
            </Menu.Button>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  {categories.map((category) => (
                    <Menu.Item key={category.id}>
                      {({ active }) => (
                        <button
                          onClick={() => setSelectedCategory(category.id)}
                          className={`${active ? "bg-gray-700" : ""} ${
                            selectedCategory === category.id
                              ? "text-blue-400"
                              : "text-white"
                          } w-full text-left px-4 py-2 text-sm`}
                        >
                          {category.name}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </motion.div>
          </Menu>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.id} variants={projectVariants} layout>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectsSection;
