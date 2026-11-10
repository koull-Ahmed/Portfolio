import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, index, isDarkMode }) => {
  // Safety guard clause: return null if project item is missing or undefined
  if (!project) return null;

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="group relative"
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
          isDarkMode
            ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-xl hover:shadow-black/20"
            : "bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-lg"
        } backdrop-blur-sm`}
      >
        {/* Project Image Container */}
        <div className="relative overflow-hidden aspect-video">
          <img
            src={project?.image || ""}
            alt={project?.title || "Project"}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Featured Badge */}
          {project?.featured && (
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-600 text-white shadow-md">
                Featured
              </span>
            </div>
          )}

          {/* Category Badge */}
          {project?.category && (
            <div className="absolute top-4 right-4 z-10">
              <span
                className={`text-xs px-3 py-1 rounded-full font-medium ${
                  isDarkMode
                    ? "bg-gray-800/80 text-gray-300"
                    : "bg-white/80 text-gray-700"
                } backdrop-blur-sm`}
              >
                {project.category}
              </span>
            </div>
          )}

          {/* Hover Overlay with CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-xs flex items-center justify-center gap-3 z-20"
          >
            <motion.a
              href={project?.liveUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0.5 }}
              whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full flex items-center gap-2 transition-colors shadow-md"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </motion.a>

            <motion.a
              href={project?.githubUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0.5 }}
              whileHover={{ y: 0, opacity: 1, scale: 1.05 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="px-4 py-2 bg-white hover:bg-gray-100 text-gray-900 text-sm font-medium rounded-full flex items-center gap-2 transition-colors shadow-md"
            >
              <FiGithub size={16} />
              <span>GitHub</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3 className="text-xl font-medium mb-3 group-hover:text-blue-500 transition-colors">
            {project?.title}
          </h3>

          <p
            className={`text-sm leading-relaxed mb-4 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {project?.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {(project?.tags || []).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className={`text-xs px-3 py-1 rounded-full ${
                  isDarkMode
                    ? "bg-gray-800 text-gray-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;