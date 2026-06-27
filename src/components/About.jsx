import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="about"
      className="px-20 py-20"
    >
      <div className="bg-slate-900 border border-gray-800 rounded-3xl p-10 shadow-lg">

        <h2 className="text-4xl font-bold text-purple-400 mb-6">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-8">
          I am a Computer Science student passionate about
          Data Analytics, Machine Learning, and Artificial Intelligence.
          I enjoy transforming data into meaningful insights using
          Python, SQL, Power BI, and modern AI technologies.
        </p>

      </div>
    </motion.section>
  );
}

export default About;