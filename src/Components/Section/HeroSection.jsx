import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext.jsx';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { Mail, ArrowDown } from 'lucide-react';
import pic from '../../assets/images/personal.jpg';

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-[#0a0a0a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-20"
      >
        {/* Background Animated Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className={`absolute top-20 right-20 w-80 h-80 rounded-full blur-3xl opacity-20 ${
              isDarkMode ? "bg-blue-600" : "bg-blue-300"
            }`}
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className={`absolute bottom-20 left-10 w-72 h-72 rounded-full blur-3xl opacity-20 ${
              isDarkMode ? "bg-purple-600" : "bg-purple-300"
            }`}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col justify-center text-left"
          >
            <motion.div
              variants={itemVariants}
              className={`text-xs uppercase tracking-widest ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } mb-6 font-medium`}
            >
              Full Stack Developer
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                Building digital
              </span>
              <br />
              <span className="text-blue-600">
                experiences
              </span>
              <br />
              <span className={isDarkMode ? "text-white" : "text-gray-900"}>
                that matter
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className={`text-base lg:text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } mb-10 font-light leading-relaxed max-w-lg`}
            >
              I craft beautiful, functional web applications with modern technologies and thoughtful user experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("work")}
                className={`${
                  isDarkMode ? "bg-white text-gray-900 hover:bg-gray-200" : "bg-[#0f172a] text-white hover:bg-gray-800"
                } px-8 py-4 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300`}
              >
                View Work
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollToSection("contact")}
                className={`border ${
                  isDarkMode
                    ? "border-gray-700 text-gray-300 hover:border-gray-500"
                    : "border-gray-200 text-gray-600 hover:border-gray-400"
                } px-8 py-4 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300`}
              >
                Get in Touch
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex gap-6 items-center mb-8">
              {[
                { icon: FiGithub, href: "https://github.com/koull-Ahmed" },
                { icon: FiLinkedin, href: "https://www.linkedin.com/in/ahmed-chaker-koull-5627a62a9" },
                { icon: Mail, href: "mailto:ahmedchakerkoull@gmail.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className={`${
                    isDarkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
                  } transition-all duration-300`}
                >
                  <social.icon size={22} />
                </motion.a>
              ))}
            </motion.div>

            {/* Tech Stack */}
            <motion.div 
              variants={itemVariants}
              className={`flex gap-3 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"} font-light`}
            >
              <span>React</span>
              <span>·</span>
              <span>Node.js</span>
              <span>·</span>
              <span>MongoDB</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center lg:justify-end items-center"
          >
          
            <div className="relative flex items-center justify-center w-72 h-72 md:w-96 md:h-96 mx-auto rounded-full border-2 border-dashed border-gray-700 p-2">
  <div className="w-full h-full rounded-full overflow-hidden">
    <img
      src={pic}
      alt="Ahmed Chaker Koull"
      className="w-full h-full object-cover scale-[1.85] translate-y-5 -translate-x-2 rounded-full"
    />
  </div>
</div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown
            size={20}
            className={isDarkMode ? "text-gray-600" : "text-gray-400"}
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;