import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { useTheme } from "../context/ThemeContext";
import { SKILLS_CATEGORY, STATS, TECH_STACK } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const yBg1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  const skillBarVariants = {
    hidden: { width: "0%", opacity: 0 },
    visible: ({ level, index }) => ({
      width: `${level}%`,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2 + index * 0.08,
      },
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className={`py-24 px-6 transition-colors duration-300 ease-out ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Parallax Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          style={{ y: yBg1 }}
          className={`absolute top-20 right-1/4 w-72 h-72 rounded-full blur-3xl opacity-20 transition-colors duration-300 ${
            isDarkMode ? "bg-blue-600" : "bg-blue-400"
          }`}
        />
        <motion.div
          style={{ y: yBg2 }}
          className={`absolute bottom-20 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 transition-colors duration-300 ${
            isDarkMode ? "bg-purple-600" : "bg-purple-400"
          }`}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className={`text-xs uppercase tracking-widest ${
              isDarkMode ? "text-gray-400" : "text-gray-500"
            } mb-3 font-semibold`}
          >
            Technical Expertise
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Skills &{" "}
            <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>
              Technologies
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-base md:text-lg ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } max-w-2xl mx-auto font-light leading-relaxed`}
          >
            A comprehensive toolkit for building modern, scalable web applications from concept to deployment.
          </motion.p>
        </motion.div>

        {/* Skills Category Grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 lg:gap-10"
        >
          {SKILLS_CATEGORY.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`p-8 rounded-2xl border transition-colors duration-300 ${
                isDarkMode
                  ? "bg-gray-900/60 border-gray-800 backdrop-blur-sm"
                  : "bg-white/80 border-gray-200 backdrop-blur-sm shadow-sm"
              }`}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div
                  className={`p-3 rounded-xl transition-colors duration-300 ${
                    isDarkMode ? "bg-gray-800" : "bg-gray-100"
                  } mr-4`}
                >
                  <category.icon size={24} className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  <p
                    className={`text-sm ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Bar List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span
                        className={`text-xs ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div
                      className={`h-2 rounded-full overflow-hidden transition-colors duration-300 ${
                        isDarkMode ? "bg-gray-800" : "bg-gray-200"
                      }`}
                    >
                      <motion.div
                        variants={skillBarVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        custom={{ level: skill.level, index: skillIndex }}
                        className={`h-full ${skill.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills (Also Working With) */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <h3 className="text-xl font-medium mb-4">Also Working With</h3>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
          >
            {TECH_STACK.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ y: -2, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className={`px-4 py-2 text-sm rounded-full border transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gray-900 border-gray-700 text-gray-300 hover:border-gray-500"
                    : "bg-white border-gray-300 text-gray-700 hover:border-gray-400 shadow-sm"
                }`}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div
                className={`text-3xl md:text-4xl font-light mb-1 ${
                  isDarkMode ? "text-blue-400" : "text-blue-600"
                }`}
              >
                {stat.number}
              </div>
              <div
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;