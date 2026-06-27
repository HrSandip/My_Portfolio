import profile from "../assets/hero.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-between px-20">

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2"
      >
        <p className="text-green-400">
          ● Available for opportunities
        </p>

        <h1 className="text-7xl font-bold mt-6">
          Sandip <span className="text-purple-500">Das</span>
        </h1>

        <h2 className="text-3xl text-purple-400 mt-5">
          Data Analyst & AI/ML Enthusiast
        </h2>

        <p className="mt-6 text-gray-400">
          I transform raw data into meaningful insights
          and build intelligent solutions using AI and ML.
        </p>

        <div className="flex gap-5 mt-8">
          <a
          href="/SandipCv_1.pdf"
          download
          className="bg-purple-600 px-6 py-3 rounded-xl hover:bg-purple-700 transition"
          >
            Download CV
            </a>

          <button className="border border-purple-500 px-6 py-3 rounded-xl">
            Contact Me
          </button>
        </div>

        <div className="flex gap-6 text-3xl mt-10">
          <FaGithub />
          <FaLinkedin />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-1/2 flex justify-center"
      >
        <img
          src={profile}
          alt="Profile"
          className="w-80 h-96 rounded-3xl border-4 border-purple-500 bg-slate-800 shadow-2xl"
        />
      </motion.div>

    </section>
  );
}

export default Hero;