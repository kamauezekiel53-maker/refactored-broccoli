import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaSun, FaMoon } from "react-icons/fa";

export default function App() {
  const [dark, setDark] = useState(true);
  const toggleTheme = () => setDark(!dark);

  useEffect(() => {
    document.body.className = dark ? "bg-black text-white" : "bg-white text-black";
  }, [dark]);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-black/40 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold text-purple-400">Ezekiel</h1>
        <div className="flex items-center gap-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="hover:text-purple-400 transition"
            >
              {s.label}
            </a>
          ))}
          <button onClick={toggleTheme} className="text-xl">
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* Floating background shapes */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Sections */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-bold"
        >
          Hi, I’m <span className="text-purple-400">Ezekiel</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-lg text-gray-400"
        >
          A passionate Web Developer crafting stunning UIs ✨
        </motion.p>
      </section>

      <section id="about" className="min-h-screen flex flex-col justify-center items-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-semibold mb-4"
        >
          About Me
        </motion.h2>
        <p className="max-w-2xl text-center text-gray-400">
          I’m Ezekiel, a front-end developer who loves creating interactive and visually appealing digital experiences using React, Tailwind, and Framer Motion.
        </p>
      </section>

      <section id="skills" className="min-h-screen flex flex-col justify-center items-center">
        <motion.h2 className="text-3xl font-semibold mb-8">Skills</motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["HTML", "CSS", "JavaScript", "React", "Tailwind", "GitHub", "Vercel", "Framer Motion"].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.1 }}
              className="px-6 py-4 bg-purple-500/10 rounded-xl border border-purple-400/30 text-center"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="projects" className="min-h-screen flex flex-col justify-center items-center">
        <motion.h2 className="text-3xl font-semibold mb-8">Projects</motion.h2>
        <div className="grid md:grid-cols-3 gap-8 px-8">
          {[1, 2, 3].map((p) => (
            <motion.div
              key={p}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-500/10 border border-purple-400/20 rounded-xl overflow-hidden shadow-lg"
            >
              <img src={`/images/project${p}.png`} alt={`Project ${p}`} />
              <div className="p-4">
                <h3 className="font-bold text-purple-300">Project {p}</h3>
                <p className="text-sm text-gray-400">Interactive project showcase {p}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="contact" className="min-h-screen flex flex-col justify-center items-center">
        <motion.h2 className="text-3xl font-semibold mb-8">Contact</motion.h2>
        <div className="flex gap-8 text-3xl text-purple-400">
          <a href="mailto:kamauezekiel53@gmail.com"><FaEnvelope /></a>
          <a href="https://github.com/kamauezekiel53-maker"><FaGithub /></a>
          <a href="https://linkedin.com"><FaLinkedin /></a>
        </div>
        <p className="mt-4 text-gray-400">Let’s create something amazing together!</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Ezekiel — Built with ❤️ React & Tailwind
      </footer>
    </div>
  );
}