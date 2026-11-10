import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

import { useTheme } from "../context/ThemeContext";
import { JOURNEY_STEPS, PASSIONS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";

const AboutSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const timelineInView = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const timelineVariants = containerVariants;

  const stepVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 transition-colors duration-300 ease-out ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-20 transition-colors duration-300 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-20 transition-colors duration-300 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            } mb-4 font-semibold`}
          >
            Get to Know Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About{" "}
            <span className={isDarkMode ? "text-blue-400" : "text-blue-600"}>
              Me
            </span>
          </motion.h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-900/50 border-gray-800 backdrop-blur-sm"
                  : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-xl font-bold mb-4">My Mission</h3>
              <p
                className={`text-lg leading-relaxed mb-6 ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                I believe technology should be a bridge that connects people and
                solves real-world problems. My passion lies in crafting digital
                experiences that are not just functional, but delightful and
                accessible to everyone.
              </p>
              <p
                className={`text-base leading-relaxed ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                When I'm not coding, you'll find me exploring new frameworks,
                contributing to open source, or mentoring aspiring developers. I
                love the constant evolution of web technologies and the endless
                possibilities they bring to create meaningful digital
                experiences.
              </p>
            </motion.div>

            {/* What I Love Building */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold mb-4">What I Love Building</h3>
              <div className="space-y-4">
                {PASSIONS.map((passion) => (
                  <motion.div
                    key={passion.title}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-900/30 border-gray-800 hover:bg-gray-800/50"
                        : "bg-gray-50/50 border-gray-200 hover:bg-gray-100/50"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDarkMode ? "bg-gray-800" : "bg-white"
                      }`}
                    >
                      <passion.icon size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">
                        {passion.title}
                      </h4>
                      <p
                        className={`text-sm ${
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {passion.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Developer Journey Timeline */}
          <motion.div
            ref={timelineRef}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            variants={timelineVariants}
            className="relative"
          >
            <h3 className="text-2xl font-bold mb-8">My Developer Journey</h3>

            {/* Timeline Line */}
            <div
              className={`absolute left-8 top-16 bottom-0 w-px ${
                isDarkMode ? "bg-gray-700" : "bg-gray-300"
              }`}
            />

            <div className="space-y-8">
              {JOURNEY_STEPS.map((step, index) => (
                <motion.div
                  key={step.year + index}
                  variants={stepVariants}
                  className="flex items-start gap-6 group relative"
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 z-10 shadow-md`}
                  >
                    <step.icon size={24} className="text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${
                      isDarkMode
                        ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600"
                        : "bg-white/80 border-gray-200 group-hover:border-gray-300 shadow-sm"
                    } backdrop-blur-sm`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-bold">{step.title}</h4>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${
                          isDarkMode
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {step.year}
                      </span>
                    </div>

                    <div
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-blue-400" : "text-blue-600"
                      } mb-3`}
                    >
                      {step.company}
                    </div>

                    <p
                      className={`text-sm leading-relaxed ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-20"
        >
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center space-y-6"
          >
            <p
              className={`text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Ready to bring your ideas to life?
            </p>

            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm font-medium uppercase tracking-wider shadow-lg transition-colors"
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Let's Work Together
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;